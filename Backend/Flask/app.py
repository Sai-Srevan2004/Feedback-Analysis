from flask import Flask, request, jsonify
from flask_cors import CORS
from scraper import scrape_data

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data.get('url')

    if not url:
        return jsonify({"error": "URL is required"}), 400

    scraped_data = scrape_data(url)
    return jsonify(scraped_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

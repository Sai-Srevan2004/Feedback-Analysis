import requests
from bs4 import BeautifulSoup

def scrape_data(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        title = soup.title.string if soup.title else 'No title found'
        scraped_data = {"url": url, "title": title}
        return scraped_data
    except Exception as e:
        return {"error": str(e)}

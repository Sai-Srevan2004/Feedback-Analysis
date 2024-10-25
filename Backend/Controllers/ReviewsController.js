const axios=require('axios')
 
const getReviews=async (req, res) => {
    const { url } = req.body;

    console.log(req.body)

    if (!url) {
        return res.status(400).send({ error: 'URL is required' });
    }

    try {
        // Send the URL to Flask for scraping
        const flaskResponse = await axios.post('http://192.168.191.237:5000/reviews', { url });

        console.log(flaskResponse)

        // Get the scraped data from Flask
        const scrapedData = flaskResponse.data;

        // Return the scraped data to the client (or store/process it in your DB)
        res.send(scrapedData);
    } catch (error) {
        console.error("Error scraping URL:", error);
        res.status(500).send({ error: 'Failed to scrape data' });
    }
};


module.exports={getReviews}
# simple-image-crawler


This is a simple service for crawling a specific page and bring a list of images urls and word count.

It was built using:
- Next.js - as full-stack web framework
- Tailwind - as CSS framework
- Axios - as http client to get page data
- Cheerio - as html parser
- Jest - for testing
- Vercel Functions - as serverless hosting platform.

## Setup local environment
### Install depedencies
```
npm install
```

### Start project
```
npm run dev
```

Server should start and UI should be running at: http://localhost:3000/
Crawling backend API service endpoint: http://localhost:3000/api/crawl


## Crawl a page
You will need:
- **url**: page URL, HTML encoded, to be crawled and parsed.
  
- **token**: credential key set in the **AUTH_TOKEN** environment variable. Locally, that token is set in the **.env** file, while in other environments it is set directly in the hosting environment.

## Crawl via UI
Access the UI at http://localhost:3000/
Fill the form with Page URL to be crawled, and the security token.

## Crawl via backend API directly:
Send a POST to http://localhost:3000/api/crawl passing URL and token as part of the body.

### Example
```
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://www.hello.com", "token": "b5hAxd2vXzbINBz" }' http://localhost:3000/api/crawl
```
#### Response
```
{
    "success": true,
    "message": "",
    "data": {
        "images": [
            "/img/hello-logo.png",
            "/textinputassistant/tia.png"
        ],
        "wordCount": 77
    }
}
```

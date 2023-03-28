# simple-image-crawler


This is a simple service for crawling a specific page and bring a list of images urls and word count.

It was built using:
- Axios - as http client
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
npm run local
```

Project should start and crawling service should be available locally at: http://localhost:3000/api/handler

## Crawl a page
### Parameters

Send a POST to http://localhost:3000/api/handler passing the following parameters:
- **url**: page URL, HTML encoded, to be crawled and parsed.
  
- **token**: credential key set in the **AUTH_TOKEN** environment variable. Locally, that token is set in the **.env** file, while in other environments it is set directly in the hosting environment.
  
## Example
Crawling https://www.hello.com page:

### Request
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://www.hello.com", "token": "b5hAxd2vXzbINBz" }' http://localhost:3000/api/handler 

### Response
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

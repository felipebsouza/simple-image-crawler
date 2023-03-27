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

Send a GET to http://localhost:3000/api/handler passing the following parameters:
- **url**: page URL, HTML encoded, to be crawled and parsed.
  
- **token**: credential key set in the **AUTH_TOKEN** environment variable. Locally, that token is set in the **.env** file, while in other environments it is set directly in the hosting environment.
  
## Example
Crawling https://www.hello.com page:

### Request
GET http://localhost:3000/api/handler?url=http%3A%2F%2Fwww.hello.com&token=b5hAxd2vXzbINBz

### Response
```
{
    "success": true,
    "message": "",
    "data": {
        "images": [
            "/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png",
            "/textinputassistant/tia.png"
        ],
        "wordCount": 157
    }
}
```

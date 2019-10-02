# API and Deployment

## Introduction

The Responsive Paper HTML to PDF API is an easy to use web service that renders web pages annotated with the [Responsive Paper CSS classes](/css-reference) and delivers the paginated view as a PDF document. The service utilizes the headless chrome browser rendering engine incorporating the latest rich html / css / js capabilities.

## Quick Start

Here's an example in node (be sure to replace the token with one from your [dashboard](https://www.responsivepaper.com/user/dashboard)):

```
var request = require("request");

var options = {
  method: "POST",
  url: "https://wwww.responsivepaper.com/api/html2pdf/v2/convert",
  headers: {
    "x-access-token": "__YOUR_ACCESS_TOKEN__",
    "Content-Type": "application/json"
  },
  json: true,
  form: {
    "url": "https://examples.respoonsivepaper.com/invoice",
    "json": "true"
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  //save to file
  fs.writeFileSync(path.join )


});

```

Please see the deployment folder in the [examples repository](https://github.com/ResponsivePaper/responsivepaper-examples) for more implementation examples.


## Testing UI


## API

### imageDelay

### emulateMedia

### waitForReadyToRender




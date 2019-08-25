# Tutorial

This tutorial will guide you through building a simple catalog report. Concepts covered include:

* Page headers
* Force Page breaks
* Page numbering
* Group headers
* Table of Contents
* Canvas support for js rendering libraries
* Changing paper sizes and orientation
* Debug logs

## Development Environment

The Responsive Paper Service (RPS) uses headless chrome server side so it is advised to develop your reports using google chrome.  You will also need a development server installed such as http-server (npm http-server).

```
npm install http-server -g
http-server

```

## Initial HTML Template

Clone the [Responsive Paper Examples repository](https://github.com/responsivepaper/examples) or make a copy of the starter template [index-01.html](https://github.com/responsivepaper/examples/tutorial/index-01.html) and the example [data.json](https://github.com/responsivepaper/examples/tutorial/data.json) .  This includes a link to the responsive-paper.designer.css file to help in building the layout for your reports.  It also has div element which has the rp-page and rp-ps-letter classes. The rp-page class identifies the content to be parsed into pdf pages and the optional rp-ps-letter class which sets the page size and orientation.

```
    <div class="rp-page rp-ps-letter" id="rpReport">
        Hello World
    </div>

```

Open a terminal window and install run the following command:

```
http-server
```

Open chrome and navigate to the testing url (e.g. http://localhost:8080/tutorial/index-01.html)

Verify that you have followed the instructions in the [Getting Started](/#/getting-started) section and select the "Preview pdf" from the Responsive Paper chrome extension menu.

If everything works you should see a pdf open in a new tab with the text "Hello World".

##
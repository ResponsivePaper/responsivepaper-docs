# Tutorial

This tutorial will guide you through building a simple catalog report. Concepts covered include:

* Changing paper sizes and orientation
* Page headers
* Force Page breaks
* Page numbering
* Fetching dynamic content and debug logs
* Group headers
* Table of Contents
* Cover page (full page)

## Development Environment

Follow the steps in the [Getting Started](/getting-started) section to get an api key and install the localtunnel.me app. The Responsive Paper Service (RPS) uses headless chrome server side so it is advised to develop your reports using google chrome or the brave browser.  You will also need a development server installed such as live-server (npm live-server).

```
npm install live-server -g
```

## Initial Configuration

Open a git bash and clone the [Responsive Paper Examples repository](https://github.com/responsivepaper/examples):

```
mkdir responsivepaper
cd responsivepaper
git clone https://github.com/responsivepaper/examples
cd examples
```

Copy of the responsive-paper.settings-template.js to responsive-paper.settings.js:

```
cp responsive-paper.settings-template.js responsive-paper.settings.js
```

## Start up the servers

Start up a local web server

```
live-server
```

Make note of the port, switch to a new terminal and start up a new localtunnel.me tunnel (replace the port with the one where live-server is running):
```
lt --port 8080
```

## Update your local configuration

Open the responsive-paper.settings.js file in your favorite editor and update it with your tunnelHostUrl created by the lt command entered above.  Also update your apikey and save the file.  NOTE: If you restart your local web server or tunnel you made need to update the tunnelHostUrl if the url changes.

## Step 1 - Initial page layout
In your web browser navigate to http://127.0.0.1:8080/tutorial/index-01.html

Open the /tutorial/index-01.html file in your editor.


The index-01.html includes a div element which has the rp-page and rp-ps-letter classes. The rp-page class identifies the content to be parsed into pdf pages and the optional rp-ps-letter class which sets the page size and orientation.  See the [paper size](/css-reference?id=rp-ps-paper-size-and-orientation) section of the css reference for more info on paper sizes.

```
    <div class="rp-page rp-ps-letter" id="rpReport">
        <img class="logo" src='images/logo.png' />
        <p>Catalog Report</p>
    </div>

```

The index-01.html includes a link to the responsive-paper.designer.js file which automatically adds design time css and previews the current page to help in building the layout for your reports.

### Set up automatic previewing of the html page

Open responsive-paper.settings.js and update the following to "true":

```
  //...
  applyResponsivePaperCss: true,
  autoPreview: true,
  includeConsole: true,
  //...
```

Save the file and you should see an html preview in the browser tab and a pdf preview open in a new tab.

Try changing the paper size and layout by updating the index-01.html:

```
    <div class="rp-page rp-ps-letter-ls" id="rpReport">

```

Saving index-01.html will automatically update the html and pdf previews.


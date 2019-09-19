# Tutorial

This tutorial will guide you through building a simple catalog report. Concepts covered include:

* Changing paper sizes and orientation
* Page headers and footers
* Page breaks
* Page numbering
* Group headers
* Table of Contents
* Cover page (full page)
* Fetching dynamic content and debug logs


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

Start up a local web server (see [getting started](/getting-started) for install instructions)

```
live-server
```

Make note of the port, switch to a new terminal and start up a new localtunnel.me tunnel (replace the port with the one where live-server is running):
```
lt --port 8080
```

Now your local dev server is accessible by the outside world, including the responsivepaper.com rendering service.


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
  //...
```

Save the file and you should see an html preview in the browser tab and a pdf preview open in a new tab.

Try changing the paper size and layout by updating the index-01.html:

```
    <div class="rp-page rp-ps-letter-ls" id="rpReport">

```

Saving index-01.html will automatically update the html and pdf previews.

## Step 2 - Page Headers, Footers and Page Breaks

?> TIP: You can see the completed step 2 at /tutorial/index-02.html

Replace the content inside the div.rp-page with this content and save the file:

```
        <div class="rp-page-header">
            <img class="logo" src='images/logo.png' />
            <p>Catalog Report</p>
        </div>
        <p>First page content</p>
        <div class="rp-force-page-break"></div>
        <p>Second page content</p>
        <div class="rp-page-footer">
            <div>&copy; 2019 example.com, all rights reserved</div>
        </div>
```

Now compare the rendered html to the pdf.  Notice the page break is rendered as a red bar in the designer view but it generates an actual page break in the rendered pdf. Also the logo and report header are rendered on both pages because they are contained in the div.rp-page-header element. The div.rp-page-footer section is aligned to the bottom of the page.

Try adding the rp-ps-letter-ls to the div.rp-page-break element to cause the rendering engine to switch between page layouts and create a multi format pdf:

```
        <div class="rp-force-page-break rp-ps-letter-ls"></div>
```

?> TIP: The designer css doesn't properly display different page sizes and orientations. For testing set the paper size on the top level rp-page element to test sections of your reports in alternative formats.

?> TIP: Have your users use Adobe Reader for printing pdf files with different page sizes so that the paper is automatically selected from the correct paper tray.  This is not necessary if you are just switching orientation in your reports (e.g. rp-ps-letter and rp-ps-letter-ls)

## Step 3 - Page Numbering

?> TIP: You can see the completed step 3 at /tutorial/index-03.html

Replace the html inside the div.rp-page-footer element with the following:

```
            <div style="float: right">Page <span class='rp-page-number'>999</span> of <span
                    class='rp-page-count'>1000</span></div>

```

Take a look at the html page and notice the page number and count are 999 and 1000, however in the pdf preview the number and count are updated to reflect the actual page and page count.
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
* Hiding/showing content based on paper size

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


The index-01.html includes a div element which has the `rp-page` and `rp-ps-letter` classes. The `rp-page` class identifies the content to be parsed into pdf pages and the optional `rp-ps-letter` class which sets the page size and orientation.  See the [paper size](/css-reference?id=rp-ps-paper-size-and-orientation) section of the css reference for more info on paper sizes.

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

Replace the content inside the `div.rp-page` with this content and save the file:

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

Now compare the rendered html to the pdf.  Notice the page break is rendered as a red bar in the designer view but it generates an actual page break in the rendered pdf. Also the logo and report header are rendered on both pages because they are contained in the `div.rp-page-header` element. The `div.rp-page-footer` section is aligned to the bottom of the page.

Try adding the `rp-ps-letter-ls` to the `div.rp-page-break` element to cause the rendering engine to switch between page layouts and create a multi format pdf:

```
        <div class="rp-force-page-break rp-ps-letter-ls"></div>
```

?> TIP: The designer css doesn't properly display different page sizes and orientations. For testing set the paper size on the top level `rp-page` element to test sections of your reports in alternative formats.

?> TIP: Have your users use Adobe Reader for printing pdf files with different page sizes so that the paper is automatically selected from the correct paper tray.  This is not necessary if you are just switching orientation in your reports (e.g. `rp-ps-letter` and `rp-ps-letter-ls`)

## Step 3 - Page Numbering

?> TIP: You can see the completed step 3 at /tutorial/index-03.html

Replace the html inside the `div.rp-page-footer` element with the following:

```
            <div style="float: right">Page <span class='rp-page-number'>999</span> of <span
                    class='rp-page-count'>1000</span></div>

```

Take a look at the html page and notice the page number and count are 999 and 1000, however in the pdf preview the number and count are updated to reflect the actual page and page count.

## Step 4 - Groups and Group Headers

?> TIP: You can see the completed step 4 at /tutorial/index-04.html

Imagine that you want to have a Category header for each category above the category's parts listing.  To accomplish this replace the content in between the `div.rp-page-header` and `div.rp-page-footer` with this html:

```
        <div id="cat1" class="rp-group">
            <div class="rp-group-header">Category 1</div>
            <p>First page content for category 1</p>
            <div class="rp-force-page-break"></div>
            <p>Second page content for category 1</p>
        </div>
        <div class="rp-force-page-break"></div>
        <div id="cat2" class="rp-group">
            <div class="rp-group-header">Category 2</div>
            <p>First page content for category 2</p>
            <div class="rp-force-page-break"></div>
            <p>Second page content for category 2</p>
        </div>

```

If you wanted a visual indication that there are more than 1 page for a group you can use the 'rp-hide-on-first-page' class. Here's a new version of the code which shows a "Continued" label on all but the first page for a given group:

```
        <div id="cat1" class="rp-group">
            <div class="rp-group-header">Category 1<span class="rp-hide-on-first-page"> - Continued</span></div>
            <p>First page content for category 1</p>
            <div class="rp-force-page-break"></div>
            <p>Second page content for category 1</p>
        </div>
        <div class="rp-force-page-break"></div>
        <div id="cat2" class="rp-group">
            <div class="rp-group-header">Category 2<span class="rp-hide-on-first-page"> - Continued</span></div>
            <p>First page content for category 2</p>
            <div class="rp-force-page-break"></div>
            <p>Second page content for category 2</p>
        </div>
```
Groups can be nested as deep you want (e.g. a `div.rp-group` can contain many `div.rp-groups`, etc. )

!> IMPORTANT: The `rp-group-header` element MUST be a direct child of the `rp-group` element

## Step 5 - Table of Contents

?> TIP: You can see the completed step 5 at /tutorial/index-05.html

To add a table of contents, add the following html before the `div.rp-page-header` element (we'll clean up the styling at the end of the tutorial):

```
        <h3>Table of Contents</h3>
        <div>
            <a href="#cat1">
                <span>Category 1 - Page </span> <span class="rp-id-page-number" data-id="cat1">1</span>
            </a>
        </div>
        <div>
            <a href="#cat2">
                <span>Category 2 - Page </span> <span class="rp-id-page-number" data-id="cat2">1</span>
            </a>
        </div>
        <div class="rp-force-page-break"></div>
```

Now, take a look at the html page in the browser and the pdf preview and notice how the pdf engine has replaced the page numbers in the TOC.  This technique can also be used for indexes or cross page referencing.  For example if you wanted to reference Category 1 from some content in Category 2 you could add this to the Category 2 section:

```
For more information on Category 1, please see page
                <a href="#cat1"><span class="rp-id-page-number" data-id="cat1">1</span></a>

```

## Step 6 - Cover pages (full page without headers and footers)

?> TIP: You can see the completed step 6 at /tutorial/index-06.html

Using the `rp-full-page` and `rp-contain` classes it is possible to hide the headers and footers for a given page and create nice looking cover pages or full page graphic sections for your reports.  Try adding the following html before the table of contents section:

```
        <div class="cover rp-full-page rp-contain">
            <div class="cover-content">
                <img src="images/logo.png" />
                <h2>
                    PRODUCT CATALOG
                </h2>
            </div>
        </div>
```

And the following to the head section:

```
        <style>
            /* Inlining style for instruction purposes only*/
            .cover {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background: url("images/ocean.jpg") no-repeat center 35%;
                background-size: auto 90%;
            }

            .cover-content h2 {
                padding: 20px;
            }

            .cover-content img {
                width: 100%
            }
        </style>
```

You should now see the html and pdf previews updated with the cover page.


## Step 7 - Waiting for Dynamic Content

?> TIP: You can see the completed step 7 at /tutorial/index-07.html

Up to this point in the tutorial we've only been loading static content into the page. There are times when you may want to load external data and inject it into your report. For example from a CMS or external api.  Or you may want to generate some charts and inject them into the page. In this section we'll use vue.js templating to render actual product data from the data.json included with the tutorial.

First replace the div#cat1 and div#cat2 elements (all the contents between the `div.rp-page-header` and `div.rp-page.footer` elements) with the following html:

```
        <!-- STEP 7: Dynamic data -->
        <div v-for="(cat,index) in categories">
            <div v-if="index !== 0" class="rp-force-page-break"></div>
            <div v-bind:id="'cat' + cat.categoryID" class="rp-group">
                <h2 class="rp-group-header">{{cat.categoryName}}<span class="rp-hide-on-first-page"> -
                        Continued</span></h2>
                <table class="rp-group">
                    <thead class="rp-group-header">
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th class="colQuantityPerUnit">Quantity Per Unit</th>
                            <th class="colUnitsInStock">In Stock Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="p in cat.products">
                            <td>{{p.productName}}</td>
                            <td>{{p.unitPrice}}</td>
                            <td class="colQuantityPerUnit">{{p.quantityPerUnit}}</th>
                            <td class="colUnitsInStock">{{p.unitsInStock}}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
```

Then add the following script references to the bottom of the page:

```
    <script src="/lib/vue.js"></script>
    <script src="index.js"></script>


```

?> NOTE: The example data has some duplicate data in order to demonstrate groups spanning multiple pages.

Notice that the html preview shows many lines of product data but the pdf preview doesn't show any product data, just the cover page and the table of contents.  The Responsive Paper service has rendered the pdf before the page's javascript was finished loading data into the html.  To fix this, open the responsive-paper.settings.js file and update the following settings to true:

```

  includeConsole: true,
  waitForReadyToRender: true,

```

Open the /tutorial/index.js file in your editor and you'll see that the script has set window.RESPONSIVE_PAPER_READY_TO_RENDER = true after the code to render the vue template:

```
var vm = new ViewModel()
vm.init().then(() => {
  var app = new Vue({
    el: '#rpReport',
    data: {
      categories: vm.categories
    }
  })
  window.RESPONSIVE_PAPER_READY_TO_RENDER = true
})

```

Now, take a look at the pdf preview and you'll see the data rendered correctly. Also, because we set includeConsole = true in the settings, the Responsive Paper has added a page to the report containing the console captured during rendering on the server. This can be very helpful for debugging purposes.

## Step 8 - Table of Contents v2

?> TIP: You can see the completed step 8 at /tutorial/index-08.html

Let's fix up the TOC to use vue rendering so it not hardcoded to Category 1 and 2:

```

<!--STEP 8: Updated Table of contents-->
<div class="rp-force-page-break"></div>
<div class="toc">
    <h3>Table of Contents</h3>
    <ul class="toc-content">
        <li v-for="cat in categories">
            <a :href="'#cat' + cat.categoryID">
                <span class="toc-heading">{{cat.categoryName}}</span><span
                    class="rp-id-page-number toc-page-number" :data-id="'cat' + cat.categoryID">1</span>
            </a>
        </li>
    </ul>
</div>
<div class="rp-force-page-break"></div>


```

Change the styles reference to main-08.css which contains a little formatting to clean up the report:

```
    <link rel="stylesheet" href="main-08.css" />
```

## Step 9 - Hiding/Showing Content Based on Paper Size

?> TIP: You can see the completed step 9 at /tutorial/index-09.html

Let's say you think the report is too cluttered printing on letter size paper in portrait mode but ok in landscape mode.  One solution would be to hide the "Quantity Per Unit" column if the report was generated to letter in landscape mode or wider. To accomplish this, add a style link in the head section to the responsive-paper-sizes.min.css:

```
<link href='https://www.responsivepaper.com/utils/responsive-paper-sizes.css' rel='stylesheet' type='text/css'>

```

And update the th and td elements to reference the responsive classes:

```
<th class="rp-visible-letter-ls colQuantityPerUnit">Quantity Per Unit</th>

<td class="rp-visible-letter-ls colQuantityPerUnit">{{p.quantityPerUnit}}</th>

```

Preview the report and you'll see the QuantityPerUnit column is hidden in portrait mode.  Now change the default report paper size:

```
    <div class="rp-page rp-ps-letter-ls" id="rpReport">

```

The Quantity Per Unit column is now visible.  See the [rp-visible-*](/css-reference?id=rp-visible-) and [rp-hidden-*](/css-reference?id=rp-hidden-) reference sections for more information on the "responsive" paper size classes.



To learn more please review the [examples](/examples), [CSS](/css-reference), or move on the [API and Deployment Guide](/api-and-deployment).
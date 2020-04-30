# Responsive Paper CSS Reference

## rp-page

Use the `rp-page` class to identify the html content that should be parsed into pages

```
<div class='rp-page'>
  Report content
</div>
```

## rp-ps-* (paper size and orientation)

Use the `rp-ps-*` classes (e.g. `rp-ps-letter`, `rp-ps-legal`, `rp-ps-letter-ls`, `rp-ps-legal-ls`, etc) to set the paper size of the pages.

The following paper sizes are supported:

- letter
- legal
- ledger
- a3
- a4
- a5
- a6

If you want landscape orientation then you should append "-ls" to the class name.

```
<div class='rp-page rp-ps-letter-ls'>
  Report content
</div>
```

## rp-page-header

Use the `rp-page-header` class to make an HTML element print at the top of each page

```
  <div class="rp-page-header">
     <!--put page header content here -->
  </div>
```

## rp-page-footer

Use the `rp-page-footer` class to make and HTML element print at the bottom of each page

```
  <div class="rp-page-footer">
     <!--put page footer content here -->
  </div>
```

## rp-hide-on-last-page

Use the `rp-hide-on-last-page` to hide an element on the last page of the report

```
  <div class="rp-page-footer">
     <!--put page footer content here -->
     <span class="rp-hide-on-last-page">Continued on next page</span>
  </div>
```

## rp-force-page-break

Use the `rp-force-page-break` class to force the rendering engine to start a new page

```
  <div class="rp-force-page-break"></div>
```

## rp-force-page-break with rp-ps-*, rp-ps-default

Use the `rp-force-page-break` with a `rp-ps-*` class to change paper sizes within the same pdf.

```
<div class="rp-force-page-break rp-ps-letter-ls">
Some letter landscape content
<div class="rp-force-page-break rp-ps-default">
More pages with the default paper format on the `rp-page` element

```

## rp-page-number & rp-page-count

An element with the `rp-page-number` class will have it's innerText replaced by the page number on which it is rendered.  An element having the `rp-page-count` class will have it's innerText replaced by the total number of pages (excluding the console logs).

```
 <div style="float: right">Page <span class='rp-page-number'>999</span> of <span
                    class='rp-page-count'>1000</span></div>

```

## rp-id-page-number

An element with the `rp-id-page-number` class will have it's innerText replaced by the page number where the element with it's data-id is located. This is useful in table of contents, indexes and cross document page references.

```
 <span class="rp-id-page-number" data-id="someElementId">1</span>
<!-- some where else in the report-->
 <div id="someElementId"></div>
```

## rp-group & rp-group-header

Use the `rp-group` class to identify a container for groups in your report.  The `rp-group` class has no effect unless an `rp-group-header` element(s) is a direct child of the `rp-group` element.  Use the `rp-group-header` to reprint an HTML element on subsequent pages of a group

```
<div class='rp-group'>
  <div class='rp-group-header'>
    Group Heading
  </div>
...A lot of group content
</div>

```

In the above example, "Group Heading" will be printed on each page that the group content flows on to. Group headers print after page headers.

## rp-hide-on-first-page

Use the `rp-hide-on-first-page` to hide an element on the first page inside a page-header or group-header element

```
<div class='rp-group'>
  <div class='rp-group-header'>
    Group Heading <span class='rp-hide-on-first-page'> - Continued</span>
  </div>
...A lot of group content
</div>

```

In the above example, "Continued" will be printed only on pages after the first page for a given group.

## rp-hidden

Use the `rp-hidden` utility class to hide an element when parsing pages and generating the pdf.  This could be useful if an element such as a "Print to PDF" button is contained inside the `rp-page` element and you don't want it to print on the pdf.

## rp-visible

Use the `rp-visible` utility class to show an element when parsing pages and generating the pdf.  This could be useful if you want to use a web page for both online viewing and pdf conversion but you don't want certain elements to show (e.g. `rp-page-number`) when viewing the html version.

## rp-visible-*

Use the `rp-visible-*` classes (e.g. `rp-visible-letter-ls`, `rp-visible-legal-ls`) to control if an element is visible on a given paper width or larger.  You can use this to control what content is displayed if the user requests the pdf conversion on various paper sizes.  Please see the [responsive-paper-sizes.css](https://www.responsivepaper.com/utils/responsive-paper-sizes.css) for all the available classes.

```
  <div class="rp-visible-letter-ls">My extra content</div>
```

## rp-hidden-*

Use the `rp-hidden-*` classes (e.g. `rp-hidden-letter`, `rp-hidden-ls`) to control if an element is hidden on a given paper width or smaller.  You can use this to control what content is displayed if the user requests the pdf conversion on various paper sizes.

```
  <div class="rp-hidden-letter">My extra content</div>
```

## rp-contain

Use the `rp-contain` utility class to ensure an element will not overflow the `rp-page` element.

## rp-full-page

Use the `rp-full-page` utility class to hide the page headers and footers. This is useful for inserting full page graphics in your pdfs.

## rp-hide-page-headers, rp-hide-page-footers

Use the `rp-hide-page-headers` and `rp-hide-page-footers` classes to hide either the headers or the footers. This is an alternative to `rp-full-page` which hides both headers and footers.

## rp-keep-together

Use the `rp-keep-together` utility class to notify the rendering engine that an element should not be split across pages.

## rp-render

The `rp-render` class will be added to every `rp-page` element as the html is parsed into pages. You can use this to apply different styling before parsing:

```
.rp-page.rp-render .my-narrow-list {
  width: 100%;
}
```

Alternatively you could call the api with `printMedia = true` and add a `@media print` css rule:

```
@media print {
  .my-narrow-list {
    width: 100%
  }
}

```

## rp-pdf

The `rp-pdf` class will be added to the `rp-page` parent element after html is parsed into pages. You can use this to apply different styling after parsing but before the pdf is generated, for example to handle the chrome screen media printing bug:

```
@media (min-width: 612px) {
  rp-pdf .col-sm-6 {
    float: left;
  }
}
```

Please see the [bootstrap3-to-pdf.css](https://www.responsivepaper.com/utils/bootstrap3-to-pdf.css) for a fixes for bootstrap 3 screen media rendering issues.

Alternatively, you can all the api with `fixScreenMedia = true` and `printMedia = false`.


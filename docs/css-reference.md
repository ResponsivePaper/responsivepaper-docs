# Responsive Paper CSS Reference

## rp-page

Use the rp-page class to identify the html content that should be parsed into pages

## rp-ps-* (paper size and orientation)

Use the rp-ps-* classs (e.g. rp-ps-letter, rp-ps-legal, rp-ps-letter-ls, rp-ps-legal-ls) to set the paper size of the pages.

The following paper sizes are supported:

- letter
- legal
- ledger
- a3
- a4
- a5
- a6

If you want landscape orientation then you should append "-ls" to the class name.

## rp-page-header

Use the rp-page-header class to make an HTML element print at the top of each page

```
  <div class="rp-page-header">
     <!--put page header content here -->
  </div>
```

## rp-page-footer

Use the rp-page-footer class to make and HTML element print at the bottom of each page

## rp-group

Use the rp-group class to identify a container for groups in your report.  The rp-group class has no effect unless an rp-group-header element(s) is a direct child of the rp-group element.

## rp-group-header

Use the rp-group-header to reprint an HTML element on subsequent pages of a group

## rp-hide-on-first-page

Use the rp-hide-on-first-page to hide an element on the first page inside a page-header or group-header element

## rp-hidden

Use the rp-hidden utility class to hide an element when parsing pages and generating the pdf.


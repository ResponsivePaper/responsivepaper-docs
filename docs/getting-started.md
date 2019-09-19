# Getting Started

Building reports using Responsive Paper is simple and intuitive. Responsive Paper is an online service which converts
html or urls and returns a pdf file.

## Production and Design Time Process Flow

Here's a visualization of the rendering in a production environment:

![Production Sequence](production-seq.diagram.png)

Here's a visualization of the rendering in a development environment:

![Design Time Sequence](design-time-seq.diagram.png)

## Create a log in and generate a free developer api key

An api key is required to do html to pdf conversion while you are developing locally.  To get an api key, goto the [sign up](https://responsivepaper.com/user/signup) page and enter your name, email and password and you will be redirected to your [dashboard](https://responsivepaper.com/user/dashboard) where you can view your api key


## Development Environment

The Responsive Paper Service (RPS) uses headless chrome server side so it is advised to develop your reports using [Google Chrome](https://www.google.com/chrome/) or the [Brave browser](https://brave.com/).  For tooling you'll need [git](https://git-scm.com/downloads), [node.js](https://nodejs.org/en/) and an editor such as [VS Code](https://code.visualstudio.com/)


### Install localtunnel for design time testing

Your HTML reports are converted to PDF's using the responsivepaper.com service. In order to test the HTML conversion while you are developing locally you can open a tunnel to your local development server using the [localtunnel.me](https://github.com/localtunnel/localtunnel) service:

```
npm install -g localtunnel
```

If you don't have a local web server installed, install one using:

```
npm install -g live-server
--or
npm install -g http-server
```

### Next Steps

Learn more by cloning the [examples github repository](https://github.com/ResponsivePaper/responsivepaper-examples) and stepping through the [tutorial](/tutorial).


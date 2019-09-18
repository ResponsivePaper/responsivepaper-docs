# Getting Started

Building reports using Responsive Paper is simple and intuitive. Responsive Paper is an online service which converts
html or url's and returns a pdf file.

### Create a log in and generate a free developer api key

An api key is required to do html to pdf conversion while you are developing locally.  To get an api key, goto the [sign up](https://responsivepaper.com/user/signup) page and enter your name, email and password and you will be redirected to your [dashboard](https://responsivepaper.com/user/dashboard) where you can view your api key

### Install tunnelme for design time testing

Your HTML reports are converted to PDF's using the responsivepaper.com service. In order to test the HTML conversion while you are developing locally you can open a tunnel to your local development server using the [localtunnel.me](https://github.com/localtunnel/localtunnel) service:

```
npm install -g localtunnel
```

then if you are running a local dev server on port 8080:

```
lt --port 8080
```

IMPORTANT: Be sure to use https:// for tunnelme urls to ensure images are loaded correctly

### Next Steps

Learn more by cloning the [examples github repository](https://github.com/ResponsivePaper/responsivepaper-examples) and stepping through the [tutorial](/tutorial).


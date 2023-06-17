---
weight: 10
title: "SS Web Services"
date: 2023-05-05T16:51:49-05:00
draft: false
github: https://github.com/schaefsteven/ss-web-services
---

That's right! The site you are on right now was built in-house.

# Features

The site is built using [Hugo](https://gohugo.io/): a static site generator, [Bootstrap 5](https://getbootstrap.com/): a CSS framework, and [NPM](https://www.npmjs.com/): the Node package manager.

I'm very happy with the responsive design I was able to create with Bootstrap. It also makes it very easy to quickly change the colorscheme across the entire site with a single variable.

With NPM, I was able to automate the build process including the Sass compilation and the site building with Hugo. It also makes the build process more portable overall, because Hugo is installed by NPM at the correct version, so there's no confusion between the development and production environments.

The site is hosted on Netlify with continuous integration/continuous deployment from Github. 

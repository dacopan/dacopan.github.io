---
layout: page
title: Wiki
description: Modern awesome Jekyll theme. Optimized to GitHub Pages, Friendly SEO, easy customizable.
github-url: dacopan/dacopan.github.io
github-ribbon: |    
    <a class="ribbon" href="https://github.com/dacopan/dacopan.github.io"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
---
> All this site: home, project and wiki pages use DcM Jekyll Theme

## Installation and Configuration
 :fire: please, in order to use this theme, first remove my folder ads, this is personal data, please use your own ads.

> Only follow the official documentation of [jekyll](https://jekyllrb.com/docs/home/) or [github pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/). :poop:


## Customization :art:
 - You only need customize files inside `_sass` folder as you need.
 
 
## Layouts
 - Home 
    Use Aerial + Solid State themes
 - Page
    Use Cayman theme
 - Post 
    Use Cayman theme
  
## Pages
This jekyll theme is multipurpose but was optimized to project pages, in front matter you can set:

```yaml
    layout: page
    menu: # if this key is set with any or empty value, you should create a `sidebar.html` in current folder with your own HTML that will be include in sidebar
    title: # the title
    description: # used to show in cayman theme and Facebook Open Graph, meta description and Twitter card
    image: (optional) # used to show in Twitter card and open graph
    github-url (optional) # used to show `view on Github`, `Download .tar`, `Download .zip` buttons
    github-ribbon (optional) # HTML tag with custom `ribbon` css class to show `fork me ribbon` in your preferred location

```

Also you can follow [Seo Tag](https://github.com/jekyll/jekyll-seo-tag) documentation
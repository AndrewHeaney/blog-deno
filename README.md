
![Cover Photo](https://i.imgur.com/CsaBwxU.png)
# Blog-Deno
Example blog using pagic and oak with Deno.

## Overview
This project uses pagic to convert `.md` files into web pages and Oak to serve these pages to the user.

Pagic generates the pages into the `/public` directory.

[Live URL](https://blog-deno.deno.dev/)

## Running Locally
There are two ways to run locally:

1. If you are working on blog posts:

    `pagic build --watch --serve`

2. If you want to run the server locally:

    `deployctl run --no-check app.ts`

## Adding blog posts
To add blog posts of your own, add an `.md` file with the content of your blog post to `/blog-posts`.

## Config
To change details such as `title`, `description` and `github` edit the corresponding fields in `pagic.config.js`

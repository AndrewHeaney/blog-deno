import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "blog-deno",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>blog-deno</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "blog-deno"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "AndrewHeaney",
    'contributors': [
        "AndrewHeaney"
    ],
    'date': "2021-08-09T16:48:17.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "2021-08-07-second-post.md",
                "title": "Coding",
                "link": "2021-08-07-second-post.html",
                "date": "2021-08-09T16:58:48.249Z",
                "updated": null,
                "contributors": [],
                "excerpt": "Second blog post Venit est terras pallor semine fortisque sanguine Lorem markdownum monedula iniqui, differt ensis, sustinet undas ignes. Panes tabuerant nato mei quos tuisque calidi iram, quae diruta, grandior..."
            },
            {
                "pagePath": "2021-08-06-first-post.md",
                "title": "First Blog post",
                "link": "2021-08-06-first-post.html",
                "date": "2021-08-09T16:58:48.249Z",
                "updated": null,
                "contributors": [],
                "excerpt": "First post on deno blog Ventis esse quem Lorem markdownum et specus verti palude illis et vivit prohibebat idque induruit relicto, malignas. Non suum est, cum res ita patriam citra tenemur Acheronta nec sonant ..."
            },
            {
                "pagePath": "2021-08-09-third-post.md",
                "title": "Third Post",
                "link": "2021-08-09-third-post.html",
                "date": "2021-08-09T16:58:48.249Z",
                "updated": null,
                "contributors": [],
                "excerpt": "Third blog post, test Orba per crescit dedi merito ille locus Lorem markdownum, Iunonigenaeque madida ac Talibus telaque, undas non hospite rami vitamque adspice, hi imas voce. Cumque vivit ignorat inpulit adve..."
            }
        ],
        "categories": [],
        "tags": []
    }
};

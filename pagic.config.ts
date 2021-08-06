export default {
  srcDir: "blog-posts",
  outDir: "public",
  plugins: ["blog"],
  theme: "blog",
  title: "blog-deno",
  description: "Simple blog using pagic and oak with Deno",
  blog: {
    root: "/",
    social: {
      github: "AndrewHeaney/blog-deno",
    },
  },
};

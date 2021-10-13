import { Application } from "./deps.ts";
const app = new Application();

// Send static content
app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  });
});

addEventListener("fetch", app.fetchEventHandler());

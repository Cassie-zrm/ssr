import { renderToString } from "vue/server-renderer"
import { createApp } from "./main"

export async function render() {
  const { app } = createApp()
  const ctx = {
    title: "hello",
    meta: `
            <meta name="description" content="hello">
        `,
  }
  const html = await renderToString(app, ctx)
  const head = ctx.meta
  return { html, head }
}

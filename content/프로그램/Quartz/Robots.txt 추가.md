quartz > plugins > emitters > contentIndex.ts
```Typescript
interface Options {
  enableSiteMap: boolean
  enableRSS: boolean
  rssLimit?: number
  rssFullHtml: boolean
  enableRobots: boolean
  includeEmptyFiles: boolean
}
const defaultOptions: Options = {
  enableSiteMap: true,
  enableRSS: true,
  rssLimit: 10,
  rssFullHtml: false,
  enableRobots: true,
  includeEmptyFiles: true,
}
```

```Typescript
export const ContentIndex: QuartzEmitterPlugin<Partial<Options>> = (opts) => {
  opts = { ...defaultOptions, ...opts }
  return {
    name: "ContentIndex",
    async getDependencyGraph(ctx, content, _resources) {
      const graph = new DepGraph<FilePath>()
      for (const [_tree, file] of content) {
        const sourcePath = file.data.filePath!
        graph.addEdge(
          sourcePath,
          joinSegments(ctx.argv.output, "static/contentIndex.json") as FilePath,
        )
        if (opts?.enableSiteMap) {
          graph.addEdge(sourcePath, joinSegments(ctx.argv.output, "sitemap.xml") as FilePath)
        }
        if (opts?.enableRSS) {
          graph.addEdge(sourcePath, joinSegments(ctx.argv.output, "rss") as FilePath)
        }
        if (opts?.enableRobots) {
          graph.addEdge(sourcePath, joinSegments(ctx.argv.output, "robots.txt") as FilePath)
        }
      }
      return graph
    },
    async emit(ctx, content, _resources) {
      const cfg = ctx.cfg.configuration
      const emitted: FilePath[] = []
      const linkIndex: ContentIndex = new Map()
      for (const [tree, file] of content) {
        const slug = file.data.slug!
        const date = getDate(ctx.cfg.configuration, file.data) ?? new Date()
        if (opts?.includeEmptyFiles || (file.data.text && file.data.text !== "")) {
          linkIndex.set(slug, {
            title: file.data.frontmatter?.title!,
            links: file.data.links ?? [],
            tags: file.data.frontmatter?.tags ?? [],
            content: file.data.text ?? "",
            richContent: opts?.rssFullHtml
              ? escapeHTML(toHtml(tree as Root, { allowDangerousHtml: true }))
              : undefined,
            date: date,
            description: file.data.description ?? "",
          })
        }
      }
      if (opts?.enableSiteMap) {
        emitted.push(
          await write({
            ctx,
            content: generateSiteMap(cfg, linkIndex),
            slug: "sitemap" as FullSlug,
            ext: ".xml",
          }),
        )
      }
      if (opts?.enableRSS) {
        emitted.push(
          await write({
            ctx,
            content: generateRSSFeed(cfg, linkIndex, opts.rssLimit),
            slug: "rss" as FullSlug,
            ext: "",
          }),
        )
      }
      if (opts?.enableRobots) {
        emitted.push(
          await write({
            ctx,
            content: "User-agent:*\nAllow: /",
            slug: "robots" as FullSlug,
            ext: ".txt",
          }),
        )
      }
      const fp = joinSegments("static", "contentIndex") as FullSlug
      const simplifiedIndex = Object.fromEntries(
        Array.from(linkIndex).map(([slug, content]) => {
          // remove description and from content index as nothing downstream
          // actually uses it. we only keep it in the index as we need it
          // for the RSS feed
          delete content.description
          delete content.date
          return [slug, content]
        }),
      )
      emitted.push(
        await write({
          ctx,
          content: JSON.stringify(simplifiedIndex),
          slug: fp,
          ext: ".json",
        }),
      )
      return emitted
    },
    getQuartzComponents: () => [],
  }
}
```

quartz.comfig.ts
```Typescript
Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        enableRobots: true,
      }),
```

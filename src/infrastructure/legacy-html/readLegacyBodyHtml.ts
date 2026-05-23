import { readFile } from "node:fs/promises";
import path from "node:path";

function extractBodyInnerHtml(fullHtml: string): string {
  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return fullHtml;
  return bodyMatch[1] ?? "";
}

function stripScripts(html: string): string {
  return html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    "",
  );
}

function rewriteAssetUrls(html: string): string {
  return html
    .replaceAll('src="./img/', 'src="/img/')
    .replaceAll("src='./img/", "src='/img/")
    .replaceAll('href="./img/', 'href="/img/')
    .replaceAll("href='./img/", "href='/img/")
    .replaceAll('src="./css/', 'src="/css/')
    .replaceAll("src='./css/", "src='/css/")
    .replaceAll('href="./css/', 'href="/css/')
    .replaceAll("href='./css/", "href='/css/");
}

function rewritePageRoutes(html: string): string {
  return html
    .replaceAll('href="./index.html"', 'href="/"')
    .replaceAll("href='./index.html'", "href='/'")
    .replace(
      /href=(["'])\.\/([a-z0-9-]+)\.html\1/gi,
      (_m, quote: string, name: string) => {
        return `href=${quote}/${name}${quote}`;
      },
    );
}

export async function readLegacyBodyHtml(
  legacyFileName: string,
): Promise<string> {
  const legacyPath = path.join(process.cwd(), "legacy", legacyFileName);
  const fullHtml = await readFile(legacyPath, "utf8");
  const body = extractBodyInnerHtml(fullHtml);
  return rewritePageRoutes(rewriteAssetUrls(stripScripts(body)));
}

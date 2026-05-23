import { readLegacyBodyHtml } from "@/infrastructure/legacy-html/readLegacyBodyHtml";

type LegacyHtmlProps = {
  fileName: string;
};

export async function LegacyHtml({ fileName }: LegacyHtmlProps) {
  const html = await readLegacyBodyHtml(fileName);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}


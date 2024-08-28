 
 
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { styleMetadata } from "@/metadata";
import { headers } from "next/headers";

export const runtime = 'edge';

export { styleMetadata as generateMetadata };

export default async function  Style({
  params
}: Readonly<{ 
  params: { locale: LocaleType; };
}>) {
  const { locale } = params; 
  const headersList = headers(); 
  const origin = getOrigin({headers: headersList});

  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale, 
      componentPathName: `topic/block1`,
      origin
    })
  } 
  const url = new URL(headersList.get('x-request-url')!); 
 
  return ( 
    <div className="px-8"> 
       
    </div> 
  );
}

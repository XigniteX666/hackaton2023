import { BuilderComponent, builder } from "@builder.io/react";

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function getStaticProps({ params }: any) {
  const urlPath = "/" + (params?.page?.join("/") || "");
  const announce = await builder
    .get("announcement-bar", { userAttributes: { urlPath } })
    .toPromise();

  return {
    props: {
      announce: announce || null,
    },
  };
}

export default function Section() {
  return <h1>test</h1>;
}

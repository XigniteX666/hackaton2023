import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/heading")),
  {
    name: "Heading",
    inputs: [
      {
        name: "title",
        type: "text",
      },
    ],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/DataComponent/DataComponent")),
  {
    name: "DataComponent",
    inputs: [
      {
        name: "id",
        type: "text",
      },
    ],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ProductComponent/ProductComponent")),
  {
    name: "ProductComponent",
    inputs: [
      {
        name: "sku",
        type: "text",
      },
    ],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/brand-producthunt.png",
  }
);

Builder.registerComponent(
  dynamic(
    () => import("./components/MainProductComponent/MainProductComponent")
  ),
  {
    name: "MainProductComponent",
    inputs: [
      {
        name: "sku",
        type: "text",
      },
    ],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/brand-producthunt.png",
  }
);

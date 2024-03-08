import { QuartzTransformerPlugin } from "../types";

export const ChemDrawSmiles: QuartzTransformerPlugin<{}> = () => {
  return {
    name: "ChemDrawSmiles",
    externalResources() {
        return {
        css: [
            
        ],
        js: [
            {
            src: "https://unpkg.com/smiles-drawer@1.2.0/dist/smiles-drawer.min.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            },
        ],
        }
      },
  };
};

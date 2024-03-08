import { QuartzTransformerPlugin } from "../types";
import { visit } from "unist-util-visit";
import SmilesDrawer from 'smiles-drawer';
import { Root } from "hast";

interface Options {
  smilesClass: string;
}

const defaultOptions: Options = {
  smilesClass: 'smiles',
};

export const RenderSmiles: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  return {
    name: "RenderSmiles",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "element", (node) => {
              if (node.tagName === "span" && node.properties?.className?.includes(opts.smilesClass)) {
                const smiles = node.children[0].value as string;
                const canvas = document.createElement('canvas');
                const smilesDrawer = new SmilesDrawer.Drawer({ width: 300, height: 300 });
                SmilesDrawer.parse(smiles, (tree) => {
                  smilesDrawer.draw(tree, canvas, 'light', false);
                }, (err) => {
                  console.error('Error drawing SMILES: ', err);
                });
                node.children = [{ type: "raw", value: canvas.outerHTML }];
              }
            });
          };
        },
      ];
    },
  };
};

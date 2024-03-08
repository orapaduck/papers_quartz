import { QuartzTransformerPlugin } from "../types";
import { visit } from "unist-util-visit";
import { Root } from "hast";
import SmilesRenderer from 'smiles-render'; // Hypothetical library for rendering SMILES

interface Options {
  renderSmiles: boolean;
}

const defaultOptions: Options = {
  renderSmiles: true,
}

export const SmilesRender: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "SmilesRender",
    htmlPlugins(ctx) {
      return [
        () => {
          return (tree: Root, file) => {
            if (!opts.renderSmiles) return;

            visit(tree, "element", (node, _index, _parent) => {
              // Check for elements that should contain SMILES strings
              if (
                node.tagName === "span" &&
                node.properties &&
                typeof node.properties.dataSmiles === "string"
              ) {
                const smilesString = node.properties.dataSmiles as string;

                // Render the SMILES string
                const renderedSmiles = SmilesRenderer.render(smilesString);
                
                // Replace the original node with the rendered content
                node.type = "element";
                node.tagName = "div"; // Or any other container element for the rendered content
                node.children = [{
                  type: "raw",
                  value: renderedSmiles // Assuming SmilesRenderer returns HTML string
                }];
              }
            });
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    // Add any data properties used by this plugin
  }
}

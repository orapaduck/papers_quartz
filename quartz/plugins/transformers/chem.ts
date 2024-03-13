import { QuartzTransformerPlugin } from "../types";
import { Molecule } from 'openchemlib';
import { visit } from "unist-util-visit"

export const SmilesRenderer: QuartzTransformerPlugin = () => {
  return {
    name: "SmilesRenderer",
    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            visit(tree, 'code', (node) => {
              if (node.lang === 'smiles') {
                const smiles = node.value;
                const molecule = Molecule.fromSmiles(smiles);

                const svg = molecule.toSVG(300, 300);
                node.type = 'html';
                node.value = `<div class="smiles-container">${svg}</div>`;
              }
            });
          }
        }
      ];
    },
  };
}
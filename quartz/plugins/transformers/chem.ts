import { QuartzTransformerPlugin } from "../types";
import OCL from 'openchemlib';

const SmilesRenderer: QuartzTransformerPlugin = () => {
  return {
    name: "SmilesRenderer",
    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            const visit = require('unist-util-visit');
            
            visit(tree, 'code', (node) => {
              if (node.lang === 'smiles') {
                const smiles = node.value;
                const molecule = OCL.Molecule.fromSmiles(smiles);
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

export default SmilesRenderer;

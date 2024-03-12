import { QuartzTransformerPlugin } from "../types";
import RDKit from 'rdkit'; // Assuming RDKit is available as an importable module
import { visit } from "unist-util-visit"

export const RDKitRenderer: QuartzTransformerPlugin = () => {
  return {
    name: "RDKitRenderer",
    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            visit(tree, 'code', (node) => {
              if (node.lang === 'smiles') {
                const smiles = node.value;
                const molecule = RDKit.Mol.fromSmiles(smiles);

                if (molecule) {
                  const svg = molecule.get_svg(300, 300);
                  node.type = 'html';
                  node.value = `<div class="smiles-container">${svg}</div>`;
                } else {
                  // Handle the case where the SMILES string could not be parsed
                  node.value = `<div class="smiles-container">Invalid SMILES string</div>`;
                }
              }
            });
          }
        }
      ];
    },
  };
}

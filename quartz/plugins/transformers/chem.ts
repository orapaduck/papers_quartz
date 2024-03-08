import { QuartzTransformerPlugin } from "quartz/types";
import OCL from "openchemlib";

export const SmilesRenderer: QuartzTransformerPlugin = () => {
  return {
    name: "SmilesRenderer",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          // Traverse the Markdown AST (Abstract Syntax Tree)
          visit(tree, "code", node => {
            // Check if the code block is for SMILES
            if (node.lang === "smiles") {
              try {
                const molecule = OCL.Molecule.fromSmiles(node.value.trim());
                // Render molecule and replace node.value with the rendered content
                // For example, if you're rendering to an SVG or an image URL
                node.value = renderMoleculeToSVG(molecule); // Implement this function based on how you want to render
                node.type = "html"; // Change type to HTML to allow raw HTML rendering
              } catch (error) {
                console.error("Error rendering SMILES: ", error);
                // Optionally handle errors, such as leaving the SMILES code as-is
              }
            }
          });
        };
      }];
    },
  };
};

function renderMoleculeToSVG(molecule: any): string {
  // Implement this function to render the molecule as an SVG or an image URL
  // This could involve converting the molecule to a graphical representation
  return ''; // Placeholder - return the SVG or image URL
}

// Extend the Markdown AST node types to recognize the SMILES language
declare module 'mdast' {
  interface Code {
    lang: 'smiles' | string;
  }
}

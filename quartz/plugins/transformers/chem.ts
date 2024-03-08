import { QuartzTransformerPlugin } from "../types"
import SmilesDrawer from 'smiles-drawer';

export const RenderSmiles: QuartzTransformerPlugin = () => {
  return {
    name: "RenderSmiles",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          // ... existing code ...

          // Add a transformation for SMILES chemical formulas
          // Assuming the formula is enclosed in special markers, e.g., `SMILES[...formula...]`
          findAndReplace(tree, /SMILES\[(.+)\]/, (_value: string, ...capture: string[]) => {
            const [smiles] = capture;
            const canvas = document.createElement('canvas');
            
            // Create a SmilesDrawer instance
            let smilesDrawer = new SmilesDrawer.Drawer({ width: 300, height: 200 });

            // Draw the molecule
            SmilesDrawer.parse(smiles, (tree) => {
              smilesDrawer.draw(tree, canvas, 'light', false);
            }, () => console.error('Invalid SMILES formula'));

            // Return the canvas as an image node
            return {
              type: "image",
              title: 'SMILES Formula',
              url: canvas.toDataURL()
            };
          });

          // ... existing code ...
        }
      }]
    }
  }
}

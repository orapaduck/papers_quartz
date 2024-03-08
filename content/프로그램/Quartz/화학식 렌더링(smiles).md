npm install openchemlib --save

quartz > plugins > transformers에 chem.ts 추가
index.ts에 SmilesRenderer 추가 및 quartz.config.ts > QuartzConfig > plugins > transformers에 SmilesRenderer 추가
```Typescript:chem.ts
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
```

```smiles
c(c1)ccc(c1)
```

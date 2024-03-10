import { saveCurrentPageAsPDF } from "./scripts/pdfGenerator.inline"
import styles from "./styles/pdfSave.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

function SaveAsPDF({ displayClass, cfg }: QuartzComponentProps) {
  const handleSavePDF = () => {
    saveCurrentPageAsPDF();
  };
  return (
    <div class={classNames(displayClass, "save-as-pdf")}>
      <button class="pdf-save-button" onClick={handleSavePDF}>
        {i18n(cfg.locale).components.saveAsPDF.buttonLabel}
      </button>
    </div>
  );
}

SaveAsPDF.beforeDOMLoaded = pdfScript
SaveAsPDF.css = styles

export default (() => SaveAsPDF) satisfies QuartzComponentConstructor

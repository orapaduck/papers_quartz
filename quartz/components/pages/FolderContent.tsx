import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import path from "path"

import style from "../styles/listPage.scss"
import { PageList } from "../PageList"
import { stripSlashes, simplifySlug } from "../../util/path"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { i18n } from "../../i18n"

interface FolderContentOptions {
  /**
   * Whether to display number of folders
   */
  showFolderCount: boolean
}

const defaultOptions: FolderContentOptions = {
  showFolderCount: true,
}

export default ((opts?: Partial<FolderContentOptions>) => {
  const options: FolderContentOptions = { ...defaultOptions, ...opts }

  function FolderContent(props: QuartzComponentProps) {
    const { tree, fileData, allFiles, cfg } = props
    const folderSlug = stripSlashes(simplifySlug(fileData.slug!))
    const allItemsInFolder = allFiles.filter((file) => {
      const fileSlug = stripSlashes(simplifySlug(file.slug!))
      const prefixed = fileSlug.startsWith(folderSlug)
      const folderParts = folderSlug.split(path.posix.sep)
      const fileParts = fileSlug.split(path.posix.sep)
      const isDirectChild = fileParts.length === folderParts.length + 1
      return prefixed && (isDirectChild || fileParts.length === folderParts.length)
    })
    const foldersInFolder = allItemsInFolder.filter((item) => item.isDirectory) // 가정: 'isDirectory' 속성이 폴더 여부를 나타냅니다.
    const filesInFolder = allItemsInFolder.filter((item) => !item.isDirectory)
    const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
    const classes = ["popover-hint", ...cssClasses].join(" ")
    const listProps = {
      ...props,
      allFiles: filesInFolder,
      allFolders: foldersInFolder, // 폴더 목록 추가
    }

    const content =
      (tree as Root).children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, tree)

    return (
      <div class={classes}>
        <article>
          <p>{content}</p>
        </article>
        <div class="page-listing">
          {options.showFolderCount && (
            <p>
              {i18n(cfg.locale).pages.folderContent.itemsUnderFolder({
                count: allItemsInFolder.length, // 파일과 폴더의 총 수
              })}
            </p>
          )}
          <div>
            {/* 여기에 폴더와 파일 목록을 렌더링하는 로직 추가 */}
            <PageList {...listProps} />
          </div>
        </div>
      </div>
    )
  }

  FolderContent.css = style + PageList.css
  return FolderContent
}) satisfies QuartzComponentConstructor

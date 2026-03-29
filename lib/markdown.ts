import fs from "fs"
import path from "path"

export function getMarkdown(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath)
  return fs.readFileSync(fullPath, "utf8")
}
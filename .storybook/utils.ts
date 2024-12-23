import fs from 'fs'
import path from 'path'

export const getPackagesAliases = () => {
  const packagesDir = path.resolve(__dirname, '../packages')

  if (!fs.existsSync(packagesDir)) {
    console.warn('Packages directory not found:', packagesDir)
    return {}
  }

  try {
    const packages = fs
      .readdirSync(packagesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .filter(dirent => {
        const srcPath = path.join(packagesDir, dirent.name, 'src')
        return fs.existsSync(srcPath)
      })
      .map(dirent => dirent.name)

    return packages.reduce(
      (aliases, pkg) => ({
        ...aliases,
        [`@ajk-ui/${pkg}`]: path.resolve(__dirname, `../packages/${pkg}/src`),
      }),
      {}
    )
  } catch (error) {
    console.error('Error reading packages directory:', error)
    return {}
  }
}

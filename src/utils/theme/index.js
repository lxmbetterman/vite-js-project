import { generateColors } from './color'
import axios from 'axios'
import formula from './formula.json'
// import variables from '@/assets/scss/var.scss'
// const variables = '#ff0000'

let originalStyle = ''

export function writeNewStyle() {
  let colors = generateColors('#7A40F2') // 选择的主颜色

  let cssText = originalStyle
  let colorsCssText = ''
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      //  把颜色key替换成颜色值 # primary -> 409EFF
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + `${colors[key]}`
    )
    colorsCssText += `
      .color-${key}{color: ${colors[key]}!important;}
      .bg-${key}{background-color: ${colors[key]}!important;}
      .border-${key}{border-color: ${colors[key]}!important;}
    `
  })
  document.getElementById('themeStyle').innerText = cssText + colorsCssText
}

export function getIndexStyle() {
  return new Promise((resolve) => {
    if (!originalStyle) {
      axios
        .all([
          axios.get('/theme/index.css'),
          axios.get('/theme/extra.css'),
          axios.get('/theme/dark-index.css'),
        ])
        .then(
          axios.spread((file, extraFile, darkFile) => {
            const fileData = file.data
            const extraFileData = extraFile.data.replace(/[\r\n]/g, '')
            const darkFileData = darkFile.data.replace(/[\r\n]/g, '')
            originalStyle = getStyleTemplate(
              fileData + extraFileData + darkFileData
            )
            resolve()
          })
        )
    } else {
      resolve()
    }
  })
}

export function getStyleTemplate(data) {
  let colors = generateColors('#409EFF')

  const colorMap = new Map()
  Object.keys(formula).forEach((key) => {
    colorMap.set(colors[key], key) // 把颜色值替换成key #409EFF -> primary
  })

  for (let [key, value] of colorMap) {
    data = data.replace(new RegExp(key, 'ig'), value)
  }

  return data
}

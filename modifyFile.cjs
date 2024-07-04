const fs = require('node:fs').promises
const path = require('path')

const pathData = path.join(`${__dirname}/src/data/drywall.json`)
const filePath = path.join(`${__dirname}/index.html`)

const modifyFile = async () => {
  try {
      const index = await fs.readFile(filePath, 'utf8')
      const datajson = await fs.readFile(pathData, 'utf8')
      const data = JSON.parse(datajson)

      const headTag = `<head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>"${data.longName}"</title>
      <meta name="description" content="${data.about}">
      <meta name="keywords" content="${data.keyWords.reduce(
        (acc, cur) => (acc += `${cur}, `),
        ''
      )}">
      <meta name="robots" content="index, follow">
      <meta name="author" content="Leonardo H. Constantino">
      <meta name="contact" content="leohconstantino@gmail.com">
      <meta name="revisit-after" content="7">
      <meta name="rating" content="general">
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="">
      <meta property="og:title" content="${data.longName}">
      <meta property="og:description" content="${data.about}">
      <meta property="og:image" content="./src/assets/images/${data.images.print}">
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="">
      <meta property="twitter:title" content="${data.longName}">
      <meta property="twitter:description" content="${data.about}" >
      <meta property="twitter:image" content="./src/assets/images/${
        data.images.print
      }">
      <link rel="shortcut icon" href="./src/assets/images/${
        data.images.favicon
      }" type="image/x-icon">
      <link rel="icon" href="./src/assets/images/${
        data.images.favicon
      }" type="image/x-icon">
      <style>
        @import url("${data.font.link}");

        :root{
          --text: ${data.colors.text};
          --background: ${data.colors.background};
          --primary: ${data.colors.primary};
          --secondary: ${data.colors.secondary};
          --accent: ${data.colors.accent}
        }

        body {
          font-family: '${data.font.fontFamily}';
        }

        h1, h2, h3, h4, h5 {
          font-family: '${data.font.fontFamily}';
        }
      </style>
      <script type="module" src="./src/main.js" defer></script>
    <\/head>`

    const regex = /<head>[\s\S]*?<\/head>/g
    const modifiedContent = index.replace(regex, headTag)

    try {
      await fs.writeFile(filePath, modifiedContent, 'utf8')
    } catch (error) {
      console.error(`Erro ao salvar o arquivo: ${err.message}`)
    }

    console.log('Arquivo modificado e salvo com sucesso!')
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${err.message}`)
  }
}

modifyFile()

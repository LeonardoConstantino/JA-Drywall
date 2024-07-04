// src/utils/helpers.js
/**
 * Capitaliza a primeira letra de uma string.
 * @param {string} str - A string a ser capitalizada.
 * @returns {string} - A string com a primeira letra em maiúsculo.
 */
export const capitalizeFirstLetter = (str) => {
  // Verifica se o argumento fornecido é uma string não vazia
  if (typeof str !== 'string' || str.length === 0) {
    return ''
  }
  // Converte a primeira letra para maiúsculo e junta com o restante da string
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Cria um componente genérico com filhos.
 * @param {string} type - O tipo do elemento a ser criado.
 * @param {...Object} children - Os componentes filhos a serem incluídos no elemento.
 * @returns {ComponentConfig} As configurações para criar um componente genérico.
 */
export const getComponent = (type, ...children) => {
  return {
    type: type,
    props: {
      children: [...children],
    },
  }
}

/**
 * Cria um componente de texto.
 * @param {string} text - O texto a ser exibido.
 * @returns {TextComponentConfig} As configurações para criar um componente de texto.
 */
export const getTextComponent = (text) => {
  return {
    type: null,
    props: {
      nodeValue: text,
    },
  }
}

/**
 * Obtém o componente de cabeçalho para a página "Rotas de Navegação Web".
 *
 * @param {string} title - O título do cabeçalho.
 * @param {string} subtitle - O subtítulo do cabeçalho.
 * @returns {object} O componente de cabeçalho.
 */
export const getHeader = (title, subTitle) => {
  return getComponent(
    'header',
    getComponent('h1', getTextComponent(title)),
    getComponent('h2', getTextComponent(subTitle))
  )
}

/**
 * Cria um componente de seção com título e conteúdo.
 *
 * @param {string} title - O título da seção.
 * @param {string} content - O conteúdo da seção.
 * @returns {object} O componente de seção.
 */
export const getSection = (title, content) => {
  return getComponent(
    'section',
    getComponent('h4', getTextComponent(title)),
    getComponent('p', getTextComponent(content))
  )
}

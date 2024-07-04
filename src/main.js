import './assets/styles/main.css'
import { homePage } from './pages/home.js'
import { renderElement } from './utils/renderElement.js'

const loadApp = () => {
  try {
    // Seleciona o elemento com o ID 'app' para renderizar os componentes
    const app = document.querySelector('#app')
    if (!app) throw new Error('Elemento #app não encontrado')

    // Renderiza os componentes principais da aplicação
    setTimeout(() => {
      renderElement(homePage, true, app)
    }, 500)
  } catch (error) {
    console.error('Erro ao renderizar página:', error.message)
  }
}

document.addEventListener('DOMContentLoaded', loadApp)

document.querySelector('.lds-ring').remove()

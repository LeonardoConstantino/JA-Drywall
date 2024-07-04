import { getComponent, getTextComponent } from '../utils/helpers'
import { createButton } from './../components/button'
import data from '../data/drywall.json'

import logoja from '../assets/images/logoja.png';
import capa from '../assets/images/capa.png';

const img = getComponent('img')
img.props.src = logoja
img.props.alt = 'Logo da Empresa'

const logo = getComponent('div', img)
logo.props.class = 'hero-logo'

const headline = getComponent('h1', getTextComponent(data.headline))
headline.props.class = 'hero-text--headline'

const subheadline = getComponent('h2', getTextComponent(data.subheadline))
subheadline.props.class = 'hero-text--subheadline'

const text = getComponent('div', headline, subheadline)
text.props.class = 'hero-text'

const btnCta = createButton(data.callToAction, null, null, 'cta-btn hvr-radial-out')

const cta = getComponent('div', btnCta)
cta.props.class = 'hero-cta'

const createHeader = () => {
  const header = getComponent('header', logo, text, cta)
  header.props.style = `--coverImage: url("${capa}")`
  header.props.class = 'hero-image'

  return header
}

export const header = createHeader()

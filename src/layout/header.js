import { getComponent, getTextComponent } from '../utils/helpers'
import { createButton } from './../components/button'

import data from '../data/drywall.json'

import logoja from '../assets/images/logoja.webp'
import capa from '../assets/images/capa.webp'
import { handleButtonClick } from '../services/handleButtonClick'

const img = getComponent('img')
img.props.src = logoja
img.props.alt = `Logo ${data.longName}`
img.props.width = '128'
img.props.height = '91'

const logo = getComponent('div', img)
logo.props.class = 'hero-logo'

const headline = getComponent('h1', getTextComponent(data.headline))
headline.props.class = 'hero-text--headline'

const subheadline = getComponent('h2', getTextComponent(data.subheadline))
subheadline.props.class = 'hero-text--subheadline'

const text = getComponent('div', headline, subheadline)
text.props.class = 'hero-text'

const btnCta = createButton(
  data.callToAction,
  handleButtonClick,
  null,
  'cta-btn hvr-radial-out'
)

const cta = getComponent('div', btnCta)
cta.props.class = 'hero-cta'

const createHeader = () => {
  const header = getComponent('header', logo, text, cta)
  header.props.style = `--coverImage: url("${capa}")`
  header.props.class = 'hero-image'

  return header
}

export const header = createHeader()

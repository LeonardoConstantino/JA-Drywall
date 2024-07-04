import { header } from '../layout/header.js'
import { getComponent, getSection, getTextComponent } from '../utils/helpers'
import { getDetails } from './../components/details'
import { featuresBenefits } from '../components/featuresBenefits.js'
import { clientTestimonials } from '../components/clientTestimonials.js'
import { footer } from './../layout/footer'

import data from '../data/drywall.json'

const introduction = getComponent(
  'header',
  getComponent('h3', getTextComponent(data.body.introduction))
)
introduction.props.class = 'introduction'

const about = getSection('Sobre a Empresa', data.about)
about.props.class = 'about'

const Benefits = data.body.summaryResourcesBenefits.reduce((acc, cur) => {
  const li = getComponent(
    'li',
    getComponent(
      'div',
      getComponent('h4', getTextComponent(cur.title)),
      getComponent('p', getTextComponent(cur.description))
    )
  )
  li.props.class = 'benefit'

  acc.push(li)
  return acc
}, [])

const summaryResourcesBenefits = getComponent(
  'section',
  getComponent('ol', ...Benefits)
)
summaryResourcesBenefits.props.class = 'summary-benefits'

const howWork = getSection('Como funciona', data.body.howWork)
howWork.props.class = 'how-work'

const questions = data.body.FAQ.reduce((acc, cur) => {
  const details = getDetails(
    cur.question,
    cur.question,
    false,
    getComponent('p', getTextComponent(cur.answer))
  )

  acc.push(details)
  return acc
}, [])

const faq = getComponent(
  'section',
  getComponent('h4', getTextComponent('FAQ (Perguntas Frequentes):')),
  ...questions
)
faq.props.class = 'faq'

const main = getComponent(
  'main',
  introduction,
  about,
  summaryResourcesBenefits,
  featuresBenefits,
  howWork,
  clientTestimonials,
  faq
)

const loadHomePage = () => {
  const home = getComponent('div', header, main, footer)

  home.props['class'] = 'home page'

  return home
}

export const homePage = loadHomePage()

import { getComponent, getSection, getTextComponent } from '../utils/helpers'
import { header } from '../layout/header.js'
import { getDetails } from './../components/details'
import { footer } from './../layout/footer'
import data from '../data/drywall.json'

import featuresBenefitsImage0 from '../assets/images/Limpa.png'
import featuresBenefitsImage1 from '../assets/images/Economico.png'
import featuresBenefitsImage2 from '../assets/images/Agil.png'
import featuresBenefitsImage3 from '../assets/images/Isolamento.png'
import featuresBenefitsImage4 from '../assets/images/Flexibilidade.png'
import featuresBenefitsImage5 from '../assets/images/Sustentabilidade.png'

import ClientTestimonialsAvatar0 from '../assets/images/joao.png'
import ClientTestimonialsAvatar1 from '../assets/images/maria.png'
import ClientTestimonialsAvatar2 from '../assets/images/carlos.png'
import ClientTestimonialsAvatar3 from '../assets/images/ana.png'

const featuresBenefitsImages = [
  featuresBenefitsImage0,
  featuresBenefitsImage1,
  featuresBenefitsImage2,
  featuresBenefitsImage3,
  featuresBenefitsImage4,
  featuresBenefitsImage5,
]

const ClientTestimonialsAvatars = [
  ClientTestimonialsAvatar0,
  ClientTestimonialsAvatar1,
  ClientTestimonialsAvatar2,
  ClientTestimonialsAvatar3,
]

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

const getCardFeaturesBenefits = (icon, title, description) => {
  const componentIcon = {
    type: 'i',
    props: {
      style: `--image-url: url("${icon}")`,
    },
  }

  return getComponent(
    'div',
    componentIcon,
    getComponent('h4', getTextComponent(title)),
    getComponent('p', getTextComponent(description))
  )
}

const cardsFeaturesBenefits = data.body.featuresBenefits.reduce(
  (acc, cur, index) => {
    const card = getCardFeaturesBenefits(
      featuresBenefitsImages[index],
      cur.title,
      cur.description
    )
    card.props.class = 'card'
    acc.push(card)
    return acc
  },
  []
)

const featuresBenefits = getComponent('section', ...cardsFeaturesBenefits)
featuresBenefits.props.class = 'cards benefits'

const howWork = getSection('Como funciona', data.body.howWork)
howWork.props.class = 'how-work'

const getCardClientTestimonials = (text, author, avatar) => {
  const img = getComponent('div', {
    type: 'img',
    props: {
      src: `${avatar}`,
    },
  })
  img.props.class = 'avatar'

  const stars = Array.from({ length: 5 }, () => ({
    type: 'span',
    props: {
      class: 'star',
    },
  }))

  const rating = getComponent('div', ...stars)
  rating.props.class = 'rating'

  const divAuthor = getComponent(
    'div',
    img,
    getComponent('h5', getTextComponent(author))
  )
  divAuthor.props.class = 'author'

  const testimonial = getComponent('p', getTextComponent(text))

  return getComponent('div', divAuthor, rating, testimonial)
}

const cardClientTestimonials = data.body.clientTestimonials.reduce(
  (acc, cur, index) => {
    const card = getCardClientTestimonials(
      cur.text,
      cur.author,
      ClientTestimonialsAvatars[index]
    )
    card.props.class = 'card'
    acc.push(card)
    return acc
  },
  []
)

const clientTestimonials = getComponent('section', ...cardClientTestimonials)
clientTestimonials.props.class = 'cards testimonials'

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

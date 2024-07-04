import { getComponent, getTextComponent } from '../utils/helpers'
import data from '../data/drywall.json'

import featuresBenefitsImage0 from '../assets/images/BenefitsImage0.webp'
import featuresBenefitsImage1 from '../assets/images/BenefitsImage1.webp'
import featuresBenefitsImage2 from '../assets/images/BenefitsImage2.webp'
import featuresBenefitsImage3 from '../assets/images/BenefitsImage3.webp'
import featuresBenefitsImage4 from '../assets/images/BenefitsImage4.webp'
import featuresBenefitsImage5 from '../assets/images/BenefitsImage5.webp'

const featuresBenefitsImages = [
  featuresBenefitsImage0,
  featuresBenefitsImage1,
  featuresBenefitsImage2,
  featuresBenefitsImage3,
  featuresBenefitsImage4,
  featuresBenefitsImage5,
]

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

const getFeaturesBenefits = () => {
  const featuresBenefits = getComponent('section', ...cardsFeaturesBenefits)
  featuresBenefits.props.class = 'cards benefits'

  return featuresBenefits
}

export const featuresBenefits = getFeaturesBenefits()

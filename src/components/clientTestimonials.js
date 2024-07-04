import { getComponent, getTextComponent } from '../utils/helpers'

import data from '../data/drywall.json'

import ClientTestimonialsAvatar0 from '../assets/images/TestimonialsAvatar0.webp'
import ClientTestimonialsAvatar1 from '../assets/images/TestimonialsAvatar1.webp'
import ClientTestimonialsAvatar2 from '../assets/images/TestimonialsAvatar2.webp'
import ClientTestimonialsAvatar3 from '../assets/images/TestimonialsAvatar3.webp'

const ClientTestimonialsAvatars = [
  ClientTestimonialsAvatar0,
  ClientTestimonialsAvatar1,
  ClientTestimonialsAvatar2,
  ClientTestimonialsAvatar3,
]

const getCardClientTestimonials = (text, author, index) => {
  const img = getComponent('div', {
    type: 'img',
    props: {
      src: `${ClientTestimonialsAvatars[index]}`,
      width: '51',
      height: '51',
      alt: 'Avatar cliente',
      loading: 'lazy',
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
  testimonial.props.class = 'text'

  const li = getComponent('li', divAuthor, rating, testimonial)
  li.props.class = 'card item'
  li.props.style = `--position: ${index + 1}`
  return li
}

const cardClientTestimonials = data.body.clientTestimonials.reduce(
  (acc, cur, index) => {
    const card = getCardClientTestimonials(cur.text, cur.author, index)

    acc.push(card)
    return acc
  },
  []
)

const getClientTestimonials = () => {
  const clientTestimonials = getComponent(
    'section',
    getComponent('ol', ...cardClientTestimonials)
  )
  clientTestimonials.props.children[0].props.class = 'list'
  clientTestimonials.props.class = 'cards testimonials slider'
  clientTestimonials.props.style =
    '--width: 300px; --height: 15.625rem; --quantity: 4;'

  return clientTestimonials
}

export const clientTestimonials = getClientTestimonials()

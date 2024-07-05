import { getComponent, getTextComponent } from '../utils/helpers'
import { createButton } from './../components/button'
import { handleButtonClick } from '../services/handleButtonClick'
import { formatPhoneNumber } from '../services/authService'

import data from '../data/drywall.json'

import eMail from '../assets/images/EMail.svg'
import instagram from '../assets/images/Instagram.svg'
import whatsappIcon from '../assets/images/WhatsappIcon.svg'

const getIconComponet = (icon) => {
  return {
    type: 'i',
    props: {
      style: `--image-url: url("${icon}")`,
    },
  }
}

const header = getComponent(
  'header',
  getComponent('h5', getTextComponent(data.body.callToActionRepetition))
)

const input = getComponent('input')
input.props.placeholder = 'Nome'
input.props.id = 'nome'

const label = getComponent('label', getTextComponent('Seu nome'))
label.props.class = 'sr-only'
label.props.for = 'nome'

const form = getComponent(
  'form',
  label,
  input,
  createButton(
    'Orçamento sem compromisso',
    handleButtonClick,
    null,
    'cta-final'
  )
)

const getAnchor = (link, nome) => {
  const a = getComponent('a', getTextComponent(nome))
  a.props.href = link
  a.props.target = '_blank'
  a.props.rel = 'noopener noreferrer'

  return a
}

const componentEMail = getComponent(
  'li',
  getIconComponet(eMail),
  getAnchor(
    `mailto:${data.body.contact.email}`,
    `E-mail: ${data.body.contact.email}`
  )
)

const componentInsta = getComponent(
  'li',
  getIconComponet(instagram),
  getAnchor(
    `${data.body.contact.instagram}`,
    `Instagram: @${data.body.contact.instagram.split('/')[3]}`
  )
)

const componentWhatsapp = getComponent(
  'li',
  getIconComponet(whatsappIcon),
  getAnchor(
    `https://api.whatsapp.com/send?phone=${data.body.contact.phone}&text=Ola!%20Gostaria%20de%20fazer%20um%20orçamento%20sem%20compromisso.`,
    `Fernando: ${formatPhoneNumber(data.body.contact.phone)}`
  )
)

const socialLinks = getComponent(
  'ol',
  componentEMail,
  componentInsta,
  componentWhatsapp
)
socialLinks.props.class = 'social-links'

const floatWhatsapp = createButton(
  '',
  handleButtonClick,
  whatsappIcon,
  'floatWhatsapp',
  'Chama no WhatsApp'
)

const createFooter = () => {
  const footer = getComponent(
    'footer',
    header,
    form,
    socialLinks,
    floatWhatsapp
  )

  return footer
}

export const footer = createFooter()

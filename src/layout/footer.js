import { getComponent, getTextComponent } from '../utils/helpers'
import { createButton } from './../components/button'
import data from '../data/drywall.json'
import { formatPhoneNumber } from '../services/authService'

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
  createButton('Orçamento sem compromisso', null, null, 'cta-final')
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
  getAnchor('', 'E-mail: ')
)

const componentInsta = getComponent(
  'li',
  getIconComponet(instagram),
  getAnchor(
    'https://www.instagram.com/drywall.ja?igsh=MmQwZW0xZTJscXNw',
    'Instagram: @drywall.ja'
  )
)

const componentWhatsapp = getComponent(
  'li',
  getIconComponet(whatsappIcon),
  getAnchor(
    `https://api.whatsapp.com/send?phone=${data.body.contact.phone}`,
    `Fernando: ${formatPhoneNumber(data.body.contact.phone)}`
  )
)

const socialLinks = getComponent(
  'ol',
  componentEMail,
  componentInsta,
  componentWhatsapp
)

const floatWhatsapp = createButton(
  '',
  null,
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

{
  /*
  <li>
    <i></i>
    <a href=""></a>
  </li>
*/
}

// const titulo = 'Gera lista\n[̲̅b̲̅y̲̅l̲̅є̲̅σ̲̅]\n\n'
//     const linkApi = 'https://api.whatsapp.com/send?phone=55'
//     const texto = `&text=${titulo}${textarea.value}`
//     const pattern = /^\(?\d{2}\)?[\s-]?[\s9]\d{4}-?\d{4}$/i;

//     if (!inputTelefone.value || !inputTelefone.value.match(pattern)) {
//         mostrarMsgErroTel()
//         return
//     }

//     const telefone = inputTelefone.value.match(pattern)[0]
//     const linkCompleto = linkApi + telefone + encodeURI(texto)

//     window.open(linkCompleto)

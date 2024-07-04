import data from '../data/drywall.json'

export const handleButtonClick = (e) => {
  e.preventDefault()

  const linkApi = 'https://api.whatsapp.com/send?phone='
  const nome = document.querySelector('#nome').value
  const text = nome === '' ? '' : `Meu nome é ${nome}, `
  const message = `Ola! ${text}${
    nome ? 'g' : 'G'
  }ostaria de fazer um orçamento sem compromisso.`

  const linkCompleto = `${linkApi}${data.body.contact.phone}&text=${encodeURI(
    message
  )}`

  window.open(linkCompleto)
}

export const formatPhoneNumber = (phoneNumber) => {
  // Verifica se o número tem o comprimento esperado (12 caracteres para o Brasil, incluindo o código do país e o DDD)
  if (phoneNumber.length !== 12) {
    throw new Error('O número de telefone deve ter 12 dígitos.')
  }

  // Remove o código do país (os dois primeiros dígitos)
  const localNumber = phoneNumber.slice(2)

  // Formata o número
  const formattedNumber = `(${localNumber.slice(0, 2)}) 9 ${localNumber.slice(
    2,
    6
  )}-${localNumber.slice(6)}`

  return formattedNumber
}

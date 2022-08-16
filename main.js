function calcular(event) {
  event.preventDefault()

  let alcool = document.getElementById('alcool').value
  let gasolina = document.getElementById('gasolina').value
  let contentResult = document.getElementById('content-result')

  let textResult = document.getElementById('text-result')
  let textAlcool = document.getElementById('text-alcool')
  let textGasolina = document.getElementById('text-gasolina')

  let calculo = alcool / gasolina

  if (calculo < 0.7) {
    textResult.innerHTML = 'Compensa Usar Álcool'
  } else {
    textResult.innerHTML = 'Compensa Usar Gasolina'
  }

  textAlcool.innerHTML = 'Álcool R$ ' + alcool
  textGasolina.innerHTML = 'Gasolina R$ ' + gasolina

  contentResult.classList.remove('hide')
}

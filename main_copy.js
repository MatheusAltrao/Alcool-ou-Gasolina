function calcular(event) {
  event.preventDefault()

  let gasolina = document.getElementById('gasolina').value
  let alcool = document.getElementById('alcool').value
  let contentResult = document.getElementById('content-result')

  let textResult = document.getElementById('text-result')
  let textAlcool = document.getElementById('text-alcool')
  let textGasolina = document.getElementById('text-gasolina')

  let calcular = alcool / gasolina

  if (calcular < 0.7) {
    textResult.innerHTML = 'É melhor usar Álcool'
  } else {
    textResult.innerHTML = 'É melhor usar Gasolina'
  }

  textAlcool.innerHTML = 'Preço do Álcool R$ ' + alcool
  textGasolina.innerHTML = 'preço da Gasolina R$ ' + gasolina

  contentResult.classList.remove('hide')
}

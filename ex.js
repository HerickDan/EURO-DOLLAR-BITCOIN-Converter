let cotacao = document.querySelector('#cotacao')
const urlBRL = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
const valorReal =  document.querySelector('#valorDigitado')
const lerValor = valorReal.value
async function devineValor (){
    try{
        const response = await fetch(urlBRL);
        const data = await response.json()
        const precoDolar = Number(data.USDBRL.high)
        const duasCasas = precoDolar.toFixed(2)
        cotacao.innerHTML = `Preço do dolar $${duasCasas}`
        console.log(data)
        console.log(typeof precoDolar)
        return precoDolar
    }
    catch{
        console.log(`Houve um erro: ${Error}`)
    }
}
async function calcula(){
    const valorReal =  document.querySelector('#valorDigitado')
    const lerValor = valorReal.value    
    const response = await fetch(urlBRL);
    const data = await response.json()
    const precoDolar = Number(data.USDBRL.high)
    let multiplica = lerValor*precoDolar
    const resultado = document.querySelector('#resultado').innerHTML=multiplica.toFixed(2)
}
devineValor()
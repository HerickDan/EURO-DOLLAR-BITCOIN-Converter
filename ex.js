let cotacao = document.querySelector('#cotacao')
const urlBRL = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL'
const valorReal =  document.querySelector('#valorDigitado')
const lerValor = valorReal.value


async function devineValorDolar(){
    try{
        const response = await fetch(urlBRL);
        const data = await response.json()
        const precoDolar = Number(data.USDBRL.high)
        const duasCasasDolar = precoDolar.toFixed(2) 
        cotacao.innerHTML += `Preço do dolar R$${duasCasasDolar}<br>`
        console.log(data)
        console.log(typeof precoDolar)
        return precoDolar
    }
    catch{
        console.log(`Houve um erro: ${Error}`)
    }
}
async function devineValoBtc(){
    try{
        const response = await fetch(urlBRL);
        const data = await response.json()
        const precoBtc = Number(data.BTCBRL.high)
        const duasCasasBtc= precoBtc.toFixed(2) 
        cotacao.innerHTML += `Preço do Bitcoin R$${duasCasasBtc}`
        console.log(data)
        console.log(typeof precoDolar)
        return precoDolar
    }
    catch{
        console.log(`Houve um erro: ${Error}`)
    }
}
async function defineValorEuro() {
    try{
        const response = await fetch(urlBRL);
        const data = await response.json()
        const precoEur = Number(data.EURBRL.high)
        const duasCasasEur= precoEur.toFixed(2) 
        cotacao.innerHTML += `Preço do Bitcoin R$${duasCasasEur}`
        console.log(data)
        console.log(typeof precoDolar)
        return precoDolar
    }
    catch{
        console.log(`Houve um erro: ${Error}`)
    }
}


async function calcDolar(){
    const valorReal =  document.querySelector('#valorDigitado')
    const lerValor = valorReal.value    
    const response = await fetch(urlBRL);
    const data = await response.json()
    const precoDolar = Number(data.USDBRL.high)
    let multiplica = lerValor*precoDolar
    const resultado = document.querySelector('#resultado').innerHTML=multiplica.toFixed(2)
}
async function calcEuro(){
    const valorReal =  document.querySelector('#valorDigitado')
    const lerValor = valorReal.value    
    const response = await fetch(urlBRL);
    const data = await response.json()
    const precoDolar = Number(data.EURBRL.high)
    let multiplica = lerValor*precoDolar
    const resultado = document.querySelector('#resultado').innerHTML=multiplica.toFixed(2)
}
async function calcBtc(){
    const valorReal =  document.querySelector('#valorDigitado')
    const lerValor = valorReal.value    
    const response = await fetch(urlBRL);
    const data = await response.json()
    const precoBtc = Number(data.BTCBRL.high)
    let multiplica = lerValor*precoBtc
    const resultado = document.querySelector('#resultado').innerHTML=multiplica.toFixed(2)
}


async function calcula(){
    const moedas = document.querySelector("#moedas")
    try{
        if(moedas.value==='DOLAR'){
            await calcDolar()
        }
        else if(moedas.value==='EURO'){
            calcEuro()
        }
        else if(moedas.value==='BITCOIN'){
            calcBtc()
        }
    }
    catch{
        return new Error
    }
}
devineValorDolar()
devineValoBtc()
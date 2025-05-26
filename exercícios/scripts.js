function pesquisaSatisfacao(){
    let participantes = 1
    let nota
    let soma = 0
    let satisfeito = 0
    let insatisfeito = 0

    while(participantes <= 10){
        nota = Number(prompt('De 0 à 10, qual o nível de satisfação quanto ao Festival Universitário?'))
        soma = soma + nota
        if (nota >= 8){
            satisfeito++
        } else if (nota < 5){
            insatisfeito++
        }
        participantes++
    }
let media = soma / 10
    alert(`Total de participantes: ${participantes-1} \n` + `Participantes satisfeitos: ${satisfeito} \n` + `Participantes insatisfeitos: ${insatisfeito} \n` + `Média das notas: ${media}`)
}

function exe1(){
    let a, b, c, d, aux
    let conta = 1
    a = Number(prompt(`Informe o valor de A`))
    b = Number(prompt(`Informe o valor de B`))
    c = Number(prompt(`Informe o valor de C`))
    d = Number(prompt(`Informe o valor de D`))
    while(conta <= 3){
        if (a > b){
            aux = a; a = b; b = aux
        } 
        if (b > c){
            aux = b; b = c; c = aux
        }
        if (c > d){
            aux = c; c = d; d = aux
        }
        conta++
    }
    alert(`Ordem crescente: ${a}, ${b}, ${c}, ${d}`)
    alert(`Ordem decrescente: ${d}, ${c}, ${b}, ${a}`)
}

function exercicio1(){
    let cont = 1
    let qntValores = 0

    while(cont <= 5){
    let grupo = []
        while(qntValores < 4){
            grupo.push(Number(prompt(`Informe um valor para o grupo ${cont}`)))
            qntValores++
        }

    alert(`Grupo ${cont}: ${grupo}
Ordem crescente: ${grupo.sort(function(a,b){return a - b})}
Ordem decrescente: ${grupo.sort(function(a,b){return b - a})}`)

    cont++
    qntValores = 0
    }
}

function exercicio11(){
    let cont = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []

    while(cont < 1){
        if (grupo1.length < 4 ){
            grupo1.push(Number(prompt(`Informe um valor para o grupo 1`)))
        } else if (grupo2.length < 4){
            grupo2.push(Number(prompt(`Informe um valor para o grupo 2`)))
        } else if (grupo3.length < 4){
            grupo3.push(Number(prompt(`Informe um valor para o grupo 3`)))
        } else if (grupo4.length < 4){
            grupo4.push(Number(prompt(`Informe um valor para o grupo 4`)))
        } else if (grupo5.length < 4){
            grupo5.push(Number(prompt(`Informe um valor para o grupo 5`)))
        } else{
            cont = 1
        }
    }

    alert(`Grupo 1: ${grupo1}\nGrupo 2: ${grupo2}\nGrupo 3: ${grupo3}\nGrupo 4: ${grupo4}\nGrupo 5: ${grupo5}`)
    alert(`Ordem crescente\nGrupo 1: ${grupo1.sort(function(a,b){return a - b})}\nGrupo 2: ${grupo2.sort(function(a,b){return a - b})}\nGrupo 3: ${grupo3.sort(function(a,b){return a - b})}\nGrupo 4: ${grupo4.sort(function(a,b){return a - b})}\nGrupo 5: ${grupo5.sort(function(a,b){return a - b})}`)
    alert(`Ordem crescente\nGrupo 1: ${grupo1.sort(function(a,b){return b - a})}\nGrupo 2: ${grupo2.sort(function(a,b){return b - a})}\nGrupo 3: ${grupo3.sort(function(a,b){return b - a})}\nGrupo 4: ${grupo4.sort(function(a,b){return b - a})}\nGrupo 5: ${grupo5.sort(function(a,b){return b - a})}`)
}

function exercicio2(){
    let preco = 5
    let ingressos = 120
    let lucro
    let aux = ""
    let maiorLucro = 0, precoMaior = 0, ingressosMaior = 0

    while (preco >= 1){
        lucro = (preco * ingressos) - 200
        if(lucro > maiorLucro){
            maiorLucro = lucro
            precoMaior = preco
            ingressosMaior = ingressos
        }
        aux = aux + "\n" + (`Preço: ${preco} - Ingressos: ${ingressos} - Lucro: ${lucro}`)
        ingressos += 26
        preco -= 0.5
    }
    alert(aux)
    alert(`Maior lucro: ${maiorLucro} - Preço: ${precoMaior} - Qtde Ingressos: ${ingressosMaior}`)
}

function exercicio3(){
    let idade
    let pessoas = 1
    let faixa1 = 0
    let faixa2 = 0
    let faixa3 = 0
    let faixa4 = 0
    let faixa5 = 0

    while (pessoas <= 8){
        idade = Number(prompt(`Informe a idade da ${pessoas}ª pessoa:`))
        if(idade >=0 ){
            if(idade <=15){
                faixa1++
            } else if(idade <= 30){
                faixa2++
            } else if(idade <= 45){
                faixa3++
            } else if(idade <= 60){
                faixa4++
            } else{
                faixa5++
            } 
        } else{
                alert("Informe uma idade válida!")
                continue
            }
        pessoas++
    }
    alert(`Até 15 anos: ${faixa1} = ${((faixa1/8)*100).toFixed(1)}%` +
        `\nDe 16 a 30 anos: ${faixa2}` +
        `\nDe 31 a 45 anos: ${faixa3}` +
        `\nDe 46 a 60 anos: ${faixa4}` +
        `\nAcima de 60 anos: ${faixa5} = ${((faixa5/8)*100).toFixed(1)}%`
    )
}

function exe4(){
    let i, cont, result
    let tabuada = ""

    i = Number(prompt("Informe um número para receber sua tabuada"))

    for(cont = 0; cont<=10; cont++){
        result = cont * i
        tabuada+= `${i} x ${cont} = ${result}\n`
    }

    alert(tabuada)
}

function exe44(){
    let numero = Number(prompt(`Informe um número`))

    for(let i = 0; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`)
    }
}

function exe5(){
    let n, cont, result

    for(cont = 1; cont<=10; cont++){
      let tabuada = ""  
        for(n = 0; n <= 10; n++){
            result = cont * n
            tabuada+= `${cont} x ${n} = ${result}\n`
            
        }
       alert(tabuada) 
    }
}

function exe55(){
    for(let i = 1; i <= 10; i++){
        for(let mult = 0; mult <= 10; mult++){
            console.log(`${i} * ${mult} = ${i*mult}`)
        }
        console.log(`------------------------`)
    }
}

function exe6(){
    let V = 0, P = 0, valor, cont, opcao, valorTotal

    for(cont = 1; cont <= 15; cont++){
        opcao = prompt("V = à vista\nP = a prazo")
            if(opcao != "V" && opcao != "v" && opcao != "P" && opcao != "p"){
                alert("Informe uma opção válida")
                cont--
                continue
            }
        valor = Number(prompt("Informe o valor da compra:"))
            if(valor <= 0){
                alert("Informe um valor válido")
                cont--
                continue
            }
        if(opcao === "V" || opcao === "v"){
            V+= valor
        } else{
            P+= valor
        }
    }
    valorTotal = V + P
    alert(`Valor total das compras à vista: R$${V}\n`
        + `Valor total das compras a prazo: R$${P}\n`
        + `Valor total das compras efetuadas: R$${valorTotal}\n`
        + `Valor da primeira prestação a prazo: R$${(P/3).toFixed(2)}`
    )
}

function exe66(){
    
}
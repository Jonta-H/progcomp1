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

    for (preco; preco >= 1; preco -= 0.5){
        lucro = (preco * ingressos) - 200
        alert(`${preco}\n${ingressos}\n${lucro}`)
        ingressos += 26
    }
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
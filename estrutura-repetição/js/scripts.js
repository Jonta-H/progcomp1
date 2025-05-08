function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt('Informe a nota ${conta}'));
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    alert(media)
}

function pesquisaSatisfacao(){
    let conta = 1 // numero de participantes
    let nota // será informado pelo usuário
    let soma = 0 // soma as notas para a média
    let satisfeitos = 0 // inicialmente, nenhum satisfeito 
    let insatisfeito = 0 // inicialmente, nenhum insatisfeito
    while(conta <= 10){
        nota = Number(prompt(`Informe a nota (0 a 10) do participante ${conta}`))
        if (nota >= 8 && nota <= 10){
            satisfeitos++ // satisfeitos = satisfeitos + 1
        } else if (nota >= 0 && nota < 5){
            insatisfeito++ // insatisfeitos = insatisfeitos + 1
        } else if (nota < 0 || nota > 10){ // || é OU
            alert(`Nota inválida!`)
            continue // volta para o início do while
        }
        soma += nota // soma as notas informadas
        conta++ // conta = conta + 1
    }
    let media = soma / 10 // calcula a média das notas
    alert(`Satisfeitos: ${satisfeitos}\nInsatisfeitos: ${insatisfeito}\nMédia: ${media.toFixed(1)}`)
}
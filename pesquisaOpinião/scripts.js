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
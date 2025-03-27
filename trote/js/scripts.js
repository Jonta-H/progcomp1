function calcular(){
    let soma = 0
    //declaração de variável sem tipo
    //recupera o valor da ação social digitado
    let acaosocial = document.getElementById("acaosocial").value
    soma = soma + Number(acaosocial)
    //recupe o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    let leite = document.getElementById("leite").value
    soma = soma + (2 *leite)
    let kitavulso = document.getElementById("kitavulso").value
    soma = soma + (30 * kitavulso)
    let suplementoavulso = document.getElementById("suplementoavulso").value
    soma = soma + (15 * suplementoavulso)
    let arroz = document.getElementById("arroz").value
    soma = soma + Number(arroz)
    let feijao = document.getElementById("feijao").value
    soma = soma + Number(feijao)

    //soma os valores
    //devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}
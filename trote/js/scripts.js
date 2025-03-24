function calcular(){
    //recupera o valor da ação social digitado
    //declaração de variável sem tipo
    let acaosocial = document.getElementById("acaosocial").value
    //recupe o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    //soma os valores
    let soma = Number(acaosocial) + Number(homenagem)
    alert(soma)
}
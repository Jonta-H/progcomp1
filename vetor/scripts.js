function exe1(){
    let nums = [], impares = [], pares = []
    for(let i = 0; i < 6; i++){
        nums[i] = Number(prompt(`Informe o ${i+1}º numero:`))
    }

    for(let i = 0; i < 6; i++){
        if(nums[i] % 2 == 0){
            pares.push(nums[i])
        } else{
            impares.push(nums[i])
        }
    }

    console.log(`Numeros pares: ${pares}\n`+
                `Quantidade de pares: ${pares.length}\n`+
                `Numeros impares: ${impares}\n`+
                `Quantidade de impares: ${impares.length}`)
}

function exe(){
    let nums = []

    for(let i = 0; i < 10; i++){
        nums[i] = Number(prompt(`Informe um numero`))
    }

    for(let i = 0; i < 10; i++){
        if(i % 2 == 0){
            nums[i]+= 10
        } else{
            nums[i]*= 5
        }
    }

    console.log(nums)
    
}
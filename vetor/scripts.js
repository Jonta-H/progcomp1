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

function exe2(){
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

function exe3(){
    let opiniao = [], gostouMT = 0, gostou = 0, naoGostou = 0
    
    for(let i = 0; i < 10; i++){
        do{
            opiniao[i] = Number(prompt(`Pesquisa de opinião ${i+1}\n1 - Gostei muito\n2 - Gostei\n3 - Não gostei`))
        } while(opiniao[i] != 1 && opiniao[i] != 2 && opiniao[i] != 3)
        if(opiniao[i] == 1){
            gostouMT++
        } else if(opiniao[i] == 2){
            gostou++
        } else{
            naoGostou++
        }
    }

    console.log(`${gostou} pessoas gostaram\n`+
                `${gostouMT} pessoas gostaram muito\n`+
                `${naoGostou} pessoas não gostaram. Representando ${(naoGostou/opiniao.length)*100}%`)
}


class MinhaClasse{

    constructor(valor){
        this.valor = valor;
    }

    operacaoAssincrona(){
        return new Promise((resolve,reject)=>{
            const resultado = this.valor * 2;

            if(resultado >= 0){
                resolve(resultado)
            }else{
                reject("O resultado é negativo")
            }
        })
    }
}

const minhaClasse = new MinhaClasse(5);
minhaClasse.operacaoAssincrona()
.then((resultado) =>{
    console.log("O resultado da operação é:",resultado)
})
.catch((erro) =>{
    console.log("Ocorreu um problema:",erro)
})
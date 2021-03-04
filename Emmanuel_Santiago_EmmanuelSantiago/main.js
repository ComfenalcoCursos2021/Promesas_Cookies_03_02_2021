

window.onload = function(){

   
    const saludar = function(){
        return new Promise((resolve, reject)=>{
            console.log(`Hola soy ${this.name} como estas`);
            resolve({maquina : maquina.call(data),servidor: servidor.call(data)});
        })
    }
    const maquina = function(){
        return new Promise((resolve, reject)=>{
            resolve(`Hola ${this.name} como estas soy ${this.intel}`);
        })
    }
    const servidor = function(){
        return new Promise((resolve, reject)=>{
            resolve(`Hola ${this.name} y ${this.intel} soy el servidor ${this.tiempo} estoy en ejecucion`);
        })
    }

    const data = new Object();
    document.getElementById("promesas").addEventListener("click", function(){
        data.name = document.getElementById("inputUsuario").value;
        data.intel = document.getElementById("inputMaquina").value;
        data.tiempo = document.getElementById("inputServidor").value;

        saludar.call(data)
        .then(res =>{
            return res;
        })
        .then(res =>{
            res.maquina.then(console.log);
            return res;
        }).then(res =>{
            res.servidor.then(console.log);
        }).catch(res =>{
            console.log(res);
        })
    })

}

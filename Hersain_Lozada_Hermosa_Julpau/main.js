window.onload = function(){
    const nombre = document.getElementById("inputData");
   
    const data = {
        name : "Miguel Angel Castro Escamilla",
        intel : "Cortana"
    }
    const saludar = function(){
        return new Promise((resolve, reject)=>{
            console.log(`Hola soy ${this.name} como estas`);
            resolve({maquina : maquina.call(data),servidor: servidor()});
        })
    }
    const maquina = function(){
        return new Promise((resolve, reject)=>{
            resolve(`Hola ${this.name} como estas soy ${this.intel}`);
        })
    }
    const servidor = function(){
        return new Promise((resolve, reject)=>{
            resolve("Hola soy el servidor");
        })
    }
    saludar.call(data)
    .then(res =>{
        return res;
    }).then(res =>{
       res.maquina.then(console.log);
       return res;
    }).then(res =>{
        res.servidor.then(console.log);
    }).catch(res =>{
        console.log(res);
    })
}
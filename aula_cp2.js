document.getElementById("button").addEventListener("click",() =>{
    var nomeUsuario;
    var senhaUsuario;
    
    while (true){
        
        console.log("aaaa")
        nomeUsuario = document.getElementById("login").value;
        senhaUsuario = document.getElementById("senha").value;

        if (nomeUsuario === "1234" && senhaUsuario === "1234"){

            alert("logado com sucesso!");
            break;
        }

        alert("login ou senha inválida, tente novamente")

    
    }

})

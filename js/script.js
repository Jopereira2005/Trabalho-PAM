navigation = document.getElementById("nav");
Fundo = document.getElementById("Fundo");
const modal = document.getElementById("modal");

window.addEventListener("scroll", function () {
  if (scrollY > 0) {
      navigation.classList.add('scroll');
      Fundo.classList.add('scroll');
    } else {
      navigation.classList.remove('scroll');
      Fundo.classList.remove('scroll');
    }
});

const btnsCadastro = document.querySelectorAll(".cadastro")
btnsCadastro.forEach(i => {
  i.addEventListener('click', function () {
    modal.classList.remove('desaparecer');
    modal.classList.add('layer');
  }) 
})

const btnFechar = document.getElementById("fechar")

btnFechar.addEventListener('click', function () {
  modal.classList.remove('layer');
}) 





// -----------------------------------------------


function salvarDados() {
  let stringContas = JSON.stringify(CONTAS);

  localStorage.setItem('CONTAS', stringContas)

}

function carregarDados(tipo) {
  let dados = localStorage.getItem(tipo);

  if(!dados) {
      return [];
  } else {
      return JSON.parse(dados);
  }
}


const DIV_CONTAS = document.getElementById("contas");

const btnAdd = document.getElementById("btn-add");

const CONTAS = carregarDados("CONTAS");

var qtd = 0;
var i = 0;

btnAdd.addEventListener("click", function() {
    const titulo = document.getElementById("titulo");
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");

     while(i < qtd){i++}

     let id =  i;
     let tituloV = titulo.value;
     let nomeV = nome.value;
     let telefoneV = telefone.value;
     let emailV = email.value;

     CONTAS.push(
         {
        "id": id,
         "titulo": tituloV,
         "nome": nomeV,
         "telefone": telefoneV,
         "email": emailV
         }
     )
     titulo.value = "";
     nome.value = "";
     telefone.value = "";
     email.value = "";

    modal.classList.remove("layer")
    modal.classList.add("desaparecer")
     atualizar()   
})

function remover(index) {

  CONTAS.splice(index, 1)[0]; 

  setTimeout(function () {
       atualizar(); 
   }, 175);

 }

 function atualizar() {
     salvarDados()
     DIV_CONTAS.innerHTML = "";
     CONTAS.forEach((conta,i) => { //(tarefa,i) o i representa o indice
         let modelo_conta =
         `<div class="conta">
         <h5>${conta.titulo}</h5>
         <h5>${conta.nome}</h5>
         <h5>${conta.telefone}</h5>
         <h5>${conta.email}</h5>
         <button class="btn-remove" onclick="remover(${i})">X</button>                  
         </div><br>`;
         DIV_CONTAS.innerHTML += modelo_conta;
    });

}

 atualizar()


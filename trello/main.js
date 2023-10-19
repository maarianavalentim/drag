const tarefas = document.querySelectorAll(".tarefa")
const colunas = document.querySelectorAll(".coluna")

//Variável para armazenar  a tarefa que está sendo arrastada
let tarefaArrastada = null

//Adiciona os ouvintes para cada tarefa 
tarefas.forEach(tarefa=> {
    tarefa.addEventListener("dragstart"),  iniciarArrasto
    tarefa.addEventListener("dragend", finalizarArrasto)
})

colunas.formEach(coluna => {
    coluna,addEventListener("dragover", permitirSoltar)
    coluna.addEventListener("drop", soltarTarefa)
})
//Função para iniciar o arrasto da tarefa 
function iniciarArrasto(event){
    tarefaArrastada = this;
    this.classList.addEventListener("arrastando")
}
//Função para finalizar o arrasto da tarefa 
function finalizarArrasto(event){
    this.classList.remove("arrastando")
}
//Função para permitir soltar a tarefa na coluna 
function permitirSoltar(event){
    event.preventDefault();
}

//Função para soltar a tarefa na nova coluna 
function soltarTarefa(event){
    event.preventDefault();
    // verifica se tem uma tarefa sendo arrastada 
    if(tarefaArrastada){
        this.querySelector(".tarefas").appenChild(tarefaArrastada)
        tarefaArrastada = null
    }
}
//Adiciona a função para adicionar novas tarefas 
const formAdicionarTarefa = document.getElementById("adicionar-tarefa")
formAdicionarTarefa.addEventListener("submit", adicionarTarefa)

function adicionarTarefa(event){
    event.preventDefault()

    const novaTarefa = document.getElementById("nova-tarefa").value
    if (novaTarefa){
        const novaTarefaLi = document.createElement("li")
        novaTarefaLi.innerHTML = novaTarefa 
        novaTarefaLi.draggable = true
        novaTarefaLi.classList.add("tarefa")

        document.getElementById("tarefas-a-fazer").appendChild(novaTarefaLi)
        document.getElementById("nova-tarefa").value= ""
        novaTarefaLi.addEventListener("dragstart", iniciarArrasto)
        novaTarefaLi.addEventListener("dragend", finalizarArrasto)
    }
}

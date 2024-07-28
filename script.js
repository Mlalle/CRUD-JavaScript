const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')



const addTodo = () =>{

    const inputText = inputBox.value.trim()

    if(inputText.length <= 0){
        alert('vous devez saisir necessairement quelque chose')
    }
    else{

        const li = document.createElement('li')
        const p = document.createElement('p')
        p.innerHTML = inputText
        li.appendChild(p)

        const editBtn = document.createElement('button')
        editBtn.innerText = 'Edit'
        editBtn.classList.add('btn', 'editBtn')
        li.appendChild(editBtn)

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'Remove'
        deleteBtn.classList.add('btn', 'deleteBtn')
        li.appendChild(deleteBtn)

        todoList.appendChild(li)
        inputBox.value = ''
        addBtn.value = 'add'
    }
}

const updateTodo =(e)=>{
    if(e.target.innerHTML === 'Remove'){
        todoList.removeChild(e.target.parentElement)
    }
    else{
        inputBox.value = e.target.previousElementSibling.innerHTML
        inputBox.focus()
        addBtn.value = 'Edit'
        todoList.removeChild(e.target.parentElement)
    }

}


todoList.addEventListener('click', updateTodo)


addBtn.addEventListener('click',addTodo)

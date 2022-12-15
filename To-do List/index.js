const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//function to add todos

const generateTemplete = (todo) =>{
    const html = ` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="text-light">${todo}</span>
    <i class="fa-solid fa-trash text-light delete"></i>
    </li>`

    list.innerHTML += html;
}


addForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
     generateTemplete(todo)
     addForm.add.value = '';
    }
    
});

//delete Todos
list.addEventListener('click', (e) =>{
    if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
        console.log(term);
};


// filter Todos
search.addEventListener('keyup', (e) =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})
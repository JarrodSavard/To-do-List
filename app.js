const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

addForm.addEventListener ('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

// Delete to-do's

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

// Keyup/Search event
const filterTodos = term => {
    Array.from(list.children)
    .filter((liTag) => !liTag.textContent.toLowerCase().includes(term))
    .forEach((liTag) => liTag.classList.add('filtered'));

    Array.from(list.children)
    .filter((liTag) => liTag.textContent.toLowerCase().includes(term))
    .forEach((liTag) => liTag.classList.remove('filtered'));

};


search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
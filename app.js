// Definisi Variabel User Interface
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.list-group');
const todoClearBtn = document.querySelector('#todo-clear');
const todoFilter = document.querySelector('#todo-filter');
const todoInput = document.querySelector('#todo');

// Memuat seluruh event listener
loadEventListeners();

// Fungsi load even listeners
function loadEventListeners () {
    // Menambah todo
    todoForm.addEventListener('submit', addTodo);
}

// Fungsi Menambah Todo
function addTodo (e) {
    if (todoInput.value === '') {
        alert('Add a todo');
    }

    // Membuat element li
    const li = document.createElement('li');
    // Menambahkan class
    li.className = 'list-group-item';
    // Membuat Text Node dan isi ke element li
    li.appendChild(document.createTextNode(todoInput.value));
    // Membuat element link
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    // Menambahkan class link
    link.className = 'todo-delete float-right';
    // Menambahkan icon pada link
    link.innerHTML = '<i class="fas fa-minus-square"></i>';
    // Menambahkan link ke isi element li
    li.appendChild(link);

    // Menambahkan element li pada isi element ul
    todoList.appendChild(li);
    // Menghapus isian terakhir pada input todo
    todoInput.value = '';

    e.preventDefault();
}
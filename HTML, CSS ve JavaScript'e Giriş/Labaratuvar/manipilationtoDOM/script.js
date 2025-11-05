function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Lütfen bir görev giriniz.');
    return;
  }
  const todoList = document.getElementById('todoList');
  const li = document.createElement('li');
  const p = document.createElement('p');
  const buttonUpdate = document.createElement('button');
  buttonUpdate.textContent = 'Güncelle ✏️';
  buttonUpdate.addEventListener('click', () => {
    editTask(li);
  });

  const buttonDelete = document.createElement('button');
  buttonDelete.textContent = 'Sil 🗑️';
  buttonDelete.addEventListener('click', () => {
    deleteTask(li);
  });

  p.textContent = taskText;
  li.appendChild(p);
  li.appendChild(buttonUpdate);
  li.appendChild(buttonDelete);
  todoList.appendChild(li);

  taskInput.value = '';
}

function editTask(li) {
  const taskText = li.querySelector('p').textContent;
  
  const newValue = window.prompt("Görevi güncelle:", taskText);
  if (newValue !== null && newValue.trim() !== "") {
    li.querySelector('p').textContent = newValue.trim();
  }
}

function deleteTask(li) {
  const taskText = li.querySelector('p').textContent;
  const confirm = window.confirm("Görevi silmek istediğinize emin misiniz?");
  if (confirm) {
    li.remove();
  }
}
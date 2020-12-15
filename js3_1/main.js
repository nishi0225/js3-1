'use strict'
//入力値,追加Button,表示場所を取得
const input = document.getElementById('inputValue');
const addTaskButton = document.getElementById('addTaskButton');
const addTaskTarget = document.getElementById('addTaskTarget');
//radioButtoを取得
const radioWorking = document.getElementById('Working');
const radioDone = document.getElementById('Done');

//入力値を格納する配列を作成
const taskList = [];
//index番号を作成
let tdId = 0;

//id,taskを作成
const addTask = (task,id,newTable) => {
  const tdIdElement = document.createElement('td');
  const tdTaskElement = document.createElement('td');
  //taskListに入力値を追加
  const todo = {
    task: tdTaskElement,
    status: '作業中',
  };
  taskList.push(todo);
  //要素内(文字)を作成
  tdIdElement.textContent = id;
  tdTaskElement.textContent = task;
  newTable.appendChild(tdIdElement);
  newTable.appendChild(tdTaskElement);
  addTaskTarget.appendChild(newTable);
}

//Buttonを作成
const addButton = (newTable,removeButton,statusButton) => {
  const tdstasuButton = document.createElement('td');
  const tdRemoveButton = document.createElement('td');
  //Button名を作成
  statusButton.textContent = '作業中';
  removeButton.textContent = '削除';
  //td要素にButtonを追加
  tdstasuButton.appendChild(statusButton);
  tdRemoveButton.appendChild(removeButton);
  //trにtd追加,表示
  newTable.appendChild(tdstasuButton);
  newTable.appendChild(tdRemoveButton);
  addTaskTarget.appendChild(newTable);
}

//追加Buttonをクリックした際の処理
addTaskButton.addEventListener('click', () => {
  const task = inputValue.value;
  const newTable = document.createElement('tr');
  const removeButton = document.createElement('button');
  const statusButton = document.createElement('button');

  addTask(task,tdId++,newTable);
  addButton(newTable,removeButton,statusButton);
  inputValue.value = '';
  input.focus();

  //削除Buttonの処理
  const deleteTask = (deleteTr) => {
    const tableTr = deleteTr.target.closest('tr');
    if (tableTr) {
      tableTr.remove();
    }
  }
  removeButton.addEventListener('click', deleteTask, false);

  //statusButtonの表示切替
  statusButton.addEventListener('click',(state) => {
    if (statusButton.textContent === '作業中') {
      statusButton.textContent = '完了';
      const doneTask = state.target.parentNode;
      doneTask.className = 'doneTask';
    } else {
      statusButton.textContent = '作業中';
      const workTask = state.target.parentNode;
      workTask.className = 'working';
    }
  });
});





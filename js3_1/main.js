'use strict'

//入力値を格納する配列を作成
const taskList = [];
//入力値,ボタン,表示場所を取得
const input = document.getElementsByClassName('inputValue')[0];
const addTaskButton = document.getElementsByClassName('addTaskButton')[0];
const addTaskTarget = document.getElementsByClassName('addTaskTarget')[0];

const addTask = () => {
  const todos = input.value;
  taskList.push(todos);
  const trElement = document.createElement('tr');
  const tdElementId = document.createElement('td');
  const tdElementTask = document.createElement('td');
  for(let i = 0; i < taskList.length; i++) {
    tdElementId.textContent = i;
  }
  tdElementTask.textContent = todos;
  trElement.appendChild(tdElementId);
  trElement.appendChild(tdElementTask);

  //状態ボタンを作成
  const statusButton = document.createElement('button');
  const tdstatusButton = document.createElement('td');
  statusButton.textContent = '作業中';
  tdstatusButton.appendChild(statusButton);
  //削除ボタンを作成
  const removeButton = document.createElement('button');
  const tdremoveButton = document.createElement('td');
  removeButton.textContent = '削除';
  tdremoveButton.appendChild(removeButton);
  //buttonを追加
  trElement.appendChild(tdstatusButton);
  trElement.appendChild(tdremoveButton);
  addTaskTarget.appendChild(trElement);
}
//クリック時の処理
addTaskButton.addEventListener('click', () =>{
  addTask();
  input.value = '';
  input.focus();
})



'use strict'
//入力値,追加Button,表示場所を取得
const input = document.getElementById('inputValue');
const addTaskButton = document.getElementById('addTaskButton');
const addTaskTarget = document.getElementById('addTaskTarget');

//入力値を格納する配列を作成
const taskList = [];

//task,idを追加する関数を作成
const addTask = (task, id) => {
  const tdTaskElement = document.createElement('td');
  const tdIdElement = document.createElement('td');
  tdIdElement.textContent = id;
  tdTaskElement.textContent = task;
  const newId = tdIdElement;
  const newTask = tdTaskElement;
  showTask(newTask,newId);
}
//task,Buttonを表示する関数を作成
const showTask = (newTask, newId) => {
  const newTr = document.createElement('tr'); 
  newTr.appendChild(newId);
  newTr.appendChild(newTask);
  //Buttonを表示するtdを作成
  const tdStatusButton = document.createElement('td');
  const tdDeleteButton = document.createElement('td');
  //作成したtd要素にButtonを作成する関数を子要素として追加
  tdStatusButton.appendChild(createStatusButton());
  tdDeleteButton.appendChild(createDeleteButton());
  //tr要素へButton要素を追加
  newTr.appendChild(tdStatusButton);
  newTr.appendChild(tdDeleteButton);
  addTaskTarget.appendChild(newTr);
  //入力値を初期化,フォーカス
  input.value = '';
  input.focus();
}
//状態Buttonを作成する関数
const createStatusButton = () => {
  const statusButton = document.createElement('button');
  statusButton.textContent = '作業中';
  return statusButton;
}
//削除Buttonを作成する関数
const createDeleteButton = () => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  return deleteButton;
}
//追加Buttonクリック時の処理
addTaskButton.addEventListener('click', () => {
  const todo = input.value;
  const todos = {
    id: taskList.length,
    task: todo,
    status: '作業中'
  }
  taskList.push(todos);
  addTask(todo,todos.id);
})
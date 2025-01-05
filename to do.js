//console.log('running ');

let todolist=[];
displaytodo();


function addtodo(){
    let inputElement=document.querySelector('#input-box');// 
    let dateElement=document.querySelector('#input-date');
    let duedate=dateElement.value; //accessing the input value of date 
    let todoItem=inputElement.value;//accessing the input value of text
    let todolist = JSON.parse(localStorage.getItem('list')) || []; 
    // if any previous data is available in the local storage the accss it first else st it to NULL
    todolist.push({item:todoItem,duedate:duedate});
    // adding the elements to the last of the array 
localStorage.setItem('list',JSON.stringify(todolist));
// storing the data into the local storage 
    inputElement.value='';
    dateElement.value='';

    displaytodo();
}
function displaytodo()
{
    let containerElement=document.querySelector('.todo-container');
    let savedtodo = localStorage.getItem('list');
    //geting the data from the local storage by key 'list'  
    let todolist = JSON.parse(savedtodo) || [];
    // convertin the data into object if there is no data seting it to NULL 
   let newHtml='';
    for(let i=0;i<todolist.length;i++)
    { 
      let {item,duedate}=todolist[i];
      //accessing the data in to the list
        newHtml+=`
        <span>${item}</span><span>${duedate}</span>
        <button  class="btn-delete btn" onclick="deleteTodo(${i});">Delete</button> 
        `;
    }
    containerElement.innerHTML=newHtml;
}
function deleteTodo(index) {
 let savedtodo = localStorage.getItem('list');
 let todolist = JSON.parse(savedtodo) || []; 
 todolist.splice(index, 1); 
 localStorage.setItem('list', JSON.stringify(todolist));
 displaytodo();
    }
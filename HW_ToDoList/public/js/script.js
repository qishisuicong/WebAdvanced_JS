//place to save tasks
var taskArray = [];

var saveTask = function(){
  var taskInput = document.getElementById('icon_prefix2');
  var newTask = taskInput.value;

  //add new value to  array
  taskArray.push(newTask);
  updateTasks();
  taskInput.value='';
  console.log(taskArray);
};

//update task list
var updateTasks = function(){
    var taskListHolding = document.getElementById('taskList');
  
  //empty the task lisk
  taskListHolding.innerHTML='';
  //determine task list length
  var len = taskArray.length;
  var i;
  
  for(i=0; i<len; i++){
    console.log('task ' + i + ": " + taskArray[i]);
    //create element
    var newTask = document.createElement('li');
    var task = document.createElement('p');
    //create check box
    var checkBox = document.createElement('input');
    var box = document.createElement('label');
    //define the div's ID and it's class
    newTask.id = i;
    newTask.className ='task';
    task.innerHTML = taskArray[i];
    //checkbox inner elements
    checkBox.type = "checkbox";
    checkBox.id = i+1;
    box.setAttribute("for",i+1);

    //append the checkbox to each of my task
    task.appendChild(checkBox);
    task.appendChild(box);
    newTask.appendChild(task);

    
    //append the taskDiv to the tasklistholding Div
    taskListHolding.appendChild(newTask);

    //append the tasklistholding Div to the body Div
    document.getElementById("myAwesomeToDoList").appendChild(taskListHolding);
    
  };

  
};

//save task 01


var init = function(){
  //define "add" button
  var addButton = document.getElementById("addButton");
  
  //add event listener for click
  addButton.addEventListener('click', function(e){
    
  e.preventDefault();
  saveTask();
    
  });
};
// var deleteTask = function(e){
//   var taskNumber = e.target.parentElement.id;
//   taskNumber.splice(taskNumber,1);
//   updateTasks();

// }

window.onload = init();
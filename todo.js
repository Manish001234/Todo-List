var counter =0;

function addData(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var status = document.getElementById("status").value;
  var changer = document.getElementById("count");
  changer.textContent = ++counter
  changer.style.color ="red";
  function task(name, date, status) { // passes three parameters name,data ,status.
    this.Name = name; //creating key =name & storing the data of name as value in object
    this.Date = date;  //creating key =Date & storing the data of date as value in object
    this.Status = status; //creating key =Status & storing the data of status as value in object // i have made default status selected in html
  }
  var newtasks = new task(name, date, status); //creating new object of nmae = newtasks && passing the fetched value from input box
  //console.log(newtasks);
  createItem(newtasks.Name, newtasks.Date, newtasks.Status); // now getting the data from the formed object and passing to another function.
}

function createItem(name, date, status) {
  var parent = document.querySelector("table");
  
  var row = document.createElement("tr");
  var c1 = document.createElement("td");
  c1.textContent = name;
  c1.style.fontSize = "20px"
  var c2 = document.createElement("td");
  c2.textContent = date;
  c2.style.fontSize = "20px"
  var c3 = document.createElement("td");
  c3.textContent = status;
  c3.style.fontSize = "20px"
  c3.setAttribute("id","change-status")
  //Adding toggle button
  function change(){ 
  if(status == "True"){
    status = "False";
  }else if(status == "False"){
    status = "True"
  }
  c3.textContent = status;
}
var toggle = document.getElementById("toggle");
toggle.addEventListener("click",change)

  var c4 = document.createElement("button");
  c4.textContent = "Done"
  c4.setAttribute("class", "done");
  
  var c5 = document.createElement("button");
  c5.textContent = "Remove"
  c5.setAttribute("class", "remove");
  // adding functions of done and remove

  var done = function (element) {
  var parent = element.target.parentNode;
  
  c1.style.backgroundColor ="green";
  c2.style.backgroundColor ="green";
  c3.style.backgroundColor ="green";
  parent.style.textDecoration = "line-through";
}
c4.addEventListener("click",done);
var remove = function (element) {

  //console.log(element.target);
  var parent = element.target.parentNode;
  if (confirm('Are you sure you want to delete this task')) {
    parent.remove();
    var changer = document.getElementById("count");
    changer.textContent = --counter
    changer.style.color = "green";
    //console.log('The task is deleted');
  } else {
  }
}
c5.addEventListener("click", remove);


  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  row.appendChild(c5);

  parent.appendChild(row);
}
var submit = document.getElementById("submit");
submit.addEventListener("click", addData);

var line = document.querySelector("hr")
function random(number) {
  return Math.floor(Math.random()*number)
}
function colors (){
  var new1 = "rgb("+random(255) + "," + random(255) + "," + random(255) + ")";
  line.style.backgroundColor = new1;
}
line.addEventListener("mouseover",colors)
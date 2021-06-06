var getUserName = prompt("Hello,what's your name?");

console.log(getUserName);

document.getElementById("userName").innerText = getUserName;

// tootltip example 
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
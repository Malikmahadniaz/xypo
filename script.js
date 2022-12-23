 var menu = document.getElementById("menu");

 var side = document.getElementById("side");

 side.style.right = "-250px";
 menu.onclick = function () {
     if (side.style.right == "-250px") {
         side.style.right = "0";
     } else {
         side.style.right = "-250px";
     }
 }

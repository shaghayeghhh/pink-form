function myfunction() {
  /*var x= document.getElementById("button").innerHTML=" 'next <input type='text' name='text'/>'"
   onclick="x"*/

  /*event.preventDefault()
   const x = document.getElementById("inputdiv" ).innerHTML=" <input type='text'  class='input' id='input2' >"
   document.getElementById("inputdiv").innerHTML = x;
   event.preventDefault
   document.body.getElementById("formContainer").appendChild(x)*/

  /*event.preventDefault()
   const x = document.createElement("div");
   const y= document.createElement('input');
   event.preventDefault()
y.appendChild(x);
  document.getElementById("formContainer").appendChild(x);*/

 event.preventDefault();
  console.log("hello");
  const y = document.createElement("div");

  y.setAttribute("class", "jsinputdiv");
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "jsinput");
  x.appendChild(y);
  document.getElementById("Row1").appendChild(x);
}

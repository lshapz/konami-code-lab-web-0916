const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {//init
var index = 0
  document.body.addEventListener('keydown', function(e){//document
  const key = parseInt(e.which || e.detail)
  if (code[index] === key){ //code index
    index++
  
  if (index === (code.length -1) ){ //code length
    alert("hurray!")

    index = 0
    } } else { //if length / elsestart
      index = 0
    } //else
   //if code[index]
}) //document 

} //init
// keep track of index outside of the event handler
 
// unattached event handler


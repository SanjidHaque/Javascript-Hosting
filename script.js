var div = '<div>Angular</div>'


function callConfirmBox () {
  if (confirm("Press a button")) {

    txt = "You pressed OK!";
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "Click Me";                   // Insert text
    document.body.appendChild(btn);   
  
  } else {
    txt = "You pressed Cancel!";
  }
}

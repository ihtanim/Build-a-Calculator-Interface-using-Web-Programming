function calculate(x) {
    form.display.value = form.display.value + x;
}


var backspace = function() {
          
    var imam = document.getElementById('back').value;
    document.getElementById('back').value=imam.substring(0,imam.length -1);
  
  }
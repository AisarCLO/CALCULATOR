let string = "";
let lastInput = "";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
      if(e.target.innerHTML == '='){
        try {
          string = eval(string);
        } catch (error) {
          string = 'ERROR!';
        }
        document.querySelector('input').value=string;
      } else if(e.target.innerHTML == 'AC'){
        string = "";
        document.querySelector('input').value=string;
      } else if(e.target.innerHTML == 'DEL'){
        string = string.slice(0,-1);
        document.querySelector('input').value=string;
    }
      else{
       if (['+', '-', '*', '/'].includes(e.target.innerHTML) && ['+', '-', '*', '/'].includes(lastInput)) {
         string = 'ERROR!';
       } else {
         string = string + e.target.innerHTML;
       }
       document.querySelector('input').value = string;
       lastInput = e.target.innerHTML;
    }})
})

if (string === '') {
  document.querySelector('input').value = '0';
}

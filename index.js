let input= document.getElementById('enter');
let buttons = document.querySelectorAll('button');

let string= "";
const arr= Array.from(buttons);
console.log(arr);
arr.forEach((button) => {
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '='){
        string = eval(string);
        input.value= string;
    }
    else if(e.target.innerHTML== 'C'){
        string=" ";
        input.value= string;
    }
    else if(e.target.innerHTML== "DEL")
    {
        string= string.substring(0,string.length-1);
        input.value= string;
    }
    else{
    string+= e.target.innerHTML;
    input.value= string;
    }
  })
}
)
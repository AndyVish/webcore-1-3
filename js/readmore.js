
let MORE = "Читать далее";
let LESS = "Свернуть";
let checkbox = document.querySelector('#readmore__input');
let con = document.querySelector('#con-mod');
let span = document.querySelector('.readmore__span');
let img = document.querySelector('.readmore__img');

function show(arg)
{
    console.log(arg);
}

show(checkbox);
checkbox.addEventListener('change', function() {
    
    if (this.checked) {
      con.className = "readmore__content--mod";
      span.textContent = LESS;
      img.className = "readmore__img--up"; 
      show("down - " + img.style.className);
    } else {
  con.className = "readmore__content";
    span.textContent = MORE;
      img.className = "readmore__img--down";
      show("up - " + img.style.className);
    }
  });
document.addEventListener('DOMContentLoaded', function(){ 
    
    var burger_btn = document.getElementById("burger")
    var navMenu = document.getElementById("burger_list")
    burger_btn.onclick = function(event){        
        burger_btn.classList.toggle("active")
        navMenu.classList.toggle("active")
    }
    
    var coworking_map = document.getElementById("open_1969")
    var map = document.getElementById("map_block")
    var popUp = document.getElementById("pop_up")

    coworking_map.onclick = function(event){        
        map.classList.add("active")
    }

    var crossesAll = document.getElementsByClassName("cross_btn")
    crossesAll[0].onclick = notActive
    crossesAll[1].onclick = notActive

    function notActive(event){
      map.classList.remove("active")
      popUp.classList.remove("active")
    }
       
    
})

// function inputFocus(event){
//   event.target.value = "+38(0__)___-__-__"  
//   setCaretPosition(event.target, 5)

// }

// function setCaretPosition(ctrl, pos) {
//   // Modern browsers
//   if (ctrl.setSelectionRange) {
//     ctrl.focus();
//     ctrl.setSelectionRange(pos, pos);

//   // IE8 and below
//   } else if (ctrl.createTextRange) {
//     var range = ctrl.createTextRange();
//     range.collapse(true);
//     range.moveEnd('character', pos);
//     range.moveStart('character', pos);
//     range.select();
//   }
// }

// function getNumbers(event){
//   var form = event.target.closest('form');
//   var inputPhone = form.querySelector('input[type="tel"]')
//   var newValue = inputPhone.value.split("")
//   var currentSymbol = newValue.indexOf("_")
//   setCaretPosition(inputPhone, currentSymbol)
//   if(event.charCode >= 48 && event.charCode <= 57 && newValue.length === inputPhone.maxLength){             
//       newValue[currentSymbol] = event.key
//       inputPhone.value = newValue.join("")
//   }
// }

function validateForm(event){
  event.preventDefault()      
  var form = event.target.closest('form');
  var inputName = form.querySelector('input[type="text"]')
  var inputPhone = form.querySelector('input[type="tel"]') 
  var popUp = document.getElementById("pop_up")   
  if(inputName.value && inputPhone.value){
    popUp.classList.add("active")
    inputName.placeholder = "Your name"
    inputPhone.placeholder = "Your phone number"
    inputName.value = null
    inputPhone.value = null
    inputName.style = `
      box-shadow: 0 0 10px rgba(95,29,31,1);
    `
    inputPhone.style = `
        box-shadow: 0 0 10px rgba(95,29,31,1);
      `

  } else {
    if(!inputName.value){
    inputName.placeholder = "Please, enter your name"
    inputName.style = `
      box-shadow: 0 0 10px rgba(193,27,53,1);
    `    
    } 
    if(!inputPhone.value){
      inputPhone.value = null
      inputPhone.placeholder = "Please, enter your phone number"
      inputPhone.style = `
        box-shadow: 0 0 10px rgba(193,27,53,1);
      `
    }        
  }      
}



/*
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});
*/
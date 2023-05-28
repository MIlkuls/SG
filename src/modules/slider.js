const wrapper = document.querySelector('.wrapper_gallery')
let pageWidth = document.documentElement.clientWidth;

let src = 'photo1.jfif'
let counter = 0

if(counter === 0){
   src = 'photo1.jfif'
}
if(counter === 1){
   src = 'photo2.jfif'
}
if(counter === 2){
   src = 'photo3.jfif'
}

function next(){
    if(counter !== 2){
        counter++
    }else counter = 0
}
function prev(){
    if(counter !== 0){
        counter+= -1
    }else counter = 2
}


 wrapper.innerHTML = `
     <div>
   <img src = ${src} alt = 'photo'>
   <div>
      <button onclick='${next()}'>Вперёд</button>
      <button onclick='${prev()}'>Назад</button>
   </div>
 </div>
 `


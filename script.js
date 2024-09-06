const modal = document.querySelector('.modal')
const btnOpenModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function (){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for (let i = 0; i<btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener("click",openModal)
}
btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',function(e){
/* console.log(e.key) */
if (e.key==="Escape" && !modal.classList.contains('hidden')){
        closeModal()
    }
})














/* const modal = document.querySelector(".modal")
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal =  document.querySelectorAll('.show-modal')
console.log (btnOpenModal) */

/* const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
} */

/* for ( let i = 0;  i<btnOpenModal.length; i++ ){
    btnOpenModal[i].addEventListener('click',clicked);
    function clicked(){
        console.log("Button Clicked")
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden') */
        
       /* You can specify more classes with the comma but there's no dot like the queryselector you can add with the add button */
 /*    }
} */

/* btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}) */
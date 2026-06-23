const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    });
}, {
    threshold: 0.5,
})

let boxes = document.querySelectorAll('.box')
let blink = document.querySelector('.blink')

boxes.forEach(box => observer.observe(box));

const observer2 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting){
        entries[0].target.classList.add('alert')
    }
}, { threshold: 0.5})

observer2.observe(blink)


const modalParent = document.querySelector('.modal-parent')
const showModal = document.querySelector('#showModal')
const closeModal = document.querySelector('#closeModal')

modalParent.addEventListener('click', e => {
    if (webkitURL.target == modalParent){
        modalParent.style.display='none';
    }
})
closeModal.addEventListener('click', () => modalParent.style.dispaly="none")
showModal.addEventListener('click', () => modalParent.style.display="grid")
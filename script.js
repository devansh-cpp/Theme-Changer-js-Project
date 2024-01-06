const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (btn){
    btn.addEventListener('click',function(e) {
        console.log(e.target);
        if(e.target.id==='orange'){
            document.body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='green'){
            document.body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow'){
            document.body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='grey'){
            document.body.style.backgroundColor=e.target.id
        }
        
    })
})
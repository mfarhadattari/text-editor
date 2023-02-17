const textArea = document.getElementById('text-area') ;

document.getElementById('bold').addEventListener('click',function(){
    textArea.classList.add('font-bold') ;
})

document.getElementById('un-bold').addEventListener('click',function(){
    textArea.classList.remove('font-bold') ;
})


document.getElementById('italic').addEventListener('click' , function(){
    textArea.classList.add('italic');
})

document.getElementById('un-italic').addEventListener('click' , function(){
    textArea.classList.remove('italic');
})
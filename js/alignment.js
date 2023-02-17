function deactivateBgColor(id1,id2,id3,id4){
    document.getElementById(id1).classList.add('bg-slate-500') ;
    document.getElementById(id2).classList.remove('bg-slate-500') ;
    document.getElementById(id3).classList.remove('bg-slate-500') ;
    document.getElementById(id4).classList.remove('bg-slate-500') ;
}

document.getElementById('align-left-active').addEventListener('click', function(){
    textArea.classList.add('text-left') ;
    textArea.classList.remove('text-center' , 'text-justify', 'text-right') ;
    deactivateBgColor('align-left-active','align-center-active','align-justify-active' , 'align-right-active')
})

document.getElementById('align-center-active').addEventListener('click', function(){
    textArea.classList.add('text-center') ;
    textArea.classList.remove('text-left', 'text-justify', 'text-right') ;
    deactivateBgColor('align-center-active','align-left-active','align-justify-active' , 'align-right-active')
})

document.getElementById('align-justify-active').addEventListener('click', function(){
    textArea.classList.add('text-justify') ;
    textArea.classList.remove('text-center' , 'text-left', 'text-right');
    deactivateBgColor('align-justify-active','align-center-active','align-left-active' , 'align-right-active') ;
})


document.getElementById('align-right-active').addEventListener('click', function(){
    textArea.classList.add('text-right') ;
    textArea.classList.remove('text-center' , 'text-left', 'text-justify') ;
    deactivateBgColor('align-right-active','align-center-active','align-justify-active' , 'align-left-active') ;
    
})


document.getElementById('align-center-deactivate').addEventListener('click', function(){
    textArea.classList.add('text-left') ;
    textArea.classList.remove('text-center' , 'text-justify', 'text-right') ;
    deactivateBgColor('align-left-active','align-center-active','align-justify-active' , 'align-right-active') ;
})


document.getElementById('align-justify-deactivate').addEventListener('click', function(){
    textArea.classList.add('text-left') ;
    textArea.classList.remove('text-center' , 'text-justify', 'text-right') ;
    deactivateBgColor('align-left-active','align-center-active','align-justify-active' , 'align-right-active') ;
})


document.getElementById('align-right-deactivate').addEventListener('click', function(){
    textArea.classList.add('text-left') ;
    textArea.classList.remove('text-center' , 'text-justify', 'text-right') ;
    deactivateBgColor('align-left-active','align-center-active','align-justify-active' , 'align-right-active')
})
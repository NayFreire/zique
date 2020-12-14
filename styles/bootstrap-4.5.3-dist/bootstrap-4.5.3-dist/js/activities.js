var i=0
var div = document.getElementsByClassName('divColActivity')

// for(i=0;i<4;i++){
    if(window.innerWidth<=460){
        div.classList.remove('justify-content-end')
        div.classList.add('justify-content-center')
    }
// }
alert(window.innerWidth)
var list = document.getElementsByClassName('button-location-information');

for (var i = 0; i < list.length; i++) {

    list[i].onclick = function() {
        this.nextElementSibling.classList.toggle('show');        
    }
}
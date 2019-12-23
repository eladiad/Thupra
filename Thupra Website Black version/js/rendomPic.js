
    var floatingImg = document.getElementById("floatingImg");
    var main__floating__img = document.getElementById('main__floating__img');
    var rendomNumberForFloatingImg = Math.floor(Math.random() * 3) + 1;
    floatingImg.src = 'img/Main Photo/Device-' + rendomNumberForFloatingImg + '.png';
    if(rendomNumberForFloatingImg == 2){
        main__floating__img.style.transform = 'rotate(400deg)';
    }
    else if(rendomNumberForFloatingImg == 3){
        main__floating__img.style.transform = 'rotate(30deg)';
    }
    else{
        
    }
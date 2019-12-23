function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('link-side-1').classList.add('slideInRight');
    document.getElementById('link-side-2').classList.add('slideInRight');
    document.getElementById('link-side-3').classList.add('slideInRight');
    document.getElementById('link-side-4').classList.add('slideInRight');
    document.getElementById('link-side-5').classList.add('slideInRight');
    document.getElementById('link-side-1').classList.add('animated');
    document.getElementById('link-side-2').classList.add('animated');
    document.getElementById('link-side-3').classList.add('animated');
    document.getElementById('link-side-4').classList.add('animated');
    document.getElementById('link-side-5').classList.add('animated');
    document.getElementById('thupraGrid').style.marginLeft = '-250px';
    document.getElementById('header').style.marginLeft = '250px';
    document.getElementById('Side').style.width = '100vw';
    document.getElementById('nav-icon').style.opacity = '0';
}
function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('link-side-1').classList.remove('slideInRight');
    document.getElementById('link-side-2').classList.remove('slideInRight');
    document.getElementById('link-side-3').classList.remove('slideInRight');
    document.getElementById('link-side-4').classList.remove('slideInRight');
    document.getElementById('link-side-5').classList.remove('slideInRight');
    document.getElementById('thupraGrid').style.marginLeft = '0';
    document.getElementById('header').style.marginLeft = '0';
    document.getElementById('Side').style.width = '0';
    document.getElementById('nav-icon').style.opacity = '1';
    $('#nav-icon').toggleClass('open');
}
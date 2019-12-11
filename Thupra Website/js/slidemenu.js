function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('thupraGrid').style.marginLeft = '-250px';
    document.getElementById('header').style.marginLeft = '250px';
    document.getElementById('Side').style.width = '100vw';
    document.getElementById('nav-icon').style.display = 'none';
}
function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('thupraGrid').style.marginLeft = '0';
    document.getElementById('header').style.marginLeft = '0';
    document.getElementById('Side').style.width = '0';
    document.getElementById('nav-icon').style.display = 'block';
    $('#nav-icon').toggleClass('open');
}
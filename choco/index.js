// LOADER

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 4000);
}

function showPage() {
        document.getElementById("load").style.display = "none";
        document.getElementById("mainBod").style.display = "block";
}

// FULLPAGE

var myFullpage = new fullpage('#fullpage', {
    navigation: false,
    scrollOverflow: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About Me', 'Skills', 'Works', 'Contact'],
    css3: false
});

// SIDENAV 
function openNav(){
    document.getElementById("sidenav").style.width="100%";
}
function closeNav () {
    document.getElementById("sidenav").style.width="0";
}
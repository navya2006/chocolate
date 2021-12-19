// LOADER

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
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

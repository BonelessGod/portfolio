function tabSystem(evt, tab) {
    let i, tabcontent, links;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("header__navbar-link");
    for (i = 0; i < tablinks.lenght; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tab).style.display = "flex";
    evt.currentTarget.className += " active";
}
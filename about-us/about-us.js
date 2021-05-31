/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

const chooseLanguage = () => {
    const navbarDropdown = document.querySelector("#navbarDropdown");
    const languages = document.querySelector("#language");

    languages.addEventListener("click", (e) => {
        navbarDropdown.innerText = `${e.target.innerText}`
        localStorage.setItem('language', JSON.stringify(navbarDropdown.innerText))
    });
}

const checkLanguage = () => {
    const lang = JSON.parse(localStorage.getItem('language'))
    const navbarDropdown = document.querySelector("#navbarDropdown");
    if(lang){
        navbarDropdown.innerText = `${lang}`
    }else{
        navbarDropdown.innerText = `RU`
    }
}

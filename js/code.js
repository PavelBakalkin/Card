const goToPrices = () => {
  document.location.assign('prices/prices.html')
}

/* Open */
function openNav() {
  debugger
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  debugger
  document.getElementById("myNav").style.height = "0%";
}

const checkLanguage = () => {
  const lang = JSON.parse(localStorage.getItem('language'))
  const navbarDropdown = document.querySelector("#navbarDropdown");
  if (lang) {
    navbarDropdown.innerText = `${lang}`
  } else {
    navbarDropdown.innerText = `RU`
  }
}

const chooseLanguage = () => {
  const navbarDropdown = document.querySelector("#navbarDropdown");
  const languages = document.querySelector("#language");

  languages.addEventListener("click", (e) => {
    navbarDropdown.innerText = `${e.target.innerText}`
    localStorage.setItem('language', JSON.stringify(navbarDropdown.innerText))
  });
}

const navItem = document.getElementsByClassName("navbar__item")

for(let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', () => {
    for(let j = 0; j < navItem.length; j++) {
      navItem[j].classList.remove("active")
    }
    navItem[i].classList.add("active")
    console.log(navItem[i]);
  })
}

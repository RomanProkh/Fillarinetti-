/*kirjautumis sisään näppin tarkistus*/

function checkinputs() {
  let user = document.getElementById('user_input').value
  let salasana = document.getElementById('salasana_input').value
  if (user != '' && user != null) {
    document.getElementById('user_input').style.borderColor = 'white'
  } else {
    alert(
      'käyttäjä tunnus puuttuu jos et ole rekisteröitynyt, niin Rekisteröidy '
    )
    document.getElementById('user_input').style.borderColor = 'red'

    return false
  }
  if (salasana != '' && salasana != null) {
    return true
  } else {
    alert('Salasana puuttuu')
    document.getElementById('salasana_input').style.borderColor = 'red'
    return false
  }
}
/*-----------------------osta(ostos)näppi--------------------------*/
/* Hampurilaismenun avaus/sulkeminen */

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

let open = false
const toggleBtn = () => {
  if (!open) {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
  } else {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  }
  open = !open
}
hamburger.addEventListener('click', toggleBtn)

/* Logon näyttäminen */
const logo = document.querySelector('.nav-logo')
function displayLogo() {
  let y = window.scrollY
  if (y < 150) {
    logo.style.display = 'block'
  } else if (y > 150) {
    logo.classList.remove('none')
  } else {
    logo.className = 'none'
  }
}
window.addEventListener('scroll', displayLogo)

/*Collapsible/slide down juttu*/
var coll = document.getElementsByClassName('collapsible')
var i
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var content = this.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}

/* Kun käyttäjä scrollaa alaspäin, headerin koko muuttuuu. Intersection observer API */
const header = document.querySelector('header')
const sectionOnMainPage = document.querySelector(
  '.pre-header-section-main-page'
)
const sectionEverywhereElse = document.querySelector('.pre-header-section')
let options = {}
if (sectionOnMainPage === null) {
  options = {
    rootMargin: '-50px 0px 0px 0px'
  }
  createObserver(sectionEverywhereElse, options)
} else {
  options = {
    rootMargin: '-130px 0px 0px 0px'
  }
  createObserver(sectionOnMainPage, options)
}
function createObserver(toObserve, options) {
  const sectionObserver = new IntersectionObserver(function (
    entries,
    sectionObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add('navbar-scrolled')
      } else {
        header.classList.remove('navbar-scrolled')
      }
    })
  },
  options)
  sectionObserver.observe(toObserve)
}

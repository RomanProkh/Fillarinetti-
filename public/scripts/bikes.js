/* JSON styled hardcoded values for bikes */

const bikes = [
  {
    id: '1',
    name: 'Ville Vainio',
    num: '04516160065',
    brand: 'BMX',
    model: 'BMX 1.0.0',
    type: 'temppu',
    price: 123,
    image: './images/download.jpg',
    link: './bike1.html'
  },
  {
    id: '2',
    name: 'Seppo Kinnunen',
    num: '04503244065',
    brand: 'Serious',
    model: 'Rockville Disc 27.5',
    type: 'tasamaa',
    price: 249,
    image: './images/download (1).jpg',
    link: './bike2.html'
  },
  {
    id: '3',
    name: 'Adam Stevens',
    num: '0452464265',
    brand: 'Serious',
    model: 'Rockville Disc 27.5',
    type: 'tasamaa',
    price: 199,
    image: './images/download (2).jpg',
    link: './bike3.html'
  },
  {
    id: '4',
    name: 'Bart Simpson',
    num: '04524466045',
    brand: 'Vermont',
    model: 'Saphire 7-vaihteinen',
    type: 'city',
    price: 199,
    image: './images/download (3).jpg',
    link: './bike4.html'
  },
  {
    id: '5',
    name: 'Kurt Lindström',
    num: '04542244213',
    brand: 'Vermont',
    model: 'Saphire 7-vaihteinen',
    type: 'city',
    price: 199,
    image: './images/images (1).jpg',
    link: './bike5.html'
  },
  {
    id: '6',
    name: 'Aila Hovinen',
    num: '04142400654',
    brand: 'Tunturi',
    model: 'Tunturi Kaunotar',
    type: 'city',
    price: 120,
    image: './images/images (2).jpg',
    link: './bike6.html'
  },
  {
    id: '7',
    name: 'Marja Jaakkola',
    num: '0454660065',
    brand: 'Raketti',
    model: 'mummopyörä',
    type: 'city',
    price: 100,
    image: './images/images (3).jpg',
    link: './bike7.html'
  },
  {
    id: '8',
    name: 'Jukka Pelkonen',
    num: '0505600660',
    brand: 'Jupiter',
    model: 'Venus',
    type: 'city',
    price: 120,
    image: './images/images (2).jpg',
    link: './bike6.html'
  },
  {
    id: '9',
    name: 'Jyrki Otila',
    num: '0454660065',
    brand: 'Cresent',
    model: 'mummopyörä',
    type: 'city',
    price: 40,
    image: './images/bike8.jpg',
    link: './bike7.html'
  },
  {
    id: '10',
    name: 'Jorma Kalevi',
    num: '0416645490',
    brand: 'Helkama',
    model: 'Kulkuri',
    type: 'city',
    price: 123,
    image: './images/bike1.jpg',
    link: './bike1.html'
  },
  {
    id: '11',
    name: 'Ville Vainio',
    num: '04516160065',
    brand: 'Tunturi',
    model: 'Muu malli',
    type: 'maasto',
    price: 30,
    image: './images/bike2.jpg',
    link: './bike1.html'
  },
  {
    id: '12',
    name: 'Usko Toivonen',
    num: '04503244065',
    brand: 'Bianchi',
    model: 'Roma',
    type: 'kilpa',
    price: 1249,
    image: './images/bike3.jpg',
    link: './bike2.html'
  },
  {
    id: '13',
    name: 'Riina Nieminen',
    num: '04449494497',
    brand: 'Nisihiki',
    model: 'mtb',
    type: 'maasto',
    price: 199,
    image: './images/bike4.jpg',
    link: './bike3.html'
  },
  {
    id: '14',
    name: 'Mikko Mallikas',
    num: '04524466045',
    brand: 'Tunturi',
    model: 'Pony',
    type: 'city',
    price: 199,
    image: './images/bike5.jpg',
    link: './bike4.html'
  },
  {
    id: '15',
    name: 'Miika Niemi',
    num: '04542244213',
    brand: 'Scott',
    model: 'MTB',
    type: 'maasto',
    price: 40,
    image: './images/bike6.jpg',
    link: './bike5.html'
  },
  {
    id: '16',
    name: 'Toni Nieminen',
    num: '04142400654',
    brand: 'Tunturi',
    model: 'Diana',
    type: 'city',
    price: 20,
    image: './images/bike7.jpg',
    link: './bike6.html'
  }
]

/* Funktio joka tulostaa sivulle html-sisällön pyöristä */
function showBikes(data) {
  /* haetaan row-elementti */
  const row = document.getElementById('row')
  /* Ennen funktion läpikäymistä tyhjennetään elementti*/
  row.innerHTML = ''
  /* Käydään läpi pyörät ja asetetaan ne luotuihin elementteihin */
  data.forEach((bike) => {
    const colDiv = document.createElement('div')
    colDiv.classList.add('col')
    /* Pyörän eri arvot */
    const { brand, image, model, name, link, num } = bike
    colDiv.innerHTML = `
    <div class='card'>
    <figure>
    <h3>${brand}</h3>
    <img class='bike_img' src='${image}'>
    <div class='info_field'>
    </figure>
    <figcaption>
    <h5>${model}</h5>
    </figcaption>
    <p class='contact'>${name}</p>
    <a class='card-btn' href='${link}'>Soita ${num} </a>
    </div>
    `
    /*lisätään lopuksi arvot rivielementtiin  */
    row.appendChild(colDiv)
  })
}
/* haetaan input#search, .src-btn ja form elementit, jotta tapahtumankäsittelijä toimii klikkauksella ja näppäimistön enterillä */
const search = document.getElementById('search')
const btn = document.querySelector('.src-btn')
const form = document.getElementById('form')

const filterBikes = (e) => {
  e.preventDefault()
  const searchTerm = search.value
  console.log(searchTerm)
  if (searchTerm) {
    const filterBikes = bikes.filter((bike) =>
      bike.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    showBikes(filterBikes)
    disable_content()
  } else {
    bikeContent.innerText = 'Error onloading bikes'
  }
}
/* tapahtumankäsittelijä kuuntelee klikkausta */
btn.addEventListener('click', filterBikes)
form.addEventListener('submit', filterBikes)
showBikes(bikes)

/* Yritin tehda funktion joka palauttaa etusivulle vain 6 fillaria */
/* const getBikes = () => {
  showBikes(bikes.splice(0, 6))
}
const body = document.getElementById('body')

body.addEventListener('load', getBikes) */

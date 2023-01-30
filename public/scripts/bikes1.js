//ei  löytyny sopivaa apia tähän projektiin, joten hardkoodasimme, luomalla javascript-taulukon, jonka avulla luotiin elementti html-sivuille
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
    name: 'Markus Rokka',
    num: '0504660065',
    brand: 'Munamankeli',
    model: 'tappisatula',
    type: 'city',
    price: 100,
    image: './images/images (3).jpg',
    link: './bike7.html'
  },
  {
    id: '10',
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
    id: '11',
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
    id: '12',
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
    id: '13',
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
    id: '14',
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
    id: '15',
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
    id: '16',
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
    id: '17',
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
    id: '18',
    name: 'Jukka Pelkonen',
    num: '0505600660',
    brand: 'Jupiter',
    model: 'Venus',
    type: 'city',
    price: 120,
    image: './images/images (2).jpg',
    link: './bike6.html'
  }
]

//haetaan bikes elemetti
const bikeContent = document.getElementById('bikes')
function showBikes(data) {
  //luodaan div-elementti riville
  const rowDiv = document.createElement('div')
  //rivi-elementin luokkanimi
  rowDiv.className = 'row'
  //const redirect = window.location.href

  //try-catch bikes arrayn lapi kaymiseen
  try {
    //kaydaan taulukko lapi jokaisen objectin lapi
    data.map(function (bike) {
      //tulostetaan konsoliin kaikki objektit
      console.log(bike)
      //brand -- merkki
      const brand = bike.brand
      //model -- malli
      const model = bike.model
      //price -- hinta
      const price = bike.price
      //image -- kuva
      const image = bike.image
      // const link = bike.url
      const contact = bike.name
      //const id = bike.id
      const type = bike.type
      const link = bike.link

      bikeContent.appendChild(rowDiv)
      //liitetaan rivi-elementti bikes-elementtin
      const colDiv = document.createElement('div')
      //luodaan div-elementti columnille, jonka luokkanimi on col
      colDiv.className = 'col'
      rowDiv.appendChild(colDiv)
      const cycleCardDiv = document.createElement('div')
      cycleCardDiv.className = 'card'
      colDiv.appendChild(cycleCardDiv)
      const figure = document.createElement('figure')
      cycleCardDiv.appendChild(figure)
      const imgTag = document.createElement('img')
      imgTag.className = 'bike_img'
      imgTag.src = image
      figure.appendChild(imgTag)
      const textField = document.createElement('div')
      textField.className = 'info_field'
      cycleCardDiv.appendChild(textField)
      const figcaption = document.createElement('figcaption')
      figcaption.textContent = brand
      const bikeModel = document.createElement('h5')
      bikeModel.append(model + ', ' + type)
      const h3 = document.createElement('h3')
      h3.append(price + ' € ')
      const p = document.createElement('p')
      p.className = 'contact'
      p.append(contact)
      const btn = document.createElement('a')
      btn.className = 'card-btn'
      btn.href = link
      let call = 'Soita'
      btn.append(call + ' ' + bike.num)
      cycleCardDiv.appendChild(textField)
      figure.appendChild(figcaption)
      textField.appendChild(bikeModel)
      cycleCardDiv.append(p)
      textField.appendChild(h3)
      cycleCardDiv.append(btn)
    })
  } catch (error) {
    console.log(error)
  }
}

showBikes(bikes.splice(0, 5))

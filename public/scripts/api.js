/* kommentit palautteisiin */

const feedback = [
  'Fillarinetin kautta sain myytyä pyöräni ennätysajassa',
  'Ostin itselleni melkein uuden italialaisen merkkipyörän puoleen hintaan.',
  'Vaihdoin laatu maastopyöräni sähköpyörään.',
  'Löysin fillarinetin kautta vanhan italialaisen Bianchin',
  'Kaikille lapsille löytyi kerralla pyörät',
  'Kaupankäynti sujui mainiosti',
  'Vanhat suomalaiset merkkipyörät saavat jatkoaikaa palvelun avulla',
  'Maastopyörään löytyi varaosat kerralla',
  'Sain myytyä rikkinäisen pyöräni varaosana'
]
/* random funktio kommentteja varten */
function getFeeds() {
  for (let i = 0; i < feedback.length; i++) {
    console.log(feedback)
    const j = Math.floor(Math.random() * (i + 1))
    const temp = feedback[i]
    feedback[i] = feedback[j]
    feedback[j] = temp
    console.log(feedback)
  }
}
/* hae id johon tulostetaan */
const result = document.getElementById('result')
/* Listaa tarvittavat tiedot */
const listItems = []

/* Hae data randomuser apista */
async function getData() {
  const res = await fetch('https://randomuser.me/api?results=3')

  const { results } = await res.json()

  /* Hae palautteet satunnaisessa järjestyksessä,koska apista ei löytynyt sellaista vaihtoehto kuin pyöriin liittyvät kommentit
   */
  getFeeds()
  // Clear result
  results.innerHTML = ''

  /* listaa käyttäjien tiedot ja kommentit profile-cardiin */
  results.forEach((user, i) => {
    const div = document.createElement('div')
    div.classList.add('col')

    listItems.push(div)

    div.innerHTML = `
            <div class="profile_card">
                <div class="user_profile">
                <img  class="profile" src="${user.picture.large}" alt="${user.name.first}">
                <h5>${user.name.first} ${user.name.last}
                <span>${user.location.city}, ${user.location.country}</span>
                </h5>
                </div>
                <div class="user_info">
                <h4><i class="fas fa-quote-left"></i>${feedback[i]}<i class="fas fa-quote-right"></i></h4>
            </div>
            </div>
        `
    result.appendChild(div)
    /* Lisää tiedot  profile cardiin  */
  })
}
/* Kutsu funktiota */
getData()

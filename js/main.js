const mainImage = document.getElementById('main-image')
const cards = document.getElementById('cards')

const url = 'https://api.waifu.pics/sfw/waifu'
const urlNSFW = 'https://api.waifu.pics/nsfw/waifu'

const renderImage = (url) => {
  fetch(url).then(res => res.json()).then(res => {
    mainImage.setAttribute('src', res.url)
  }
}

cards.addEventListener('click', el => {
  if (el.target.id == 'gacha') {
    renderImage(url)
  } else if (el.target.id == 'nsfw') {
    renderImage(urlNSFW)
  }
})

const mainImage = document.getElementById('main-image')
const cards = document.getElementById('cards')

const renderImage = target => {
  fetch(`https://api.waifu.pics/${target}/waifu`).then(res => res.json()).then(res => {
    mainImage.setAttribute('src',  res.url)
  }
}

cards.addEventListener('click', el => {
  if (el.target.id == 'sfw') {
    renderImage(el.target.id)
  } else if (el.target.id == 'nsfw') {
    renderImage(el.target.id)
  }
})

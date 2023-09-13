const linksMenu = document.querySelector('.links-menu')
const close_menu = document.querySelector('.close_menu')
const open_menu = document.querySelector('.open_menu')

open_menu.addEventListener('click', () => {
  linksMenu.style.display = 'block'
})

close_menu.addEventListener('click', () => {
  linksMenu.style.display = 'none'
})

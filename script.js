const linksMenu = document.querySelector('.links-menu')
const close_menu = document.querySelector('.close_menu')
const open_menu = document.querySelector('.open_menu')

open_menu.addEventListener('click', () => {
  linksMenu.classList.remove('no_show')
  linksMenu.classList.add('show')
})

close_menu.addEventListener('click', () => {
  linksMenu.classList.remove('show')
  linksMenu.classList.add('no_show')
})

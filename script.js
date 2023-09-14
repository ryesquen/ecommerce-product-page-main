const links_menu = document.querySelector('.links_menu')
const close_menu = document.querySelector('.close_menu')
const open_menu = document.querySelector('.open_menu')

open_menu.addEventListener('click', () => {
  links_menu.classList.remove('no_show')
  links_menu.classList.add('show')
})

close_menu.addEventListener('click', () => {
  links_menu.classList.remove('show')
  links_menu.classList.add('no_show')
})

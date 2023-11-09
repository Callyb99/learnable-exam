"use script";

const calebNav = document.querySelector('.caleb')
const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.open')
const closeMenu = document.querySelector('.close')

const openNav = function() {
  closeMenu.classList.remove('hidden')
  menuOpen.classList.add('hidden')
  calebNav.classList.add('nav-open')
}

const closeNav = function() {
  closeMenu.classList.add('hidden')
  menuOpen.classList.remove('hidden')
  calebNav.classList.remove('nav-open')
}

menu.addEventListener('click', function(menu){
  menu = closeMenu.classList.contains('hidden') ? openNav() : closeNav()
})
'use strict';

window.onload = function () {


  
  let toast = {
    element: document.getElementById('toast'),
    init: function init () {
      return setTimeout(function () {
        toast.element.classList.add('show')
        return setTimeout(function () {
          toast.element.classList.remove('show')
        }, 6000);
      }, 500);
    }
  }
  
  toast.init()

  let scroll = {
    elements: document.getElementsByClassName('scroll-to'),
    scrollTo: function scrollTo(event) {
      let sidebar = document.getElementById('sidebar')
      let menuButton = document.getElementById('menuButton')
      let element = event.target
      let location = element.getAttribute('data');
      let targetElement = document.getElementById(location);
      let elemPosition = targetElement.getBoundingClientRect().top
      let offset = window.scrollY + elemPosition;

      elemPosition ===  0 ? null : window.scroll({
        top: offset,
        behavior: 'smooth'
      })
      sidebar.classList.remove('open')
      clearTimeout(window.timer)
      return menuButton.classList.remove('open')
    },
    toTop: function toTop () {
      let element = document.getElementById('toTop')
      window.onscroll = function () {
        return window.scrollY < 150 ? element.style.opacity = 0 : element.style.opacity = '.75'
      }
      return element.addEventListener('click',function () {
        return window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      })
    },
    init: function init () {
      scroll.toTop()
      for (let i = 0; i < scroll.elements.length; i++) {
        let element = scroll.elements[i];
        element.addEventListener('click', scroll.scrollTo)
      }
    }
  }
  scroll.init()

  let openSidebar = {
    toggle: function toggle (event) {
      let sidebar = document.getElementById('sidebar')
      let menuButoon = document.getElementById('menuButton')

      if (sidebar.classList.length === 0) {
        sidebar.classList.add('open')
        menuButton.classList.add('open')
        window.timer = setTimeout(function () {
          sidebar.classList.remove('open')
          menuButton.classList.remove('open')
        }, 3000)
      } else {
        clearTimeout(window.timer)
        menuButoon.classList.remove('open')
        return sidebar.classList.remove('open')
      }
    },
    init: function init() {
      let button = document.getElementById('menuButton')
      return button.addEventListener('click', openSidebar.toggle)
    }
  }
  openSidebar.init()
}


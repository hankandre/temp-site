'use strict';

(function (window) {
  window.onload = function () {
    
    let toast = {
      element: document.getElementById('toast'),
      init: function init () {
        setTimeout(function () {
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
        let element = event.target
        let location = element.getAttribute('data')
        let targetElement = document.getElementById(location)
        let elemRect = targetElement.getBoundingClientRect();
        

        return window.scroll(0, elemRect.top)
      },
      toTop: function toTop () {
        let element = document.getElementById('toTop')
        element.addEventListener('click',function () {
          return window.scroll(0, 0)
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
        return sidebar.classList.length === 0 ? sidebar.classList.add('open') : sidebar.classList.remove('open')
      },
      init: function init() {
        let button = document.getElementById('menuButton')
        return button.addEventListener('click', openSidebar.toggle)
      }
    }
    openSidebar.init()
  }
})(window)


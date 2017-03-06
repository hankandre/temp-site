'use strict';

(function (window) {
  
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
      goTo: function goTo (event) {
        let sidebar = openSidebar.element
        let menuButton = document.getElementById('menuButton')
        let element = event.target
        let destination = `#${element.text.toLowerCase()}`
        location.href = destination
        
        sidebar.classList.remove('open')
        menuButton.classList.remove('open')

        return clearTimeout(window.timer)
      },
      toTop: function toTop () {
        let element = document.getElementById('toTop')
        window.onscroll = function () {
          return window.scrollY < 150 ? element.style.opacity = 0 : element.style.opacity = '.75'
        }
      },
      applyListeners: function applyListeners () {
        let elements = document.getElementsByClassName('scroll-to');

        for (let i = 0; i < elements.length; i++) {
          let element = elements[i];
          element.addEventListener('click', scroll.goTo)
        }
        return
      },
      init: function init () {
        scroll.toTop()
        scroll.applyListeners()
      }
    }
    scroll.init()

    let openSidebar = {
      element: document.getElementById('sidebar'),
      toggle: function toggle (event) {
        let sidebar = openSidebar.element
        let menuButton = document.getElementById('menuButton')

        if (sidebar.classList.length === 0) {
          sidebar.classList.add('open')
          menuButton.classList.add('open')
          window.timer = setTimeout(function () {
            sidebar.classList.remove('open')
            menuButton.classList.remove('open')
          }, 3000)
        } else {
          clearTimeout(window.timer)
          menuButton.classList.remove('open')
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

  let graph = {
    element: document.getElementById('skillsGraph'),
    data: [
      { axis: 'jQuery', value: 0.75 },
      { axis: 'Angular 1.x', value: 0.9 },
      { axis: 'Vue.js', value: 0.75 },
      { axis: 'React', value: 0.6 },
      { axis: 'd3', value: 0.25 },
      { axis: 'webpack', value: 0.8 },
      { axis: 'gulp', value: 0.8 },
      { axis: 'grunt', value: 0.25 },
      { axis: 'Mocha', value: 0.5 },
      { axis: 'Karma', value: 0.5 },
      { axis: 'Sass', value: 0.75 },
      { axis: 'Jest', value: 0.5 }
    ],
    draw: function draw () {
      let parentSize = graph.element.parentNode.getBoundingClientRect()
      console.log(parentSize);

      let color = d3.scale.ordinal()
				.range(["#EDC951","#CC333F","#00A0B0"]);
      


      let mycfg = {
        w: parentSize.width - 200,
        h: 400,
        maxValue: 0.9,
        levels: 6,
        roundStrokes: true,
        color: color
      }

      RadarChart(graph.element, graph.data, mycfg)
      
    },
    init: function init () {
      graph.draw()
    }
  }
  graph.init()


})(window)



'use strict'

window.onload = function () {
  let toast = document.getElementById('toast')
  
  setTimeout(function() {
    toast.classList.add('show')
    return setTimeout(function() {
      toast.classList.remove('show')
    }, 6000);
  }, 500);
}

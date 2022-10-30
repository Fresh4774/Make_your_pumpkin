const jack = document.querySelector('#jack_container')
const features = document.querySelectorAll('.pumpkin')

function updatePumpkin(e) {  
  var feature = e.target,
      f_src = feature.src,
      f_type = feature.parentElement.classList[1]

  if(feature.classList.contains('pumpkin')) {
    document.getElementById(f_type).style.backgroundImage = 'url('+f_src+')'
  }
}

jack.addEventListener('click', updatePumpkin)

function reset_pumpkin(){
  let imgs = document.querySelectorAll('.pumpkin_feature')
  imgs.forEach(function(elm){
    elm.style = ''
  })
}
document.querySelector('#reset_pumpkin').addEventListener('click', reset_pumpkin)
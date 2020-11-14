
document.addEventListener('DOMContentLoaded', function () {
  const copyPromoCode = document.querySelector('.js-promo-code')
  const parallaxScene = document.querySelector('.js-parallax')

  const pictureBgFront = document.querySelector('.js-front')
  const pictureBgBack = document.querySelector('.js-back')
  const witcher = document.querySelector('.js-middle')

  copyPromoCode.addEventListener('click', copy)
  parallaxScene.addEventListener('mousemove', mouseMoveHandler)
  parallaxScene.addEventListener('mouseleave', mouseLeaveHandler)

  function copy(e) {
    if (e.target.tagName == 'BUTTON') {
      const input = this.querySelector('input')
      input.select()
      document.execCommand('copy')
      this.classList.add('copied')
      setTimeout(() => this.classList.remove('copied'), 1000)
    }
  }

  function mouseMoveHandler(e) {
    pictureBgBack.style.transform  = `translate(${-e.offsetX*0.02}px, ${-e.offsetY*0.02}px)`
    witcher.style.transform        = `translate(${e.offsetX*0.04}px, ${e.offsetY*0.04}px)`
    pictureBgFront.style.transform = `translate(${e.offsetX*0.06}px, ${e.offsetY*0.06}px)`
  }

  function mouseLeaveHandler() {
    pictureBgBack.style.transform  = `translate(0px, 0px)`
    witcher.style.transform        = `translate(0px, 0px)`
    pictureBgFront.style.transform = `translate(0px, 0px)`
  }
})

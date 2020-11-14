
document.addEventListener('DOMContentLoaded', function () {
  const copyPromoCode = document.querySelector('.js-promo-code')

  copyPromoCode.addEventListener('click', copy)

  function copy(e) {
    if (e.target.tagName == 'BUTTON') {
      const input = this.querySelector('input')
      input.select()
      document.execCommand('copy')
      this.classList.add('copied')
      setTimeout(() => this.classList.remove('copied'), 1000)
    }
  }
})

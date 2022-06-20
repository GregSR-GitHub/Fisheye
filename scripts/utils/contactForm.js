class Form {
  constructor () {
    this.modal = document.getElementById('contact_modal')
    this.main = document.getElementById('main')
    this.buttonOpen = document.getElementById('contact_photographer')
    this.buttonClose = document.querySelector('.close_modal')
    this.buttonSend = document.querySelector('.submit_button')
    this.textControl = document.querySelectorAll('.text-control')
    this.form = document.querySelector('.modal_form')
    this.validMessage = document.querySelector('.valid-message')
    this.inputFirst = document.getElementById('first-name')
    this.inputLast = document.getElementById('last-name')
    this.inputEmail = document.getElementById('email')
    this.inputMessage = document.getElementById('your-message')
  }

  displayModal () {
    this.modal.style.display = 'flex'
    this.modal.setAttribute('aria-hidden', 'false')
    this.main.setAttribute('aria-hidden', 'true')
    document.body.classList.add('no-scroll')
    this.buttonClose.focus()
  }

  closeModal () {
    this.modal.style.display = 'none'
    this.modal.setAttribute('aria-hidden', 'true')
    this.main.setAttribute('aria-hidden', 'false')
    document.body.classList.remove('no-scroll')
    this.buttonOpen.focus()
  }

  setListeners () {
    const that = this
    // Listen Open modal button
    this.buttonOpen.addEventListener('click', function () {
      console.log('Open modal')
      contactForm.displayModal()
    })
    // Listen Close modal button
    this.buttonClose.addEventListener('click', function () {
      console.log('Close modal')
      contactForm.closeModal()
    })
    // Listen submit form button
    this.buttonSend.addEventListener('click', function () {
      console.log('Validation')
      contactForm.validate()
    })
    // Check form input
    this.textControl.forEach((btn) => btn.addEventListener('change', function () {
      console.log(btn)
      that.checkText(btn)
    }))
    // Close modal when escape key is pressed
    document.addEventListener('keydown', e => {
      const keyCode = e.keyCode ? e.keyCode : e.which
      if (this.modal.getAttribute('aria-hidden') === 'false' && keyCode === 27) {
        contactForm.closeModal()
      }
    })
  }

  checkText (testedInput) {
    let resultChek = testedInput.reportValidity()
    console.log('Test:' + resultChek)
    if (testedInput.value === '') {
      resultChek = false
    }
    if (resultChek) {
      testedInput.classList.remove('invalid-input')
    } else {
      testedInput.classList.add('invalid-input')
    }
    return resultChek
  }

  validate () {
    console.log('Testing all inputs:')
    event.preventDefault()

    // verify if all texts inputs are valid
    let invalidInput = 0
    this.textControl.forEach(e => {
      if (!this.checkText(e)) {
        invalidInput++
      }
    })
    // change modal if the form is valid
    if (invalidInput === 0) {
      this.form.style.display = 'none'
      this.validMessage.style.display = 'flex'
      console.log('First name: ' + this.inputFirst.value + ', Laste name: ' + this.inputLast.value + ', Email: ' + this.inputEmail.value + ', Message: ' + this.inputMessage.value + '.')
    } else {
      console.log(invalidInput + ' invalid(s) input(s)')
    }
  }
}

const contactForm = new Form()
contactForm.setListeners()

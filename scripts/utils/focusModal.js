const lightboxFocus = document.getElementById('lightbox')
const contactFormFocus = document.getElementById('contact_modal')
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
let currentModal = false

document.addEventListener('keydown', function (e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9

  if (lightboxFocus.getAttribute('aria-hidden') === 'false') {
    currentModal = document.querySelector('#lightbox') // select the modal by it's id
  } else if (contactFormFocus.getAttribute('aria-hidden') === 'false') {
    currentModal = document.querySelector('#contact_modal') // select the modal by it's id
  } else {
    currentModal = false
  }

  if (currentModal) {
    let firstFocusableElement = currentModal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
    let focusableContent = currentModal.querySelectorAll(focusableElements)
    let lastFocusableElement = focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

    if (!isTabPressed) {
      return
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus() // add focus for the last focusable element
        e.preventDefault()
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus() // add focus for the first focusable element
        e.preventDefault()
      }
    }
  }
})

firstFocusableElement.focus()

let lastImage = ''
let click = 0

function displayLightbox (idPhoto) {
  const modal = document.getElementById('lightbox')
  const main = document.getElementById('main')
  const lightboxSection = document.querySelector('.lightbox_section')
  const imgL = document.querySelector('.lightbox_img')
  const name = document.querySelector('.lightbox_name')
  const close = document.querySelector('.lightbox_close')
  const photoLightboxData = allPhotos.find(p => p.id === idPhoto)
  modal.style.display = 'flex'
  console.log(idPhoto)
  console.log(photoLightboxData)
  const mediaUrl = photoLightboxData.url
  name.innerHTML = photoLightboxData.title
  lastImage = idPhoto

  if (imgL) { // if a video or image is alredy load, remove it
    imgL.remove()
  } else {
    close.focus()
  }
  if (photoLightboxData.type === 'image') {
    const media = new Image(mediaUrl, photoLightboxData.title, lightboxSection).makeImage()
    media.className = 'lightbox_img'
  } else if (photoLightboxData.type === 'video') {
    const media = new Video(mediaUrl, photoLightboxData.title, lightboxSection).makeVideo()
    media.className = 'lightbox_img'
    media.setAttribute('controls', true)
  }

  setLightboxArrow(photoLightboxData)

  modal.style.display = 'flex'
  modal.setAttribute('aria-hidden', 'false')
  main.setAttribute('aria-hidden', 'true')
  document.body.classList.add('no-scroll')
  // Close modal when close button is pressed
  close.addEventListener('click', closeLightbox)
}

function setLightboxArrow (photoData) {
  const modal = document.getElementById('lightbox')
  const arrowLeft = document.querySelector('.arrow-left')
  const arrowRight = document.querySelector('.arrow-right')
  const imgPosition = allPhotos.indexOf(photoData)
  const imgPositionMax = allPhotos.length
  console.log('Position:' + imgPosition + '/' + imgPositionMax)
  const indexImgLeft = imgPosition - 1
  const indexImgRight = imgPosition + 1
  // Left arrow
  if (indexImgLeft >= 0) {
    console.log('Left:' + allPhotos[indexImgLeft].id)
    arrowLeft.setAttribute('onclick', 'displayLightbox(' + allPhotos[indexImgLeft].id + ')')
    arrowLeft.style.display = 'block'
  } else {
    arrowLeft.style.display = 'none'
  }
  // Right arrow
  if (indexImgRight < imgPositionMax) {
    console.log('Right:' + allPhotos[indexImgRight].id)
    arrowRight.setAttribute('onclick', 'displayLightbox(' + allPhotos[indexImgRight].id + ')')
    arrowRight.style.display = 'block'
    // Right image when escape right key is pressed
  } else {
    arrowRight.style.display = 'none'
  }

  // Left image when escape left key is pressed
  window.addEventListener('keyup', e => {
    if (e.defaultPrevented) {
      return
    }
    if (click > 0) {
      return
    } else if (modal.getAttribute('aria-hidden') === 'false' && e.key === 'ArrowLeft' && (indexImgLeft >= 0)) {
      // displayLightbox(allPhotos[indexImgLeft].id);
      arrowLeft.focus()
      arrowLeft.click()
      click++
    } else if (modal.getAttribute('aria-hidden') === 'false' && e.key === 'ArrowRight' && (indexImgRight < imgPositionMax)) {
      // displayLightbox(allPhotos[indexImgRight].id);
      arrowRight.focus()
      arrowRight.click()
      click++
    } else if (modal.getAttribute('aria-hidden') === 'false' && e.key === 'Escape') {
      closeLightbox()
      click++
    }
    setTimeout(function () { click = 0 }, 100)
  })
}

function closeLightbox () {
  const main = document.getElementById('main')
  const modal = document.getElementById('lightbox')
  modal.style.display = 'none'
  const imgL = document.querySelector('.lightbox_img')
  const pictureFocus = document.getElementById('photo' + lastImage)
  if (imgL) {
    imgL.remove()
  }
  modal.style.display = 'none'
  modal.setAttribute('aria-hidden', 'true')
  main.setAttribute('aria-hidden', 'false')
  document.body.classList.remove('no-scroll')
  pictureFocus.children[0].focus()
}

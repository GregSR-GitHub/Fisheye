const sortInput = document.getElementById('sort-by')
const sortInput2 = document.querySelectorAll('.sort-by_list')
sortInput.addEventListener('click', openSortBy)
sortInput2.forEach((btn) => btn.addEventListener('click', sortByButton))
const list = sortInput2[0].parentElement.parentElement
let ariaExp = sortInput.getAttribute('aria-expanded')
window.addEventListener('click', closeSortBy)
let sortByOpen = 0

async function sortBy () {
  console.log(sortInput.value)
  console.log(allPhotos)
  const sortByMapped = (map, compareFn) => (a, b) => compareFn(map(a), map(b))
  const byString = (a, b) => a.localeCompare(b, { sensitivity: 'base' })
  const byValue = (a, b) => a - b
  const byValueInvert = (a, b) => b - a
  const toLikes = e => e.likes
  const toName = e => e.title
  const toDate = e => e.date.replace(/-/g, '')
  const byLikes = sortByMapped(toLikes, byValueInvert)
  const byName = sortByMapped(toName, byString)
  const byDate = sortByMapped(toDate, byValue)

  if (sortInput.value === 'popularity') {
    allPhotos.sort(byLikes)
    changeOrder()
  } else if (sortInput.value === 'date') {
    allPhotos.sort(byDate)
    changeOrder()
  } else if (sortInput.value === 'title') {
    allPhotos.sort(byName)
    changeOrder()
  } else {
    console.log('Error')
  }
}

async function closeSortBy () {
  ariaExp = sortInput.getAttribute('aria-expanded')
  if ((ariaExp === 'true') && (sortByOpen > 0)) {
    sortInput.setAttribute('aria-expanded', 'false')
    sortByOpen = 0
  }
}

async function openSortBy (e) {
  e.preventDefault()
  ariaExp = sortInput.getAttribute('aria-expanded')
  if (ariaExp === 'true') {
    sortInput.setAttribute('aria-expanded', 'false')
    console.log(ariaExp)
  } else {
    sortInput.setAttribute('aria-expanded', 'true')
    sortInput2[0].focus()
    console.log(list)
    setTimeout(function () { sortByOpen = 1 }, 100)
  }
  window.addEventListener('keyup', e => {
    if (ariaExp === 'true' && e.key === 'Escape') {
      closeSortBy()
    }
  })
}

async function sortByButton (e) {
  console.log(e.target.dataset.list)
  sortInput.value = e.target.dataset.list
  sortInput.innerHTML = e.target.innerHTML
  sortBy()
}

function changeOrder () {
  const parent = document.querySelector('.photos_section')
  allPhotos.forEach((photoSorted) => {
    const photo = document.getElementById('photo' + photoSorted.id)
    parent.appendChild(photo)
  })
}

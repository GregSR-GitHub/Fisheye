const sortInput = document.getElementById('sort-by')
const sortInputList = document.querySelectorAll('.sort-by_list')
const list = sortInputList[0].parentElement.parentElement
let ariaExp = sortInput.getAttribute('aria-expanded')
let sortByOpen = 0
sortInput.addEventListener('click', openSortBy)
sortInputList.forEach((btn) => btn.addEventListener('click', sortByButton))
window.addEventListener('click', closeSortBy)

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
    sortInputList[0].focus()
    setTimeout(function () { sortByOpen = 1 }, 100)
  }
  window.addEventListener('keyup', e => {
    if (ariaExp === 'true' && e.key === 'Escape') {
      closeSortBy()
    }
  })
}

async function sortByButton (e) {
  sortInput.value = e.target.dataset.list
  sortInput.innerHTML = e.target.innerHTML
  sortInput.setAttribute('aria-activedescendant', 'sort-by_' + e.target.dataset.list)
  sortBy()
}

function changeOrder () {
  const parent = document.querySelector('.photos_section')
  allPhotos.forEach((photoSorted) => {
    const photo = document.getElementById('photo' + photoSorted.id)
    parent.appendChild(photo)
  })
}

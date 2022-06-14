const sortInput = document.getElementById("sort-by");
const sortInput2 = document.querySelectorAll(".sort-by_list");
sortInput.addEventListener("click", openSortBy);
sortInput2.forEach((btn) => btn.addEventListener("click", sortByButton));
const list = sortInput2[0].parentElement.parentElement;

async function sortBy(){
    console.log(sortInput.value);
    console.log(allPhotos);
    const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
    const byString = (a, b) => a.localeCompare( b, { sensitivity: 'base' });
    const byValue = (a,b) => a - b;
    const byValueInvert = (a,b) => b - a;
    const toLikes = e => e.likes;
    const toName = e => e.title;
    const toDate = e => e.date.replace(/-/g, '');
    const byLikes = sortByMapped(toLikes,byValueInvert);
    const byName = sortByMapped(toName,byString);
    const byDate = sortByMapped(toDate,byValue);

    if(sortInput.value=="popularity"){
        allPhotos.sort(byLikes);
        changeOrder();

    }else if(sortInput.value=="date"){
        allPhotos.sort(byDate);
        changeOrder();

    }else if(sortInput.value=="title"){
        allPhotos.sort(byName);
        changeOrder();
    }else{
        console.log("Error");
    }
}

async function openSortBy(e){
    let ariaExp = sortInput.getAttribute("aria-expanded");
    if(ariaExp == 'true'){   
        list.style.display = "none";
        sortInput.setAttribute("aria-expanded", "false");
        console.log(ariaExp);
      }else{
    list.style.display = "inline-block";
    sortInput.setAttribute("aria-expanded", "true");
    console.log(list);
   }
}

async function sortByButton(e){
    console.log(e.target.dataset.list);
    sortInput.value = e.target.dataset.list;
    sortInput.children[0].innerHTML = e.target.innerHTML;
    sortBy();
}


function changeOrder(){
    const parent = document.querySelector(".photos_section");
    allPhotos.forEach((photoSorted) => {
        let photo = document.getElementById("photo"+photoSorted.id);
        parent.appendChild(photo);
    });

}
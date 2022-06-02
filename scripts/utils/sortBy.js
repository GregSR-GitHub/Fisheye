const sortInput = document.getElementById("sort-by");


sortInput.addEventListener("change", sortBy);

function sortBy(){
    console.log(sortInput.value);
    console.log(photoArray);

    const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
    const byString = (a, b) => a.localeCompare( b, { sensitivity: 'base' });
    const byValue = (a,b) => a - b;
    const toLikes = e => e.likes;
    const toName = e => e.title;
    const toDate = e => new Date(e.date).getTime();
    const byLikes = sortByMapped(toLikes,byValue);
    const byName = sortByMapped(toName,byString);
    const byDate = sortByMapped(toDate,byValue);

    if(sortInput.value=="popularity"){
        photoArray.sort(byLikes);
        changeOrder();

    }else if(sortInput.value=="date"){
        photoArray.sort(byDate);
        changeOrder();
    }else if(sortInput.value=="title"){
        photoArray.sort(byName);
        changeOrder();
    }else{
        console.log("Error");
    }
}


function changeOrder(){
    let numOrder = 1;
    photoArray.forEach((photoSorted) => {
        let photo = document.getElementById("photo"+photoSorted.id);
        console.log(numOrder + ":" + photoSorted.id )
        photo.style.order = numOrder;
        numOrder ++
    });

}
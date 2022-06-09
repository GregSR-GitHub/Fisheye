
const modal = document.getElementById("contact_modal");
const main = document.getElementById("main");
const buttonOpen = document.getElementById( 'contact_photographer' );
const buttonClose = document.querySelector( '.close_modal' );
const textControl = document.querySelectorAll(".text-control");
const form = document.querySelector( '.modal_form' );
const validMessage = document.querySelector( '.valid-message' );

textControl.forEach((btn) => btn.addEventListener("change", check));
// Close modal when escape key is pressed
document.addEventListener('keydown', e => {
    const keyCode = e.keyCode ? e.keyCode : e.which
    if (modal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
        closeModal();
        
    }
 })

function check(e){
    checkText(e.target);
  }

  function checkText(testedInput){
    let resultChek = testedInput.reportValidity();
    console.log("Test:" + resultChek);
    if(testedInput.value==''){ 
      resultChek = false; 
    }
    if(resultChek){
        testedInput.classList.remove("invalid-input");
    }else{
        testedInput.classList.add("invalid-input");
    }
    return resultChek;
  }

function displayModal() {
    
	modal.style.display = "flex";
    modal.setAttribute('aria-hidden', 'false');
    main.setAttribute('aria-hidden', 'true');
    document.body.classList.add("no-scroll");
    console.log(buttonClose);
    buttonClose.focus();
}

function closeModal() {
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    main.setAttribute('aria-hidden', 'false');
    document.body.classList.remove("no-scroll");
    buttonOpen.focus();
}

function validate() {
    console.log("Testing all inputs:");
    event.preventDefault();
  
    // verify if all texts inputs are valid
    let invalidInput = 0;
    textControl.forEach(e => {
      if(!checkText(e)){
        invalidInput ++;
      }
    });
  
    console.log(invalidInput + " invalid(s) input(s)");
  
    //change modal if the form is valid
    if(invalidInput==0){
      form.style.display = "none";
      validMessage.style.display = "flex"; 
      console.log("Everyting is valid !");
    }else{
      console.log("Everyting isn't valid !");
    }
  }
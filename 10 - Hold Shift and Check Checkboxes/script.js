const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  let lastchecked;


  function handleCheck(e) {
    let inbetween = false;
    if(e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if(checkbox === this || checkbox === lastchecked) {
          inbetween = !inbetween;
          console.log("here!");
        }
        if(inbetween) checkbox.checked = true;
      });
    }
    lastchecked = this;
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
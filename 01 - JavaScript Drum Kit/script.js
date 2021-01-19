function playSound(e) {
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
    if(!audio) return; //stops the function if no audio found
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing'); //add class palying to all keys
  };

  function removeTransition(e){
    if(e.propertyName !== 'transform') return;  //we only want properties with tag transorm
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));//to traverse through all keys
  window.addEventListener('keydown', playSound);
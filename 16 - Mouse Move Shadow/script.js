const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; //100px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y} = e;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    console.log(xWalk, yWalk);

    text.style.textShadow = `${xWalk/2}px ${yWalk/2}px 0 grey`;

}

hero.addEventListener('mousemove', shadow);
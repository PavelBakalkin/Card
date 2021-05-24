function startBall(img, size, speed, canvas){
    let image = new Image();
    let canva = document.querySelector(`#${canvas}`);
    let ctx = canva.getContext('2d');
    let x = 0;
    let y = canva.height - size;

    image.onload = animateUp;
    image.src = img;


    function animateUp() {
        ctx.clearRect(0, 0, canva.width, canva.height);
        ctx.drawImage(image, x, y);
    
        y -= speed;

        if(y > 0){
            requestAnimationFrame(animateUp);
        }else{
            requestAnimationFrame(animateDown);
        }
    }
    
    function animateDown() {
        ctx.clearRect(0, 0, canva.width, canva.height);
        ctx.drawImage(image, x, y);

        y += speed;

        if(y <= canva.height - size){
            requestAnimationFrame(animateDown);
        }else{
            requestAnimationFrame(animateUp);
        }
    }
}

window.onload = () => {
    startBall("../images/BigBall.png", 190, .2,'big');
    startBall("../images/averageBall.png", 130, .5,'average');
    startBall("../images/smallBall.png", 75, .4,'small');
}
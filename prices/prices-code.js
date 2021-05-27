function startBall(img, size, speed, canvas) {
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

        if (y > 0) {
            requestAnimationFrame(animateUp);
        } else {
            requestAnimationFrame(animateDown);
        }
    }

    function animateDown() {
        ctx.clearRect(0, 0, canva.width, canva.height);
        ctx.drawImage(image, x, y);

        y += speed;

        if (y <= canva.height - size) {
            requestAnimationFrame(animateDown);
        } else {
            requestAnimationFrame(animateUp);
        }
    }
}

window.onload = () => {
    startBall("../images/BigBall.png", 190, .2, 'big');
    startBall("../images/averageBall.png", 130, .5, 'average');
    startBall("../images/smallBall.png", 75, .4, 'small');
}

const createOffers = (caption, price, miniDescription) => {
    const priceTable = document.querySelector('#price-table');

    priceTable.insertAdjacentHTML('afterend', `
    <div class="row">
        <div class="col">
            <div class="offers">
                <div class="row">
                    <div class="col-xs-12 col-sm-8">
                        <div class="makeup">
                            <p class="caption">${caption}</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="price">
                            <p>${price}</p>
                        </div>
                    </div>
                    <div class="col">
                        <hr class="line">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="mini-description">${miniDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`)
}

const createListOfWork = (typesOfWork, type, terms, price) => {
    const typeOfWork = document.querySelector(`#${typesOfWork}`);

    typeOfWork.insertAdjacentHTML('beforeend', `
    <div class="col-12">
        <div class="row types-of-work-text">
            <div class="col-6">
                <p>
                    ${type}
                </p>
            </div>
            <div class="col-3">
                <p>
                    ${terms}
                </p>
            </div>
            <div class="col-3">
                <p>
                    ${price}
                </p>
            </div>
        </div>
    </div>
    `)
}

const acardionMove = () => {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 150 + "px";
            }
        });
    }
}

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
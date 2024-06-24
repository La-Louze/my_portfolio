window.addEventListener('load', function () {
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        loader.classList.add('hidden');
    }, 3000); // 10000 миллисекунд = 10 секунд
});


const images2 = ['arannis.jpg', 'landscape.jpg', 'Pirates.jpg', 'Preweiw.jpg', 'trader.jpg', 'Smosa.jpg']; 
const texts2 =['Концепт паучихи по мотивам игры D&D', 'Зимний пейзаж', 'Концепт арт пиратов', 'Концепт существа DRT-0306', 'Концепт восточного торговца', 'Концепт супергероя SamsaMan'];
const adress2 = ['https://www.artstation.com/artwork/lDAdgY', 'https://www.artstation.com/artwork/9EYa8q', 'https://www.artstation.com/artwork/qealJN', 'https://www.artstation.com/artwork/49DO1l', 'https://www.artstation.com/artwork/49DOa2', 'https://www.artstation.com/artwork/9EYayN'];
let activeImage2 = 0; 
const sliderPlace2 = document.querySelector('.slider-line2'); 
const widthOffset2 = document.querySelector('.slider2').offsetWidth; 
const bigImage2 = document.querySelector('.img2');
const text2 = document.querySelector('.text2');
const href2 = document.getElementById('imghref2')

sliderPlace2.style.left = `-${widthOffset2}px`; 
let flag = true; 

const images = ['work1.png', 'work4.png', 'work5.png']; 
const texts =['Сайт Skateboard', 'Органайзер', 'box-shadow'];
const adress = ['https://la-louze.github.io/practic/', 'https://la-louze.github.io/organaiser/', 'https://la-louze.github.io/box-shadow-generation/'];
let activeImage = 0; 
const sliderPlace = document.querySelector('.slider-line'); 
const widthOffset = document.querySelector('.slider').offsetWidth; 
const bigImage = document.querySelector('.img');
const text = document.querySelector('.text');
const href1 = document.getElementById('imghref');

sliderPlace.style.left = `-${widthOffset}px`; 

const createImageElement = (src) => {
    const block = document.createElement('div');
    const img = document.createElement('img');
    img.src = `./images/${src}`;
    block.style.cssText = 'border: 1px solid white; border-radius: 5px; width: 100%; height: 65px; display: flex; justify-content: center; align-items: center;';
    block.append(img);
    return block;
};

const createBigImg = (src) => {
    const img = document.createElement('img');
    img.src = `./images/${src}`;
    return img;
}

const initSlider = () => {
    sliderPlace.append(createImageElement(images[activeImage]));
    bigImage.appendChild(createBigImg(images[activeImage]));
    text.innerHTML = texts[activeImage];
    href1.href = adress[activeImage];
    nextImageGenerate();
    prewImageGenerate();
}

const updateActiveImage = (direction) => {
    activeImage += direction;
    if (activeImage >= images.length) activeImage = 0;
    if (activeImage < 0) activeImage = images.length - 1;
}

const nextImageGenerate = () =>{
    let nextImage = activeImage + 1;
    if (nextImage >= images.length) nextImage = 0;

    // Удаляем текущее изображение в bigImage
    while(bigImage.firstChild){
        bigImage.removeChild(bigImage.firstChild);

    }
    bigImage.appendChild(createBigImg(images[activeImage]));

    text.innerHTML = texts[activeImage];
    href1.href = adress[activeImage];

    
    sliderPlace.append(createImageElement(images[nextImage]));
}


const prewImageGenerate = () => {
    let prewImage = activeImage - 1;
    if (prewImage < 0) prewImage = images.length - 1;
    
    while(bigImage.firstChild){
        bigImage.removeChild(bigImage.firstChild);
    }
    
    // Вставляем новое изображение в bigImage
    bigImage.appendChild(createBigImg(images[activeImage]));
    text.innerHTML = texts[activeImage];
    href1.href = adress[activeImage];
    sliderPlace.prepend(createImageElement(images[prewImage]));
}

const changeSlider = (direction) => {
    if (!flag) return;
    flag = false;

    updateActiveImage(direction);
    direction === 1 ? nextImageGenerate() : prewImageGenerate();
    animate({ 
        duration : 600, 
        draw : function(progress){ 
            document.querySelector('.slider-line div').style.width = `${widthOffset * (direction === 1 ? (1-progress) : progress)}px`; 
        }, 
        removeElement : document.querySelector(direction === 1 ? '.slider-line div' : '.slider-line div:last-child') 
    }); 
}

const nextSlider = () => changeSlider(1);

const prewSlider = () => changeSlider(-1);

initSlider();

document.querySelector('.next-button').addEventListener('click', nextSlider); 
document.querySelector('.prew-button').addEventListener('click', prewSlider);


const createImageElement2 = (src) => {
    const block = document.createElement('div');
    const img = document.createElement('img');
    img.src = `./images/${src}`;
    block.style.cssText = 'border: 1px solid white; border-radius: 5px; width: 100%; height: 65px; display: flex; justify-content: center; align-items: center;';
    block.append(img);
    return block;
};

const createBigImg2 = (src) => {
    const img = document.createElement('img');
    img.src = `./images/${src}`;
    return img;
}

const initSlider2 = () => {
    sliderPlace2.append(createImageElement2(images2[activeImage2]));
    bigImage2.appendChild(createBigImg2(images2[activeImage2]));
    text2.innerHTML = texts2[activeImage2];
    href2.href = adress2[activeImage2];
    nextImageGenerate2();
    prewImageGenerate2();
}

const updateActiveImage2 = (direction) => {
    activeImage2 += direction;
    if (activeImage2 >= images2.length) activeImage2 = 0;
    if (activeImage2 < 0) activeImage2 = images2.length - 1;
}

const nextImageGenerate2 = () =>{
    let nextImage = activeImage2 + 1;
    if (nextImage >= images2.length) nextImage = 0;

    // Удаляем текущее изображение в bigImage
    while(bigImage2.firstChild){
        bigImage2.removeChild(bigImage2.firstChild);

    }
    bigImage2.appendChild(createBigImg2(images2[activeImage2]));

    text2.innerHTML = texts2[activeImage2];
    href2.href = adress2[activeImage2];

    sliderPlace2.append(createImageElement2(images2[nextImage]));
}


const prewImageGenerate2 = () => {
    let prewImage = activeImage2 - 1;
    if (prewImage < 0) prewImage = images2.length - 1;
    
    while(bigImage2.firstChild){
        bigImage2.removeChild(bigImage2.firstChild);
    }
    
    // Вставляем новое изображение в bigImage
    bigImage2.appendChild(createBigImg2(images2[activeImage2]));
    text2.innerHTML = texts2[activeImage2];
    href2.href = adress2[activeImage2];
    sliderPlace2.prepend(createImageElement2(images2[prewImage]));
}

const changeSlider2 = (direction) => {
    if (!flag) return;
    flag = false;

    updateActiveImage2(direction);
    direction === 1 ? nextImageGenerate2() : prewImageGenerate2();
    animate({ 
        duration : 600, 
        draw : function(progress){ 
            document.querySelector('.slider-line2 div').style.width = `${widthOffset2 * (direction === 1 ? (1-progress) : progress)}px`; 
        }, 
        removeElement : document.querySelector(direction === 1 ? '.slider-line2 div' : '.slider-line2 div:last-child') 
    }); 
}

const nextSlider2 = () => changeSlider2(1);

const prewSlider2 = () => changeSlider2(-1);

initSlider2();

document.querySelector('.next-button2').addEventListener('click', nextSlider2); 
document.querySelector('.prew-button2').addEventListener('click', prewSlider2);

const animate = ({duration, draw, removeElement}) => {
    const start = performance.now();

    requestAnimationFrame(function animate(time) {
        let step = (time - start) / duration;
        if (step > 1) step = 1;
        draw(step);
        if (step < 1) {
            requestAnimationFrame(animate);
        } else {
            removeElement.remove();
            flag = true;
        }
    });
}

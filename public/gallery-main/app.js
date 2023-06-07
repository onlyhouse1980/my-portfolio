let images = ['img/2.png', 'img/30.jpg', 'img/3.png', 'img/22.jpg', 'img/4.png', 'img/21.jpg', 'img/5.png', 'img/23.jpg', 'img/6.png', 'img/25.jpg', 'img/7.png', 'img/10.png', 'img/11.png', 'img/18.jpg','img/12.png', 'img/13.png', 'img/24.jpg', 'img/14.png', 'img/15.png', 'img/19.png', 'img/31.jpeg', 'img/26.jpg', 'img/17.png', 'img/31.jpeg','img/32.jpeg','img/33.jpeg','img/34.jpeg']

        function load() {
            for(let i = 0; i < images.length; i++) {
                document.getElementById('strip1').innerHTML += `
                            <div onClick="openImage(${i})" class="imgBox"><img src="${images[i]}"> 
                             
                        
                `
                document.getElementById('strip1').source = images[i]
            }}
        
        function openImage({i}) {
            document.getElementById("feature-box").classList.remove('d-none')
            
        }

        function featClose() {
            document.getElementById("feature-box").classList.add('d-none')
        }
       /*  /* onclick="openImage($(i))" */
        /* }
        document.addEventListener("DOMContentLoaded", () => {

// ===> DOM elements <=== //

const $imagesContainer = document.getElementById('images-container');
const $lightbox = document.getElementById('lightbox');

// ===> Event listeners and triggers <=== //

// Show lightbox 
$imagesContainer.addEventListener('click', e => {
    const imageWrapper = ('${images[i]}');

    if (imageWrapper) {
        const image = $images[i];
        if (image) {
            $lightbox.innerHTML = '<div class="close-lightbox"></div>' + image.outerHTML;
            $lightbox.classList.add('show');
        }
    }
});

// Hide Lightbox
$lightbox.addEventListener('click', (e) => {
    if (!e.target.hasAttribute('src')) {
        $lightbox.classList.remove('show');
    }
});
});

     */ 
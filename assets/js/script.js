(() => {
    const enlargeImage = (event) => {
        const imagePath = event.target.src;
        const largeImage = document.querySelector(".large-image img")
        largeImage.src = imagePath;
        const largeImageConatiner = document.querySelector(".large-image");
        largeImageConatiner.style.display = "block";
    }

    const closeLargeImage = () => {
        const largeImageConatiner = document.querySelector(".large-image");
        largeImageConatiner.style.display = "none";
    }

    const initializeEvent = () => {
        const galaryImages = document.querySelectorAll(".galary-container img");
        galaryImages.forEach((img) => {
            img.addEventListener("click", enlargeImage)
        })
        const closeButton = document.querySelector(".large-image button");
        closeButton.addEventListener("click", closeLargeImage);
    }

    const populateImages = () => {
        const images = [
            "/assets/images/fran-eP-47yxVScA-unsplash.jpg",
            "/assets/images/gordon-cowie-4SYDbxHG0t8-unsplash.jpg",
            "/assets/images/jakob-owens-9pRbuWJ6TvQ-unsplash.jpg",
            "/assets/images/jose-p-ortiz-9yLUuaj77Yo-unsplash.jpg",
            "/assets/images/josh-calabrese-Ev1XqeVL2wI-unsplash.jpg",
            "/assets/images/noaa-WjK2_zZ8bRM-unsplash.jpg"
        ];

        const allImages = images.map(image => {
            return `
            <div>
            <img src="${image}" alt=""></img>
            </div>
            `
        });

        const galaryContainer = document.querySelector(".galary-container");
        galaryContainer.innerHTML = allImages.join(" ");
    }

    populateImages();
    initializeEvent();

})();
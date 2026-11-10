let dragged = null;
const images = document.querySelector("img");
for (const img of images) {
    img.addEventListener("dragstart", function () {
        dragged = img;
    });
    img.addEventListener("dragend", function() {
        dragged = null;
    });
}

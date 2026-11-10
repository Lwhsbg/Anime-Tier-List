let dragged = null;
const images = document.querySelectorAll("img");
for (const img of images) {
    img.addEventListener("dragstart", function () {
        dragged = img;
    });
    img.addEventListener("dragend", function() {
        dragged = null;
    });
}
const zones = document.querySelectorAll(".drop-zone");
for (const zone of zones) {
    zone.addEventListener("dragover", function(e) {
        e.preventDefault();
    });
    zone.addEventListener("drop", function(e) {
        e.preventDefault();
        if (dragged) {
            zone.appendChild(dragged);
        }
    });
}

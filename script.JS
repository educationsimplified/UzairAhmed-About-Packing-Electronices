document.addEventListener('DOMContentLoaded', function() {
    const floatingButton = document.getElementById('floating-button');

    let isDragging = false;
    let offsetX, offsetY;

    floatingButton.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - floatingButton.getBoundingClientRect().left;
        offsetY = e.clientY - floatingButton.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            floatingButton.style.left = (e.clientX - offsetX) + 'px';
            floatingButton.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    floatingButton.addEventListener('touchstart', function(e) {
        isDragging = true;
        offsetX = e.touches[0].clientX - floatingButton.getBoundingClientRect().left;
        offsetY = e.touches[0].clientY - floatingButton.getBoundingClientRect().top;
    });

    document.addEventListener('touchmove', function(e) {
        if (isDragging) {
            floatingButton.style.left = (e.touches[0].clientX - offsetX) + 'px';
            floatingButton.style.top = (e.touches[0].clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('touchend', function() {
        isDragging = false;
    });
});

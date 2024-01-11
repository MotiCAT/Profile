document.addEventListener('keydown', function (event) {
    if (event.key === 'Shift') {
        document.getElementById('twitter-icon').src = 'assets/images/Twitter-icon.webp';
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'Shift') {
        document.getElementById('twitter-icon').src = 'assets/images/X-icon.webp';
    }
});
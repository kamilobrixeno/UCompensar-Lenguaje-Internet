window.addEventListener('load', function() {
    const title = localStorage.getItem('information-title');
    const content = localStorage.getItem('information-content');
    const image = localStorage.getItem('information-image');

    if (title) {
        document.getElementById('title').innerText = title;
    }

    if (content) {
        document.getElementById('content').innerText = content;
    }

    if (image) {
        document.getElementById('img').src = image;
    }
});

function goBack() {
    window.history.back(); // Retrocede a la página anterior
}
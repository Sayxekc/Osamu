document.addEventListener("DOMContentLoaded", function() {
    fetch('get_videos.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const videoList = document.getElementById('video-list');
            data.forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.className = 'video-item';
                videoItem.innerHTML = `
                    <img src="${video['Полное описание на постер фильма']}" alt="${video['Название фильма']}">
                    <h2>${video['Название фильма']}</h2>
                    <p class="description">${video['Полное описание фильма']}</p>
                    <p class="director"><strong>Режиссер:</strong> ${video['Режиссер']}</p>
                    <p class="year"><strong>Год выхода:</strong> ${video['Год выхода']}</p>
                `;
                videoList.appendChild(videoItem);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
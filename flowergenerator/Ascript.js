
        document.getElementById('generate').addEventListener('click', generateFlower);

        function generateFlower() {
            fetch('https://source.unsplash.com/featured/?flower')
                .then(response => {
                    const flowerContainer = document.getElementById('flower-container');
                    flowerContainer.innerHTML = '';

                    const flower = document.createElement('div');
                    flower.className = 'flower';
                    flower.style.backgroundImage = `url(${response.url})`;

                    flowerContainer.appendChild(flower);
                })
                .catch(error => {
                    console.error('Error fetching flower:', error);
                });
        }
    
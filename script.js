fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
    .then(response => response.json())
    .then(data => {
        const newsList = document.getElementById('news-list');
        data.items.forEach(item => {
            const li = document.createElement('li');
            const h2 = document.createElement('h2');
            const a = document.createElement('a');
            h2.textContent = item.title;
            a.textContent = 'Read more';
            a.href = item.link;
            a.target = '_blank';
            li.appendChild(h2);
            const description = document.createElement('p');
            description.innerHTML = item.description;
            li.appendChild(description);
            li.appendChild(a);
            newsList.appendChild(li);
        });
    });

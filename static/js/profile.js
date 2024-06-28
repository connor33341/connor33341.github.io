document.getElementById('search').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.message !== "Not Found") {
                    document.getElementById('profile').classList.remove('d-none');
                    document.getElementById('name').innerText = data.name || 'No name provided';
                    document.getElementById('login').innerText = `@${data.login}`;
                    document.getElementById('bio').innerText = data.bio || 'No bio available';
                    document.getElementById('profile-link').href = data.html_url;
                    document.getElementById('profile-link').innerText = 'View Profile';
                } else {
                    alert('User not found');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    } else {
        alert('Please enter a GitHub username');
    }
});

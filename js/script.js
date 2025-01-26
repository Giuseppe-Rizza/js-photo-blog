// Chiamata Ajax verso l'API
axios.get("https://lanciweb.github.io/demo/api/pictures")
    .then(response => {
        const result = response.data;
    })
    .catch(error => {
        console.error(error)
    });
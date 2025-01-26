// Utilizzo una variabile per parametrizzare l'endpoint
const endpoint = "https://lanciweb.github.io/demo/api/pictures";

// Chiamata Ajax verso l'API
axios.get(endpoint)
    .then(response => {
        const result = response.data;
    })
    .catch(error => {
        console.error(error)
    });
// Seleziono gli elementi di output
const containerCard = document.querySelector(".container")

// Utilizzo una variabile per parametrizzare l'endpoint
const endpoint = "https://lanciweb.github.io/demo/api/pictures";

// Chiamata Ajax verso l'API
axios.get(endpoint)
    .then(responseObj => {
        const posts = responseObj.data;

        // Ciclo l'array di oggetti per estrapolare ogni volta un oggetto diverso
        for (let i = 0; i < posts.length; i++) {
            let singlePost = posts[i];

            // Destrutturo l'oggetto
            const {title, date, url} = singlePost;

            // Creo le card
            containerCard.innerHTML += `
            <div class="card mb-5 px-3 py-3" style="width: 18rem;" >
                <img src="${url}" class="card-img-top" alt="...">
                    <div class="card-body px-0">
                        <p class="card-text mb-0"><font face="Sometype Mono"></font>${date}</font>
                        </p>
                        <h3 class="fw-semibold">
                            <font face="Edu Tas Beginner">${title}</font>
                        </h3>
                    </div>
            </div>
            `;
        }
    })
    .catch(error => {
        console.error(error)
    });
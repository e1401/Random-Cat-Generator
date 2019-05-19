// const catApiURL = 'https://api.thecatapi.com/v1/images/search'; // cat Api endpoint;

const catApiURL = 'https://api.thecatapi.com/v1/images/search?limit=10&order=Desc';

const DOM = {
    resultsContainer: document.querySelector(".js__search__results"),
    search__button: document.querySelector(".js__search__button")
};



DOM.search__button.addEventListener("click", e => {

    fetchData(catApiURL);
    $( ".results" ).empty()


});




function fetchData() {
    fetch(catApiURL)

        .then(response => response.json())

        .then(data => {
            const catRandom =

                document.createElement('div')

            catRandom.className = "results"
            

            data.forEach(cat => {
                catRandom.innerHTML +=
                    `
                    <div class="div__style">  
                        <img class="responsive__img" src=" ${cat.url}">
                        </div>
                    `
            })
            // This is where I would like my fetch request to be on the page
            
            document.body.append(catRandom)
           
        })
        .catch(function (error) {
            console.log('Kratos says - Boy, there is error in your fetch: ', error.message)
        })

}
const catApiURL = 'https://api.thecatapi.com/v1/images/search?limit=10&order=Desc';

const DOM = {
    resultsContainer: document.querySelector(".js__search__results"),
    search__button: document.querySelector(".js__search__button")
};



DOM.search__button.addEventListener("click", e => {

    fetchData(catApiURL);
    $(".results").empty()


});

// // Animation section start
const element =  document.querySelector('.button__style')
element.classList.add('animated', 'wobble')
// Animation section end



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
            // Fetch result content => here:

            document.body.append(catRandom)

        })
        .catch(function (error) {
            console.log('Kratos says - Boy, there is error with your fetch: ', error.message)
        })

}


const catApiURL = 'https://api.thecatapi.com/v1/images/search'; // cat Api endpoint;

const DOM = {
	resultsContainer: document.querySelector(".js__search__results"),
	search__button: document.querySelector(".js__search__button")
};

DOM.search__button.addEventListener("click", e => {
    fetchData(catApiURL)
});


let myHeaders = new Headers({
    'Content-Type' : 'application/json',
    'x-api-key' : '77393ee4e-fb65-4cb4-80cc-1f086c11a480',
    
});

let req = new Request(catApiURL, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors'
});



function fetchData() {
    fetch(resq)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Kratos says: error');
        }
    })
    .then( (jsonData) =>{
        console.log(jsonData);
        
        
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });
}

fetch(catApiURL)
  .then(response => response.json())
  .then(data => {
    const catRandom = document.createElement('div')
    data.forEach(cat => {
       catRandom.innerHTML +=
       `
       <ul>
         <li>Name: ${cat.id}</li>
         <li><img src=" ${cat.url}"</li>
         
         
       </ul>
       `
    })
// This is where I would like my fetch request to be on the page
    document.body.append(catRandom)
  })


//AFTER

// function fetchData() {
//     fetch(req)
//     .then( (response)=>{
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('Kratos says: error');
//         }
//     })
//     .then( (jsonData) =>{
//         console.log(jsonData);
//     })
//     .catch( (err) =>{
//         console.log('ERROR:', err.message);
//     });
// }


// const resultsModel = {
// 	init: function (data) {
// 		this.status = data.status;
// 		this.url = data.url;
// 	}
// }

// function convert(fetchData) {
//     const cat = Object.create(resultsModel);
//     cat.init(fetchData);
//     generateImg(cat)

// }

// console.log(convert(fetchData))

function generateImg(url) {
	DOM.resultsContainer.innerHTML = `<img src="${cat.url}" alt="Random cat image">`
};

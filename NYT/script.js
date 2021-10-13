let ApiKey = 'aMoGEJ3IzbiFawxPGy0Tn5ZAplVIgdTq',
    ApiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${ApiKey}`;

let booksArray = []
let output = ''
let parentt = document.querySelector('.parent')
let searchh = document.querySelector('#search')
let searchIcon = document.querySelector('#search-icon')
let txt = document.querySelector('.txt')

async function collectData() {
    if (!localStorage.getItem("tempStorage")) {
        let data = await (await fetch(ApiUrl)).json();
        localStorage.setItem("tempStorage", JSON.stringify({ data: data }))
    }
    let data = JSON.parse(localStorage.getItem("tempStorage"))

    booksArray.push(data.data.results)
    console.log(booksArray);

    for (let i = 0; i < 10; i++) {
        output +=       `<article class="location-listing">

                        <div class="location-title">
                        <p><span style="text-decoration: underline; color: teal;">Title:</span> <p style="color: white;">${booksArray[0].books[i].title}</p></p>
                        <p><span style="text-decoration: underline; color: teal;">Author:</span> <p style="color: white;">${booksArray[0].books[i].author}</p></p>
                        <p><span style="text-decoration: underline; color: teal;">Description:</span> <p style="color: white;">${booksArray[0].books[i].description}</p></p>
                        </div>
                  
                        <div class="location-image">
                          <div>
                              <img width="250" height="300" src="${booksArray[0].books[i].book_image}" alt="">    </div>
                  
                        </div>
                  
                      </article>`
    }
    parentt.innerHTML = output

    searchIcon.addEventListener('click', () => {
        // for (let i = 0 ; i < 10 ; i++) {
        txt.innerHTML = ''
        if ((booksArray[0].books[0].title != searchh.value.toUpperCase())
            && (booksArray[0].books[0].author.toLowerCase() != searchh.value.toLowerCase())) {
            console.log("no results");
            txt.innerHTML = `no results. <br> Please try again`
        } else {

        }
        // }
    })
};
collectData()

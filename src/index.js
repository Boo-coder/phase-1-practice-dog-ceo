    fetch("https://dog.ceo/api/breeds/image/random/4") //Throw a fetch
    .then(res => res.json()) //fetch return staff
    .then(data => { // I turned to a data that can be consummed
        data["message"].forEach(dogUrl => { //grabing out of the data the array of URL and as iterate throught them I called each one dogUrl 
            const imgDiv = document.getElementById("dog-image-container") // grab where I want to put them
            const dog = document.createElement("img") // create a dog image tag
            dog.src = dogUrl
            imgDiv.appendChild(dog)
        })
    })




    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
        const ul = document.getElementById("dog-breeds")
        Object.keys(data.message).forEach(breedUrl => { // retreives an array of the breed names from the message object.
            const li = document.createElement("li")
            li.textContent = breedUrl //Sets the text content of the <li> element to the current breed name
            ul.appendChild(li)
            li.addEventListener("click", () => {
                li.style.color = "red";
            })
        })
    })

    const filter = document.getElementById("breed-dropdown").addEventListener("change", (e) => {
        const selectedLetter = e.target.value.toLowerCase();
        const filteredBreeds = selectedLetter
        ? allBreeds.filter(breed => breed.startsWith(selectedLetter))
        : allBreeds;
        filter(filteredBreeds);
    })
console.log('%c HI', 'color: firebrick')


fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(dogs => {
    dogs.message.forEach(dog =>{
        const dogImg = document.createElement('img')
        dogImg.style.height = '30vw'
        dogImg.style.margin = '1vw'

        dogImg.src = dog;
        dogImg.alt = 'a dog image'        

        document.getElementById('dog-image-container')
        .appendChild(dogImg)
    })
})

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(dogBreeds => {
    dogBreeds = Object.keys(dogBreeds.message);
    const breedList = document.getElementById('dog-breeds')

    for(breedName of dogBreeds){
        const dogBreed = document.createElement('li')
        dogBreed.textContent = breedName

        breedList.append(dogBreed)
    }
})



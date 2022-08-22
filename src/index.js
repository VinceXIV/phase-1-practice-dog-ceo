console.log('%c HI', 'color: firebrick')


// Challenge 1

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


// Challenge 2

function colorDogBreedEntries(){
    const selectedLetter = dropdownList.options[dropdownList.selectedIndex].value
    const dogBreeds = Array.from(document.getElementById('dog-breeds').querySelectorAll('li'))

    for(breed of dogBreeds){
        if(breed.textContent[0] == selectedLetter){
            breed.style.color = 'red'
        }else{
            breed.style.color = 'black'
        }
    }
}

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(dogBreeds => {
    breeds = Object.keys(dogBreeds.message);
    let breedList = document.getElementById('dog-breeds')

    for(breedName of breeds){
        const dogBreed = document.createElement('li')
        dogBreed.textContent = breedName

        breedList.append(dogBreed)
    }

    hideDogBreedEntries()
})


// Challenge 3

// const dropdownList = document.getElementById('breed-dropdown')

// dropdownList
// .addEventListener('change', e => {
//     colorDogBreedEntries();
// })


// Challenge 4

function hideDogBreedEntries(){
    const selectedLetter = dropdownList.options[dropdownList.selectedIndex].value
    const dogBreeds = Array.from(document.getElementById('dog-breeds').querySelectorAll('li'))

    for(breed of dogBreeds){
        if(breed.textContent[0] !== selectedLetter){
            breed.style.display = 'none'
        }else{
            breed.style.display = 'block'
        }
    }
}

const dropdownList = document.getElementById('breed-dropdown')

dropdownList
.addEventListener('change', e => {
    hideDogBreedEntries();
})

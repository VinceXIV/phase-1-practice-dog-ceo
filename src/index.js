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


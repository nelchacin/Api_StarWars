fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(response => { response.results.forEach(film => {
        let filmBox = document.createElement('div')
        document.querySelector('body').appendChild(filmBox)
        filmBox.innerHTML = `
        <h1>${film.title}</h1>
        <p>${film.producer}</p>
        <p>${film.director}</p>
        `
        let planetList=document.createElement('ul')
        filmBox.appendChild(planetList)
        planetList.innerHTML=`${'Planets'}`

        film.planets.forEach(planet=>{
            fetch(planet)
            .then (response=> response.json())
            .then (eachPlanet =>{
                let planetElement= document.createElement('li')
                planetElement.innerHTML=`<a href="#">${eachPlanet.name}</a>`
                planetList.appendChild(planetElement)
            })
            .catch(err=>console.log('error'))
        })

    })
})
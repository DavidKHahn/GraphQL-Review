const continentSelect = document.getElementById('continent-select')

queryFetch(
    `
        query {
            continents {
                name
                code
        }
    }
    `
    ).then(data => {
    // console.log(data.data.continents)
    data.data.continents.forEach(continent => {
        const option = document.createElement('option')
        option.value = continent.code
        option.innerText = continent.name
        continentSelect.append(option)
    })
})


function queryFetch(query) {
    return fetch('http://countries.trevorblades.com/', {
    method: 'POST',
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify({
        query: query
        })
    }).then(res => res.json())
}
var form = document.getElementById("myForm");


form.addEventListener("submit", function(e) {
    e.preventDefault();

    var search = document.getElementById("search").value

    var longName = search.split(' ').join('')

    document.getElementById("result").innerHTML = ""

    const ENDPOINT = ("https://api.github.com/users/"+longName)
    
    fetch(ENDPOINT).then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `<a target="_blank" href="https://www.github.com/${longName}"> <img src="${data.avatar_url}"/></a>
        `
    })
})
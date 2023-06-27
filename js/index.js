fetch("https://api.github.com/search/users?q=octocat")
.then(response => response.json())
.then((data)=>{
    console.log(data)
})
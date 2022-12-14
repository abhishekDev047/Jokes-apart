let result = document.getElementById('joke');

const morefunc = ()=>{
    let url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        result.innerHTML = data.setup + " => " + data.punchline;
    })
};
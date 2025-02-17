const jokepunsetup = document.querySelector("#joke-setup");
const jokepunchline = document.querySelector("#joke-punchline");
const jokebtn = document.querySelector("#joke-btn");

async function fetchJokes(){
    try {
       const response =await fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=001ee9aa647ca576c79f1841a867") ;
       const data = await response.json();      
    //    console.log(data.jokeContent)
    jokepunsetup.textContent = data.
    jokeContent
    
    } catch (error) {
        jokepunsetup.textContent = "Error fetching joke"
        jokepunchline.textContent = "please try again..."
    }
}



jokebtn.addEventListener("click",fetchJokes);
fetchJokes();
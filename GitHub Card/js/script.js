
const image = document.querySelector('#image');
const newname = document.querySelector('.insertname');
const following = document.querySelector('.insertfollowing');
const followers = document.querySelector('.insertfollowers');
const id = document.querySelector('.insertID');
const usernameInput = document.querySelector("#username");



async function profile(name="shouryasinghrathore") {

    let quotes = await fetch(`https://api.github.com/users/${name}`)
    let apiInfo = await quotes.json();
    console.log(apiInfo)
    image.setAttribute('src', apiInfo.avatar_url);
    newname.innerHTML =apiInfo.login;
    console.log(apiInfo.login)
    following.innerHTML = apiInfo.following;
    followers.innerHTML = apiInfo.followers;
    id.innerHTML = apiInfo.id;

}


function processInput() {
    let inputValue = document.getElementById("inputValue").value;
    if (inputValue.trim() !== "") {
        usernameInput.classList.remove("search-container-error");
        profile(inputValue);
    } else {
        usernameInput.classList.add("search-container-error");
    }
} 

profile();
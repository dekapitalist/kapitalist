document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("newsletter-form")

if(form){

form.addEventListener("submit", async function(e){

e.preventDefault()

const email = document.getElementById("email").value

await fetch("https://newsletter.kapitalist.workers.dev",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body: JSON.stringify({email})
})

document.getElementById("result").innerText =
"Bedankt voor je inschrijving."
})
}
})
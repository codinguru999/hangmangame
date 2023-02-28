var names = ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Alexis", "Samantha", "Jessica", "Elizabeth", "Taylor", "Lauren", "Alyssa", "Kayla", "Abigail", "Brianna", "Olivia", "Emma", "Megan", "Grace", "Victoria", "Rachel", "Anna", "Sydney", "Destiny", "Morgan", "Jennifer", "Jasmine", "Haley", "Julia", "Kaitlyn", "Nicole", "Amanda", "Katherine", "Natalie", "Hailey", "Alexandra", "Savannah", "Chloe", "Rebecca", "Stephanie", "Maria", "Sophia", "Mackenzie", "Allison", "Isabella", "Amber", "Mary", "Danielle", "Gabrielle", "Jordan", "Brooke", "Michelle", "Sierra", "Katelyn", "Andrea", "Madeline", "Sara", "Kimberly", "Courtney", "Erin", "Brittany", "Vanessa", "Jenna", "Jacqueline", "Caroline", "Faith", "Makayla", "Bailey", "Paige", "Shelby", "Melissa", "Kaylee", "Christina", "Trinity", "Mariah", "Caitlin", "Autumn", "Marissa", "Breanna", "Angela", "Catherine", "Zoe", "Briana", "Jada", "Laura", "Claire", "Alexa", "Kelsey", "Kathryn", "Leslie", "Alexandria", "Sabrina", "Mia", "Isabel", "Molly", "Leah", "Katie"];
var count = 7

document.getElementById('hidden').style.display = 'none'
let word = Math.ceil(Math.random() * names.length);
checklength = names[word].length
document.getElementById('chances').innerText = count

let div = document.getElementById('inputs')
// console.log(names.length)
var correctword = names[word]
correctword = correctword.toUpperCase()
let obj = {}
let arr = correctword.split('')
for (let x = 0; x < arr.length; x++) {
    console.log(arr[x])
    // console.log(Object.keys(obj))
    if (arr[x] in obj) {

        obj[arr[x]].push(x)
    }
    else {
        obj[arr[x]] = []
        obj[arr[x]].push(x)
    }
}
// console.log(obj)
for (let i = 0; i < correctword.length; i++) {
    let span = document.createElement('span')
    span.classList.add('p-3')
    span.classList.add('m-1')
    span.classList.add('rounded')
    span.classList.add('border')
    span.classList.add('border-bottom')
    span.classList.add('border-1')
    span.classList.add('border-dark')
    span.classList.add('text-black')
    span.classList.add('bg-light')
    span.id = i;

    // console.log("hi")
    div.appendChild(span)
}
function checkinput(e) {

    let letter = e.target.innerText
    if (letter in obj) {
        if (obj[letter].length > 1) {
            let index = obj[letter].pop()
            document.getElementById(index).innerText = letter
            checklength--;
            if (obj[letter].length == 0) {
                delete obj[letter]
            }
        }
        else {
            let index = obj[letter]
            document.getElementById(index).innerText = letter
            checklength--;

            // if(obj[letter].length==0){
            delete obj[letter]

        }
        if (checklength == 0) {
            console.log("you win")
            document.getElementById('hidden').style.display = 'block'
            document.getElementById('loose').innerHTML= ''
            document.getElementById('keyboard').innerHTML= ''
            document.getElementById('inputs').innerHTML= ''
            // document.getElementById('chance').innerHTML= ''

        }
    }
    else {
        count--            
        
        if (count === 0) {
            document.getElementById('chances').innerText = count
            document.getElementById('keyboard').innerHTML= ''
            document.getElementById('inputs').innerHTML= ''
            // document.getElementById('chance').innerHTML= ''
            document.getElementById('hidden').style.display='flex'
            document.getElementById('won').innerHTML=''
            document.getElementById('wons').style.display='none'
            document.getElementById('loose').style.display='block'
            
        }
        else{
            document.getElementById('chances').innerText = count

        }
    }

}
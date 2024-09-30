let sec = 0
let min = 0
let hr = 0

document.getElementById("sec").innerText = `Sec: ${sec}`
document.getElementById("min").innerText = `Min: ${min}`
document.getElementById("hr").innerText = `Hr: ${hr}`

function dateDay() {
    let date = new Date()
    let option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let currentdate = date.toLocaleDateString('en-US', option)
    document.getElementById("date").innerText = currentdate
}

dateDay()

setInterval(() => {
    sec++
    if (sec === 60) {
        sec = 0
        min++
    }
    if (min === 60) {
        min = 0
        hr++
    }
    if (hr === 24) {
        hr = 0
    }
    document.getElementById("sec").innerText = `Sec: ${sec}`
    document.getElementById("min").innerText = `Min: ${min}`
    document.getElementById("hr").innerText = `Hr: ${hr}`
}, 1000)

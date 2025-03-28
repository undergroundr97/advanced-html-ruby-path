const pass = document.getElementById('password')
const check_pass = document.getElementById('check_pass')
const sub_btn = document.getElementById('sub_btn')
const pass1 = document.querySelector('.pass1')
const littlespan = document.createElement('span')

function validation() {
    littlespan.innerHTML = ""
    littlespan.style.color = 'red'
    littlespan.style.fontFamily = 'sans-serif'
    pass1.appendChild(littlespan)
    littlespan.innerText = ""
    if(pass.value.length < 8){
        littlespan.innerText = "Password must be atleast 8 char length!"
        sub_btn.disabled = true
        return;
    }
    if (pass.value !== check_pass.value){
        littlespan.innerText = "Password does not match!"
        sub_btn.disabled = true
        return;
    }
    if (pass.value === check_pass.value){
        littlespan.innerText = ""
        sub_btn.disabled = false
        return
    }
}
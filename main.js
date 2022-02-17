function generate_pin() {
    let pin = Math.round(Math.random() * 10000);
    let pin_length = (pin + "").length;
    if (pin_length == 4) {
        return pin;
    }
    else {
        pin = generate_pin();
        return pin;
    }
}

function pin_select() {
    const final_pin = generate_pin();
    console.log(final_pin);
    document.getElementById('generate-pin-form').value = final_pin;
}


document.getElementById('keypad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    num = event.target.innerText;
    if (isNaN(num)) {
        if (num == 'C'){
            document.getElementById('user-pin-form').value = "";
        }
        else if(num == '<'){
            current_num = document.getElementById('user-pin-form').value+'';
            new_num = ''
            for(let i=0; i< (current_num.length)-1; i++){
                new_num = new_num+current_num[i];
            }
            document.getElementById('user-pin-form').value = new_num;
        }
    }
    else{
        prev_num = document.getElementById('user-pin-form').value;
        current_num = prev_num+parseInt(num);
        document.getElementById('user-pin-form').value = current_num;
    }
})

function submit(){
    console.log('submitted');
    generated_pin = document.getElementById('generate-pin-form').value;
    user_input = document.getElementById('user-pin-form').value;
    document.getElementById('notify-id').style.display = 'block';

    if(generated_pin == user_input){
        document.getElementById('successful').style.display = 'block';
        document.getElementById('unsuccessful').style.display = 'none';
    }
    else{
        document.getElementById('successful').style.display = 'none';
        document.getElementById('unsuccessful').style.display = 'block';
    }
}
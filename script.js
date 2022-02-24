var text = " ";
var lettersChecked = "";
var lose_counter = 10;
var pic;
var text;
function add() {
    word.value = word.value.toLowerCase();
    text = word.value;
    text_length = text.length;
    document.getElementById("word").style.visibility = "hidden";
    document.getElementById("addButton").style.visibility = "hidden";
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'letter');
    input.setAttribute('maxlength', '1')
    document.body.appendChild(input);
    let btn = document.createElement("button");
    btn.innerHTML = "Try letter";
    btn.onclick = function checkLetter() {
        if (text_length != 0){
            letter.value = letter.value.toLowerCase();    
            if (!(lettersChecked.includes(letter.value)) && text_length != 0){
                var img = document.getElementById(letter.value);
                img.style.visibility = "visible";
                lettersChecked += letter.value;
                if ((text.includes(letter.value)) && lose_counter != 0) {
                    while (text.includes(letter.value)) {
                        text = text.replace(letter.value, '');
                        text_length = text.length;
                        var poz = document.getElementById('' + letter.value + letter.value);
                        poz.style.visibility = "visible";
                        poz.setAttribute('id', 'solved');
                        if (text_length == 0) {
                            let btn = document.createElement("button");
                            btn.innerHTML = "You win!";
                            btn.onclick = function () {
                                location.reload();
                            };
                            document.body.appendChild(btn);
                        }
                    }
                } else if (lose_counter > 1) {
                    --lose_counter;
                    alert('You have ' + lose_counter + ' tries remaining...')
                } else {
                    alert('You hanged!')
                    location.reload();
                }
                console.log(letter.value);
                console.log(lettersChecked);
                console.log(text_length);
                document.getElementById('letter').value='';
            } else if (text_length != 0) {
                alert('You already entered this letter');
            }
        }
    }

    document.body.appendChild(btn);
    var length = text.length;
    for (var i = 0; i < length; ++i) {
        window.pic = document.createElement("img");
        var src = document.getElementById("header");
        pic.src = text[i].toString()+".jpg";
        pic.style.visibility = "hidden";
        pic.setAttribute('id', '' + text[i].toString() + text[i].toString());
        src.appendChild(pic);
    }
}


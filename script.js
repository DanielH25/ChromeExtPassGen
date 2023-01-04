document.getElementById("reload").addEventListener('click', function () {
    var text = document.getElementById('textField');
    const result = makeid(13)
    text.value = "";
    text.value += result;
});
document.querySelector("#copy").addEventListener("click", copy);
function copy() {
    var copyText = document.querySelector("#textField");
    copyText.select(); document.execCommand("copy");
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!+=*&^%$£"@#.~<>,.;:[]{}()_-?';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
import './App.css';


function App() {

  function reload() {
    var text = document.getElementById('textField');
    const result = makeid(13)
    text.value = "";
    text.value += result;
  };

  //document.getElementById("reload").addEventListener('click', function () {
  //  var text = document.getElementById('textField');
  //  const result = makeid(13)
  //  text.value = "";
  //  text.value += result;
  //});
//
  //document.querySelector("#copy").addEventListener("click", copy);
//
  //function copy() {
  //    var copyText = document.querySelector("#textField");
  //    copyText.select(); document.execCommand("copy");
  //}
//

  function makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!+=*&^%$£"@#.~<>,.;:[]{}()_-?';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }

  return (
    <div className="App">
        <h3>Generate a password</h3>
        <input type="text" value="" id="textField" readonly />
        <p>  </p>
        <button onClick={reload} id="reload" value="reload" />
        <p>  </p>
        <button onClick={copy} id="copy">Copy</button>
        <br />
    </div>
  );
}

export default App;

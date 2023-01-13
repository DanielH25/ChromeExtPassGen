import './App.css';


function App() {

  function Reload() {
    var text = document.getElementById('textField');
    const result = makeid(13)
    text.value = "";
    text.value += result;
  };

  function Copy() {
    var copyText = document.getElementById("textField");
    copyText.select();
    
    navigator.clipboard.writeText(copyText.value);
  };

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
        <input name="textField" type="text" value="" id="textField" readonly />
        <p>  </p>
        <button onClick={Reload} id="reload" value="reload">Reload</button>
        <p>  </p>
        <button onClick={Copy} id="copy">Copy</button>
        <br />
    </div>
  );
}

export default App;

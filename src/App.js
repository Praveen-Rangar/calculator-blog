import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <input className="" type="text" />
      </form>

      <div className="keypad">
        <button className="highlights" id="clear">
          Clear
        </button>
        <button className="highlights" id="backSpace">
          C
        </button>

        <button className="highlights" name="/">
          &divide;
        </button>

        <button name="7">7</button>
        <button name="8">8</button>
        <button name="9">9</button>
        <button className="highlights" name="*">
          &times;
        </button>
        <button name="4">4</button>
        <button name="5">5</button>
        <button name="6">6</button>
        <button className="highlights" name="-">
          &ndash;
        </button>
        <button name="1">1</button>
        <button name="2">2</button>
        <button name="3">3</button>
        <button className="highlights" name="+">
          +
        </button>
        <button name="0">0</button>
        <button name=".">.</button>
        <button className="highlights" id="result">
          =
        </button>
      </div>
    </div>
  );
}

export default App;

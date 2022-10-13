import "./App.css";
import CalculatorDisplay from "./components/CalculatorDisplay/CalculatorDisplay";
import CalculatorButton from "./components/NumberButton/NumberButton";

function App() {
  return (
    <main className="grow flex-col flex justify-center items-center bg-zinc-400	">
      <div className="p-3 border-4 rounded-xl">
        <div className="flex w-fit flex-col">
          <CalculatorDisplay />
          <div className="flex">
            <CalculatorButton
              text="AC"
              id="clear"
              className="h-16 w-40"
              bgColor="bg-red-600"
            />
            <CalculatorButton text="/" id="divide" bgColor="bg-gray-500" />
            <CalculatorButton text="x" id="multiply" bgColor="bg-gray-500" />
          </div>
          <div className="flex">
            <CalculatorButton text="7" id="seven" />
            <CalculatorButton text="8" id="eight" />
            <CalculatorButton text="9" id="nine" />
            <CalculatorButton text="-" id="subtract" bgColor="bg-gray-500" />
          </div>
          <div className="flex">
            <CalculatorButton text="4" id="four" />
            <CalculatorButton text="5" id="five" />
            <CalculatorButton text="6" id="six" />
            <CalculatorButton text="+" id="add" bgColor="bg-gray-500" />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex">
                <CalculatorButton text="1" id="one" />
                <CalculatorButton text="2" id="two" />
                <CalculatorButton text="3" id="three" />
              </div>
              <div className="flex">
                <CalculatorButton text="0" id="zero" className="h-16 w-40" />
                <CalculatorButton text="." id="decimal" />
              </div>
            </div>
            <CalculatorButton
              text="="
              id="equals"
              className="w-20"
              bgColor="bg-cyan-800"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

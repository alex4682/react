import "./App.css";

const num1 = parseFloat(prompt("введіть перше число:"));
const num2 = parseFloat(prompt("введіть друге число:"));

const sum = num1 + num2;
const rizn = num1 - num2;
const mnozh = num1 * num2;
const dil = num1 / num2;

export default function Nums() {
  return (
    <div className="nums">
      <span>Сума: {sum}</span>
      <span>Різниця: {rizn}</span>
      <span>Добуток: {mnozh}</span>
      <span>Частка: {dil}</span>
    </div>
  );
}

import "./App.css";

const temperature = parseFloat(prompt("Enter the temperature in Celsius: "));
let text = "";

if (temperature >20){
    text = "На вулиці тепло"
}
else{
    text = "На вулиці прохолодно"
}

export default function Temp() {
  return (
    <div className="Temp">
      <p>{text}</p>
    </div>
  );
}

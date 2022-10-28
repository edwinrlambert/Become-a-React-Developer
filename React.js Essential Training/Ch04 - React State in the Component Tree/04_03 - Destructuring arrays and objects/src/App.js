import './App.css';

const [firstCity, secondCity] = ["Tokyo", "Kochi", "Vancouver"];
console.log(firstCity);
console.log(secondCity);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Card from './Card/Card';

function App() {
  const [guns, setGuns] = useState([])
  console.log(guns);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="card-container">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;

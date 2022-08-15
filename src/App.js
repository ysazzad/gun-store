import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
function App() {
  const [guns, setGuns] = useState([])
  const [cart, setCart] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun]
    setCart(newCart)
  }
  console.log(guns);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])
  return (
    <div className="App">
      <Navbar openModal={openModal} cart={cart}></Navbar>

      <div className="card-container">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Card>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <button style={{ background: "orange", color: "white", border: "none", padding: "5px" }} onClick={closeModal}>Close</button>
          {
            cart.map((item) => (
              <h1>{item.name}</h1>
            ))
          }
        </div>

      </Modal>
    </div>
  );
}

export default App;

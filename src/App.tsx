import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
const App = () => {
  const [name, setName] = useState('Felipe');
  const handleName = () => {
    setName('Grassi');
  }

  const [age, setAge] = useState(34);
  const handleAge = () => {
    setAge(20);
    setBg('#00ff00')
  }
  const handleAge2 = () => {
    setAge(100);
    setBg('#bbbb00')
  }

  const [bg, setBg] = useState('#ff0000');
  const handleClick = () => {
    setBg('#0000ff');
  }

  const [list, setList] = useState([
    'frase 1',
    'segunda frase',
    'frase 3',
  ]);

  return (
    <div style={{ backgroundColor: bg }}>
      <Header name={name} age={age} />
      <button onClick={handleClick}>muda fundo</button>
      <button onClick={handleName}>muda nome</button>
      {age < 29 &&
        <button onClick={handleAge2}>idade 100</button>
      }
      {age > 30 &&
        <button onClick={handleAge}>idade 20</button>
      }
      <hr />
      <ul>
        {list.map((frase, index) => (
          <li key={index}>{frase}</li>
        ))}
      </ul>
      <Footer />
    </div >
  );
}
export default App;
import logo from './logo.svg';
import Typical from 'react-typical';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typical
      steps={['I am',1000, 'I am Front end developer',500]}
      loop={Infinity}
      wrapper="p"
      />
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{

    const API = fetch(process.env.REACT_APP_BASE_URL + 'products')
    API.then((data)=>data.json())
    .then(data=>setData(data.products))
    console.log(data)

  },[])
  return (
    <div className="App">
      <header className="App-header">
        {data&&data.map((value, index) => (
  <p key={index}>
    {value.title} {/* Replace 'someProperty' with the property you want to access */}
  </p>
))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

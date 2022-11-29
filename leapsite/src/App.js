import logo from './logo.png';
import phrase from './phrase.png';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { CSVLink, CSVDownload } from "react-csv";



function App() {

  const [name, setName] = useState("");
  const [emails, setEmails] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted`)
    setEmails(emails => emails.concat(name));
  }

  const csvData = emails;
  
  useEffect(() => {
    localStorage.setItem('email', JSON.stringify(emails));
  }, [emails]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={phrase} className="App-phrase" alt="phrase" />
        <text>Join the Mailing List!</text>
        <form className = "form" onSubmit={handleSubmit}>
            <input 
              className='input'
              type="text" 
              value={name}
              placeholder='E-mail'
              onChange={(e) => setName(e.target.value)}
            />
          <input  className='button' type="submit" />
        </form>
      </header>
      {/* <CSVLink className= "link" data={csvData}>Download me</CSVLink> */}

    </div>
  );
}

export default App;

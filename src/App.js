import logo from './logo.svg';
import './App.css';
import './my.css';
import First from './my';
function App() {

    const firstobj=[{
      title:"First app",
      describe:"we start now"
    },
    {
      title:"2nd app",
      describe:"we start today"
    },
    {
      title:"3th app",
      describe:"we start tomorrow"
    }]
    
    const firstobject=firstobj.map((item)=> {
      console.log(item);
      
      return(
        
        <div className="App">
        
        <h1>{item.title+" "+item.describe}</h1> 
        </div>
      )
    })

  return (
    <div className="App">
     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}

       <h1>Welcome to Reactjs</h1>
       <p>Lorem Ipsum Dolor</p>
       {/* <h1>{firstobj.title + " " + firstobj.describe }</h1> */}
       <div   className='my'>
       <p>{firstobject}</p>
       
       </div>
    <First />
    <div className='Aaaa'>
    <input placeholder='Enter the details'></input>
    </div>
    </div>
    

  );
       
}

export default App;

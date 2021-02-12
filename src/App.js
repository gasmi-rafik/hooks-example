// import React , {useState , useEffect} from 'react'
// import './App.css';

// function App() {
//   const [ count , setCount] = useState(0)
//    useEffect (()=>{
//      document.title= `vous avez cliqué ${count} fois `
//    })
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p> Vous avez cliqué {count} fois</p>
//         <button onClick={()=> setCount(count + 1)} >cliquez ici</button>
//       </header>
//     </div>
//   );
// }

// export default App;

//*****************custom hook **************/
import React , {useState  , useRef} from 'react'
import './App.css';
import useCounter from './component/useCounter'
function App() {
  const [ count , setCount] = useState(0)
  useCounter(count) ;
  console.log(typeof(count))

  const inputRef = useRef(null)
 
  return (
    <div className="App">
      <header className="App-header">
        <p> Vous avez cliqué {count} fois</p>
        <button onClick={()=> setCount(count + 1)} >cliquez ici</button>
        <br/>
        <input type="text" placeholder="enter you name"  ref={inputRef} />
        <input type="text" placeholder="enter you Last name"  ref={inputRef} />
        <button onClick={()=>console.log(inputRef.current.value) } >submit</button>
      </header>
    </div>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import {createContext,useState} from 'react';
import Home from './Home';
export const UserContext = createContext();
var rno = 1 ;
function App() {
  const [userData,setUserData] = useState("CDMI");
  return (
    <div className="App">
      <UserContext.Provider value={{"name":userData , "rno":rno}}>

          <Home/>

      </UserContext.Provider>
    </div>
  );
} 

export default App;

import  {useState, createContext}from 'react'
import './App.css';
import AffirmationCard from './components/AffirmationCard';
import AffirmationList from './components/AffirmationList';



export const UserContext =createContext;

function App() {
  return (
    // <UserContext.Provider value ={{user, setUser}}>
    <div className='App'>
     
        <h1> Daily Affirmations </h1>
        <AffirmationList />
        <AffirmationCard/>
           
 
     </div>
    
    // </UserContext.Provider>
  )
}

export default App;

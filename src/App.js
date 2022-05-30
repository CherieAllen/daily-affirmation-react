import  {useState, createContext}from 'react'
import { Layout } from 'antd';
import './App.css';
import AffirmationCard from './components/AffirmationCard';
import AffirmationList from './components/AffirmationList';

const {Header , Content} = 'Layout'

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

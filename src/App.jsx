import  { useEffect, useState } from 'react';
import Card from './Card';
import './App.css';



function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData=async()=>{
      try {
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
        const data = await response.json();
        setUserData(data.results)
      } catch (error) {
        console.error( error);
        
      }
    }
    fetchData() ;    
  }, []);

  

  return (
    <>
      {userData.length > 0 && <Card  img={userData[0].picture.large} firstName={userData[0].name.first} lastName={userData[0].name.last} gender={userData[0].gender} phone={userData[0].phone} />}
    </>
  );
}

export default App;

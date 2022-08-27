
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import FilterSwitch from './Component/FilterSwitch/FilterSwitch';
import superagent from "superagent";
import Post from './Component/Post/Post';

function App() {
  const [data, setData] = useState([]);

  const [proof, setProof] = useState('reactjs');

  const handleData = (str) =>{
    superagent
    .get(`https://hn.algolia.com/api/v1/search_by_date?query=${str}&page=0`)
    .then(res => {
       console.log(`https://hn.algolia.com/api/v1/search_by_date?query=${str}&page=0`)
       setData(res.body.hits);
    })
    .catch(err => {
       console.log(err)
    });
  }

  const handleKeywordChange= (str)=>{
    setProof(str);
    handleData(str);
  }

  useEffect(()=>{
    handleData(proof);
  },[]);
  
  return (
    <div className="App">
      <Header />
      <FilterSwitch/>
      <select onChange={(val) => handleKeywordChange(val.target.value)} defaultValue={'reactjs'}>
        <option value='reactjs'>reactjs</option>
        <option value='angular'>angular</option>
        <option value='vuejs'>vuejs</option>
      </select>

      <div className="PostContainer">
        {data.map((el, i) => {
          return <Post 
            author={el.author} 
            key={i+"-"+Date.now()} 
            title={ el.title? el.title : el.story_title} time={el.created_at}
        />          
        })}
      </div>
    </div>
  );
}

export default App;

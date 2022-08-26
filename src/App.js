
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import FilterSwitch from './Component/FilterSwitch/FilterSwitch';
import superagent from "superagent";
import Post from './Component/Post/Post';

function App() {
  const [data, setData] = useState([{}]);
  const [keyword, setKeyword] = useState([{}]);
  const handdleData = (arr) =>{setData(arr)}



  useEffect(()=>{
    superagent
    .get('https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0')
    .then(res => {
       // res.body, res.headers, res.status
       console.log(res.body)
       handdleData( res.body.hits);
    })
    .catch(err => {
       // err.message, err.response
    });
    alert("useEffect");

  } ,[]);
  
  return (
    <div className="App">
      <Header />
      <FilterSwitch/>
      <div className="PostContainer">
        {
        data.map((el, i) => {
          console.log(el)
          return <Post key={i+"-"+Date.now()} title={ el.title? el.title : el.story_title} time={el.created_at}/>          
        })
        }
      </div>
    </div>
  );
}

export default App;

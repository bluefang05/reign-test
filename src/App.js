
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import FilterSwitch from './Component/FilterSwitch/FilterSwitch';
import superagent from "superagent";
import Post from './Component/Post/Post';
import SelectComponent from './Component/SelectComponent/SelectComponent';
import IconReact from './assets/icons/react-icon.png';
import IconAngular from './assets/icons/angular-icon.png';
import IconVue from './assets/icons/vue.png';
import PaginationRounded from './Component/PaginationComponent/PaginationRounded';

export default function App() {
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState('reactjs');
  const [pageNumber, setPageNumber] = useState(0);

  const selectOptions = [
    {
      value: 'reactjs',
      valueName: 'React',
      icon: IconReact
    },
    {
      value: 'angular',
      valueName: 'Angular',
      icon: IconAngular
    },
    {
      value: 'vuejs',
      valueName: 'Vue',
      icon: IconVue
    }
  ]

  const handleData = (str,num) =>{
    superagent
    .get(`https://hn.algolia.com/api/v1/search_by_date?query=${str}&page=${num}`)
    .then(res => {
       setData(res.body.hits);
    })
    .catch(err => {
       console.log(err)
    });
  }

  const handleKeywordChange= (str,num)=>{
    setDataName(str);
    handleData(str,num);
  }

  useEffect(()=>{
    handleData(dataName,pageNumber);
  },[]);
  
  return (
    <div className="App">
      <Header />
      <FilterSwitch/>
      <SelectComponent 
        defaultValue={dataName}
        onChange={(val) => handleKeywordChange(val.target.value,pageNumber)} 
        selectOptions={selectOptions}
      />
      <div>
        {data.map((el, i) => {
          return <Post 
            created_at={el.created_at}
            author={el.author} 
            key={i+"-"+Date.now()} 
            title={ el.title? el.title : el.story_title} time={el.created_at}
        />          
        })}
      </div>
      <PaginationRounded
        page={pageNumber}
        setNumber={setPageNumber}
        handleData={handleData(dataName,pageNumber)}
      />
      <h1>number {pageNumber}</h1>
    </div>
  );
}

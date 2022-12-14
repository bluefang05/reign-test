
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import FilterSwitch from './Component/FilterSwitch/FilterSwitch';
import superagent from "superagent";
import BodyPost from './Component/BodyPost/BodyPost';
import SelectComponent from './Component/SelectComponent/SelectComponent';
import IconReact from './assets/icons/react-icon.png';
import IconAngular from './assets/icons/angular-icon.png';
import IconVue from './assets/icons/vue.png';
import PaginationRounded from './Component/PaginationComponent/PaginationRounded';

export default function App() {
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState('select');
  const [pageNumber, setPageNumber] = useState(0);
  let [booleanFav, setBooleanFav] = useState(false);

  if(localStorage.getItem('favs') !== null){
    JSON.parse(localStorage.getItem('favs'))
  }else{
    localStorage.setItem('favs', JSON.stringify([]));
  }

  
  
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
    handleData(dataName === 'select' ? 'reactjs' : dataName ,pageNumber);
  },[dataName,pageNumber]);
  
  return (
      <div className="App">
        <Header />
        <FilterSwitch
          setFalse={()=>setBooleanFav(false)}
          setTrue={()=>setBooleanFav(true)}
        />
        <SelectComponent 
          defaultValue={dataName}
          onChange={(val) => handleKeywordChange(val.target.value,pageNumber)} 
          selectOptions={selectOptions}
        />
        <BodyPost 
          booleanFav={booleanFav}
          data={data}
        />
        <PaginationRounded
          page={pageNumber}
          setNumber={setPageNumber}
        />
      </div>
  );
}

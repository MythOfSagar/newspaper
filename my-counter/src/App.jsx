import './App.css';
import {useEffect,useState} from "react"
import NewsPaper from './component/NewsPaper';

function App() {

  const[date,setDate]=useState("")
  const[MumbaiChoufer,setMCDate]=useState("")

  useEffect(()=>{
    
    const dateArr=Date().split(" ")

    const month=dateArr[1]
    const date=dateArr[2]
    const year=dateArr[3]

    let stringArr=[]
    
    if(month==="Jan"){stringArr=[year,"01",date]}
    else if(month==="Feb"){stringArr=[year,"02",date]}
    else if(month==="Mar"){stringArr=[year,"03",date]}
    else if(month==="Apr"){stringArr=[year,"04",date]}
    else if(month==="May"){stringArr=[year,"05",date]}
    else if(month==="Jun"){stringArr=[year,"06",date]}
    else if(month==="Jul"){stringArr=[year,"07",date]}
    else if(month==="Aug"){stringArr=[year,"08",date]}
    else if(month==="Sep"){stringArr=[year,"09",date]}
    else if(month==="Oct"){stringArr=[year,"10",date]}
    else if(month==="Nov"){stringArr=[year,"11",date]}
    else if(month==="Dec"){stringArr=[year,"12",date]}
    
   setMCDate(stringArr.join("-"))
   setDate(stringArr.join(""))
    
  },[])
    return (
    <div className="App">
     <NewsPaper 
     title="Mumbai Chaufer"
     thumbNail="http://mumbaichoufer.com/includes/images/MumbaiChoufernew.png"
     paperURL={`http://mumbaichoufer.com/editionpage.php?edn=MumbaiChoufer&date=${MumbaiChoufer}&edid=MCFR_MAIN&pid=MCFR_MAIN&issueid=MCFR_MAIN_20221123&pn=1#Page/1`}
     
    ></NewsPaper>
    <NewsPaper 
     thumbNail="http://epaper.saamana.com/maha/includes/images/VVMHEAD.png"
     paperURL={`http://epaper.saamana.com/EditionPage/EPpage.php?edn=Mumbai&isid=SAMANA_MUM_${date}#Page/1`}
     
    ></NewsPaper>
    </div>
  );
}

export default App;

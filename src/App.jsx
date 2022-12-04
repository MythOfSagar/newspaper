import './App.css';
import {useEffect,useState} from "react"
import NewsPaper from './component/NewsPaper';
import { indianDate, monthInDigits } from './component/Functions';
import Saamna from"./component/Saamna.png"
import MumbaiChoufernew from "./component/MumbaiChoufernew.png"



function App() {

  const[dateStr,setDate]=useState("")
  const[MumbaiChoufer,setMCDate]=useState("")
  const[status,setStatus]=useState(true)
  const dateArr=Date().split(" ")

    const month=dateArr[1]
    const date=dateArr[2]
    const year=dateArr[3]

    const changeDate=(e)=>{
        console.log(e.target.value)
        setMCDate(e.target.value)
        console.log(indianDate(e.target.value))
        setDate(e.target.value.split("-").join(""))
        setStatus(true)
    }

  useEffect(()=>{
  let stringArr=[year,monthInDigits(month),date]
    
   setMCDate(stringArr.join("-"))
   setDate(stringArr.join(""))
  },[month,date,year])

    return (
    <div className="App">
      {status ? <h1 onClick={()=>setStatus(false)}>{indianDate(MumbaiChoufer)}</h1> : <input type="date" onChange={changeDate}></input>}
     <NewsPaper 
     title="Mumbai Chaufer"
     thumbNail={MumbaiChoufernew}
     paperURL={`http://mumbaichoufer.com/editionpage.php?edn=MumbaiChoufer&date=${MumbaiChoufer}&edid=MCFR_MAIN&pid=MCFR_MAIN&issueid=MCFR_MAIN_20221123&pn=1#Page/1`}
     
    ></NewsPaper>
    <NewsPaper 
     thumbNail={Saamna}
     paperURL={`http://epaper.saamana.com/EditionPage/EPpage.php?edn=Mumbai&isid=SAMANA_MUM_${dateStr}#Page/1`}
     
    ></NewsPaper>
    </div>
  );
}

export default App;

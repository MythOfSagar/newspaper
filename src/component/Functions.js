export const monthInDigits=(month)=>{

    if(month==="Jan"){return "01"}
    else if(month==="Feb"){return "02"}
    else if(month==="Mar"){return "03"}
    else if(month==="Apr"){return "04"}
    else if(month==="May"){return "05"}
    else if(month==="Jun"){return "06"}
    else if(month==="Jul"){return "07"}
    else if(month==="Aug"){return "08"}
    else if(month==="Sep"){return "09"}
    else if(month==="Oct"){return "10"}
    else if(month==="Nov"){return "11"}
    else if(month==="Dec"){return "12"}

}

export const indianDate=(us)=>{

    let usDate=us.split("-")

    let year=usDate[0]
    let month=usDate[1]
    let date=usDate[2]

    if(month==="01"){return [date,"Jan",year].join("-")}
    else if(month==="02"){return [date,"Feb",year].join("-")}
    else if(month==="03"){return [date,"Mar",year].join("-")}
    else if(month==="04"){return [date,"Apr",year].join("-")}
    else if(month==="05"){return [date,"May",year].join("-")}
    else if(month==="06"){return [date,"Jun",year].join("-")}
    else if(month==="07"){return [date,"Jul",year].join("-")}
    else if(month==="08"){return [date,"Aug",year].join("-")}
    else if(month==="09"){return [date,"Sep",year].join("-")}
    else if(month==="10"){return [date,"Oct",year].join("-")}
    else if(month==="11"){return [date,"Nov",year].join("-")}
    else if(month==="12"){return [date,"Dec",year].join("-")}

}
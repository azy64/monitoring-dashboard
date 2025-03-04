import { useEffect, useState } from "react";

const DataGrid=({heading,dataRows})=>{
    let count=0;
    const[rows,setRows]=useState([]);
    useEffect(()=>{
        if(rows.length===0){
            console.log("pas de changement...")
            setRows(dataRows);
        } 
        console.log("changement...");
    },[rows]);
    const changeDirection=(e)=>{
        if(e.target.classList.contains("sorted-up")){
            e.target.classList.remove("sorted-up");
            e.target.classList.add("sorted-down")
        }
        else{
            e.target.classList.remove("sorted-down");
            e.target.classList.add("sorted-up")
        }
        sorteTable(e,"asc");
        
    }
    const sorteTable=(event,order)=>{
        const attribute= event.target.dataset.source
        console.log("attribute:",attribute);
        //console.log("old data:",dataRows);
        const data = rows.sort((a,b)=>{
           if(a[`${attribute}`]<b[`${attribute}`]) return order==="asc"? -1:1;
           if(a[`${attribute}`]>b[`${attribute}`]) return order==="asc"? 1:-1;
           return 0;
    
        })
        setRows(data);
        console.log("new data:",data);
        
    }
    return(
        <div>
            <table className="tunaweza-table" style={style.container}>
                <thead>
                    <tr>
            {
                heading.map(item=>(
                    <th draggable key={item.key}>{item.title}
                        <span className="sorted-up" onClick={changeDirection} data-source={item.key}>
                        </span>
                    </th>
                ))
            }
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                    rows.map(row=>(
                        <tr key={Date.now()+""+row.id}>
                            {
                                Object.keys(heading).map(element=>(
                                    <td key={Date.now()+""+Math.random()}>
                                  {  Object.keys(heading[element]).map(col => (
                                        row[heading[element][col]]
                                    ))
                                    }
                                    </td>
                                ))
                            }
                            <td><span>-</span></td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    )
}
const style= {
    container:{
        width:"100%",
        fontSize:"12px",
    }
}
export default DataGrid;
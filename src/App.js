import React,{useState} from "react";
import './App.css';
const App = () =>{
    
    const [result,setResult] =useState("");

    const clickHandler=(evnt)=>{
        setResult(result.concat(evnt.target.value))
    }

    const clear_display = () =>{
        setResult("");
    }
    const back_space = () => {
        setResult(result.slice(0, -1));
    }
    const calculate =()=>{
        try{
        setResult(eval(result).toString());
        }
        catch(err){
            setResult("Error");
        }
        }
     return(
        <div className="calculator">
            <input type="text" placeholder="0" id="ans" value={result}/>
            <input type="button" value="9" className="btn" onClick={clickHandler}/>
            <input type="button" value="8" className="btn" onClick={clickHandler}/>
            <input type="button" value="+" className="btn" onClick={clickHandler}/>
            <input type="button" value="7" className="btn" onClick={clickHandler}/>
            <input type="button" value="6" className="btn" onClick={clickHandler}/>
            <input type="button" value="-" className="btn" onClick={clickHandler}/>
            <input type="button" value="5" className="btn" onClick={clickHandler}/>
            <input type="button" value="4" className="btn" onClick={clickHandler}/>
            <input type="button" value="*" className="btn" onClick={clickHandler}/>
            <input type="button" value="3" className="btn" onClick={clickHandler}/>
            <input type="button" value="2" className="btn" onClick={clickHandler}/>
            <input type="button" value="/" className="btn" onClick={clickHandler}/>
            <input type="button" value="1" className="btn" onClick={clickHandler}/>
            <input type="button" value="0" className="btn" onClick={clickHandler}/>        
            <input type="button" value="." className="btn" onClick={clickHandler}/>
            <input type="button" value="=" className="btn" onClick={calculate}/>
            <input type="button" value="C" className="btn" onClick={back_space}/>
            <input type="button" value="clear" className="btn" onClick={clear_display}/>
        </div>
     )
}
export default App;
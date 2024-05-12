import { useRef } from "react";
import { useDispatch } from "react-redux"
import { counterAction } from "../store/counter";

export default function CounterBtn(){

    const getData=useRef();

    const dispatch=useDispatch();

    const handleIncrement = () =>{
        dispatch(counterAction.increment());
    }

    const handleDecrement = () =>{
        dispatch(counterAction.decrement());
    }

    const handleAdd = () =>{
        dispatch(counterAction.addition(getData.current.value));
        getData.current.value="";
    }

    const handleSubtract =()=>{
        dispatch(counterAction.subtraction(getData.current.value))
        getData.current.value="";
    }


    return (
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}><b>+1</b></button>
            <button type="button" className="btn btn-danger btn-lg px-4" onClick={handleDecrement}><b>-1</b></button>
            <br />
            <br />
         </div>
         <br />
         <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <input type="text" ref={getData} placeholder="Enter Num"/>
            <button type="button" className="btn btn-primary" onClick={handleAdd}>Add</button>
            <button type="button" className="btn btn-warning" onClick={handleSubtract}>Subtract</button>
        </div>
        </>
    )
}
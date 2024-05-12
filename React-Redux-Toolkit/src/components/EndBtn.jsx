import { useDispatch } from "react-redux"
import { counterToggleAction } from "../store/toggle";

export default function EndBtn(){

    let dispatch=useDispatch();

    
    return (
        <>
        <div className="alert alert-info ms-auto me-auto" role="alert" style={{width:"25rem", fontSize:"2rem"}}>
        Start Game... 
        </div>
        <div className="btn btn-success" onClick={()=> dispatch(counterToggleAction.toggle())}>Click here...</div>
        </>
    )
}
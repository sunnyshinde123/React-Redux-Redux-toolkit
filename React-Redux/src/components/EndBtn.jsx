import { useDispatch } from "react-redux"

export default function EndBtn(){

    let dispatch=useDispatch();

    let handleClick=()=>{
        dispatch({type:"toggle", payload:true})
    }
    return (
        <>
        <div className="alert alert-info ms-auto me-auto" role="alert" style={{width:"25rem"}}>
        Start Game... 
        </div>
        <div className="btn btn-success" onClick={handleClick}>Click here...</div>
        </>
    )
}
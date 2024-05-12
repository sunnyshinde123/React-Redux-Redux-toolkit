import { useSelector } from "react-redux"

export default function CounterDisplay(){
    const counter=useSelector(store=> store.counter)
    return (
        <>
        <p className="lead mb-4" style={{fontWeight:"500", fontSize:"1.5rem"}}>Counter Value : {counter} </p>
        </>
    )
}
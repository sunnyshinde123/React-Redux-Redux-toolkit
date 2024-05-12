import {createStore} from "redux"

const initialValue={
    counter:0,
    toggle:false
}

const reducer=(store=initialValue, action)=>{
    if(action.type=="INCREMENT"){
        return {...store, counter:store.counter+1}
    }else if(action.type=="DECREMENT"){
        return {...store, counter:store.counter-1}
    }else if(action.type=="ADDITION"){
        return {...store, counter:store.counter+Number(action.payload)}
    }else if(action.type=="SUBTRACT"){
        return {...store, counter:store.counter-Number(action.payload)}
    }else if(action.type=="toggle"){
        return {...store, toggle:action.payload}
    }
    return store;
}

const counterStore=createStore(reducer);

export default counterStore;
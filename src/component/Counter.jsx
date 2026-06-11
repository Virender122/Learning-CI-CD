import { useReducer } from "react"
///reducer
const initialState = {
    count : 0
}
function reducer (state, action){
    switch(action.type){
        case 'INCREMENT' :
            return {
                count : state.count+1
            }
        case 'DECREMENT' :
            return { 
                count : state.count-1
            }
        default : 
        return state
    }
}
export function NewApp(){
    const [count , distpatch] = useReducer(reducer, initialState)
    return(
        <>
        <h1>{count.count}</h1>
        <div>
            <button onClick ={()=>distpatch({type : "INCREMENT"})}>+</button>
        </div>
        <div>
            <button onClick ={()=>distpatch({type : "DECREMENT"})}>-</button>
        </div>
        </>
    )
}
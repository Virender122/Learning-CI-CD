import { userContext } from "./Createcontext";
import { useContext } from "react";
export function Counter() {
    const {count, setCount} = useContext(userContext)
    const handleClick = () => {
        setCount(count + 1)
    }
    const handleClicking = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h1>cont: {count}</h1>
            <div>
                <button onClick={handleClick}> +</button>

            </div>
            <div>
                <button onClick={handleClicking}>-</button>
            </div>
        </>
    )
}
import { useCounter } from "../hooks/useCounter";


const CounterHook = () => {

     const { elementToAnimated, counter, handleClick } = useCounter({
          maxCount: 15
     });

     return (
          <>
               <h1>CounterHook:</h1>
               <h2 ref={elementToAnimated}> {counter}</h2>

               <button
                    onClick={handleClick}
               >
                    +1
               </button>
          </>
     )
}

export default CounterHook
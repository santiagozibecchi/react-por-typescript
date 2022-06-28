import { useReducer } from "react"
import { CounterState } from "./interfaces/interfaces"
import { counterReducer } from "./state/CounterReducer"
import * as CounterActions from './actions/actions';

const initialState: CounterState = {
     counter: 0,
     previous: 0,
     changes: 0,
}

const CounterReducerComponent = () => {

     const [counterState, dispatch] = useReducer(counterReducer, initialState)

     const handleReset = () => {
          dispatch(CounterActions.doReset())
     };

     const increaseBy = (value: number) => {
          dispatch(CounterActions.doIncreaseBy(value))
     }

     return (
          <>
               <h1>Counter Reducer Segmentado</h1>
               <pre>
                    {JSON.stringify(counterState, null, 3)}
               </pre>

               <button onClick={handleReset}>reset</button>
               <button onClick={() => increaseBy(1)}>+1</button>
               <button onClick={() => increaseBy(5)}>+5</button>
               <button onClick={() => increaseBy(10)}>+10</button>

          </>
     )
}

export default CounterReducerComponent;
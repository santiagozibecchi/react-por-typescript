import { useReducer } from "react"

interface CounterState {
     counter: number;
     previous: number;
     changes: number;
}

const initialState: CounterState = {
     counter: 0,
     previous: 0,
     changes: 0,
}

type CounterAction =
     | { type: 'increaseBy', payload: { value: number } }
     | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

     // const { counter, changes } = state;

     switch (action.type) {
          case 'reset':
               return {
                    counter: 0,
                    changes: 0,
                    previous: 0,
               }
          case 'increaseBy':
               return {
                    ...state,
                    changes: state.changes + 1,
                    counter: state.counter + action.payload.value,
                    previous: state.counter,
               }


          default:
               return { ...state }
     }
}

const CounterReducerComponent = () => {

     const [counterState, dispatch] = useReducer(counterReducer, initialState)

     const handleReset = () => {
          dispatch({ type: 'reset' })
     };

     const increaseBy = (value: number) => {
          dispatch({ type: 'increaseBy', payload: { value } })
     }

     return (
          <>
               <h1>Counter Reducer </h1>
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
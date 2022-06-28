import { CounterAction } from "../actions/actions"
import { CounterState } from "../interfaces/interfaces"


export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

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
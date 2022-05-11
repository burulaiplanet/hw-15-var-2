import { useReducer } from 'react'

const Counter = () => {

const PLUS='PLUS'
const MINUS='MINUS'

	const reducerCount = (prevState, action) => {
		if (action.type === PLUS) {
			return prevState + 1
		}
		if (action.type === MINUS) {
			return prevState - 1
		}
        return prevState//egerde bir da logikaga barabar emes bolso anda predidushii maanisin berip koiobuz
	}

	const [counter, dispachCount] = useReducer(reducerCount, 0)

	const plusHandler = () => {
		dispachCount({ type: PLUS }) //{type:'PLUS'}=action/deistvie
	}
    const minusHandler=()=>{
        dispachCount({type:MINUS})
    }
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={plusHandler}>+</button>
			<button onClick={minusHandler}>-</button>
		</div>
	)
}

export default Counter

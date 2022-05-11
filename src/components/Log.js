// import { useState } from 'react'
// import { useEffect } from 'react'

// const Log = () => {
// 	const [state, setState] = useState(false)

// 	const [data, setData] = useState([])

// 	const toggleHandler = () => {
// 		setState((prevState) => !prevState)
// 	}
// 	useEffect(() => {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => response.json())
// 			.then((data) => setData(data))
// 		console.log('render in useEffect')
// 	}, [state])

// 	return (
// 		<div>
// 			{console.log('render')}
// 			{state && <h1>Log</h1>}
// 			<button onClick={toggleHandler}>Toggle</button>
// 		</div>
// 	)
// }
// export default Log

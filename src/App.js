import React, { useState } from 'react'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
// import Log from './components/Log'
import { useEffect } from 'react'
import Counter from './components/Counter'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const srtoredUserLoggedInfor = localStorage.getItem('isLoggedIn') //localStorage den kluch menen chakyryp atat
		if (srtoredUserLoggedInfor === '1') {
			//isLoggedIn   barby,bar bolso anda setIsLoggedIn true bolup tura beret,bizdin sluchiede Home komponenti ishtep tura beret,obnovlenie kylsa da ochup ketpeit,sebebi LocalStorage ke saltapaldyk
			setIsLoggedIn(true)
		}
	}, [])

	const loginHandler = async (email, password) => {
		localStorage.setItem('isLoggedIn', '1')

		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	return (
		<React.Fragment>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
			<Counter />
		</React.Fragment>
	)
}

export default App

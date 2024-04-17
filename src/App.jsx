// import { useState } from 'react'
import './App.css'
import AddEmployee from './components/AddEmployee.jsx'
import Employees from './components/Employees.jsx'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div>
		<h1> Kalsson </h1>
		<AddEmployee />
		<Employees />
		</div>
	)
}

export default App

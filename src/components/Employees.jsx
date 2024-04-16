import { useState } from 'react'
import { getEmployees } from '../data/crud.js'

const Employees = () => {
	const [employees, setEmployees] = useState([
		{ name: 'Testkalle', occupation: 'Testdisher', key: 'test' }
	])

	const handleGetEmployees = async () => {
		setEmployees(await getEmployees())
	}

	return (
		<div>
			<h2> Our team </h2>
			<div>
				<button onClick={handleGetEmployees}> Get employees </button>
			</div>
			{employees.map(e => (
				<section key={e.key}>
					{e.name} works as {e.occupation}.
				</section>
			))}
		</div>
	)
}

export default Employees

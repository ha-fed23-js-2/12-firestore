import { useState } from 'react'

const AddEmployee = () => {
	const [name, setName] = useState('')
	const [occupation, setOccupation] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<section>
			<form className="form">
			<h3> Register a new employee </h3>
			<section className="column">
				<label> Name </label>
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					/>
			</section>

			<section className="column">
				<label> Occupation </label>
				<input type="text"
					value={occupation}
					onChange={e => setOccupation(e.target.value)}
					/>
			</section>

			<button onClick={handleSubmit} type="submit"> Register </button>
			</form>
		</section>
	)
}

export default AddEmployee

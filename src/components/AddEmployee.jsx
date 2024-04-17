

const AddEmployee = () => {
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<section>
			<form className="form">
			<h3> Register a new employee </h3>
			<section className="column">
				<label> Name </label>
				<input type="text" />
			</section>

			<section className="column">
				<label> Occupation </label>
				<input type="text" />
			</section>

			<button onClick={handleSubmit} type="submit"> Register </button>
			</form>
		</section>
	)
}

export default AddEmployee

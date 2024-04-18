

const EditEmployee = ({ whenEditDone }) => {
	const handleSave = () => {
		// 0. stäng av formuläret så användaren inte kan skicka igen
		// 1. anropa funktionen editEmployee i crud.js
		// 2. hämta ändringarna från db med getEmployees i crud.js
		// 3. anropa setEmployees i store.js
		// 4. anropa whenEditDone så att vi stänger formuläret
		whenEditDone()
	}

	return (
		<>
		<section className="change-Info">
			<section className="name-change">
				<label>Name</label>
				<input type="text" />
			</section>
			<section className="occ-change">
				<label>Occupation</label>
				<input type="text" />
			</section>
		</section>
		<button onClick={handleSave}> 💾 </button>
		</>
	)
}

export default EditEmployee

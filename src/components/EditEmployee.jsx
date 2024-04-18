import { useState } from 'react'
import { editEmployee, getEmployees } from '../data/crud.js'
import { useStore } from '../data/store.js'

const EditEmployee = ({ employee, whenEditDone }) => {
	const [disableButton, setDisableButton] = useState(false)
	const [name, setName] = useState(employee.name)
	const [occupation, setOccupation] = useState(employee.occupation)
	const setEmployees = useStore(state => state.setEmployees)

	const handleSave = async () => {
		// 0. stäng av formuläret så användaren inte kan skicka igen
		// 1. anropa funktionen editEmployee i crud.js
		// 2. hämta ändringarna från db med getEmployees i crud.js
		// 3. anropa setEmployees i store.js
		// 4. anropa whenEditDone så att vi stänger formuläret

		setDisableButton(true)
		const updatedEmployee = { name, occupation }
		await editEmployee(employee.key, updatedEmployee)
		const updatedList = await getEmployees()
		setEmployees(updatedList)
		whenEditDone()
	}

	return (
		<>
		<section className="change-Info">
			<section className="name-change">
				<label>Name</label>
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					/>
			</section>
			<section className="occ-change">
				<label>Occupation</label>
				<input type="text"
					value={occupation}
					onChange={e => setOccupation(e.target.value)}
					/>
			</section>
		</section>
		<button disabled={disableButton} onClick={handleSave}> 💾 </button>
		</>
	)
}

export default EditEmployee

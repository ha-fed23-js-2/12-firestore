import { deleteEmployee, getEmployees } from "../data/crud.js"
import { useStore } from '../data/store.js'
import { useState } from 'react'
import EditEmployee from './EditEmployee.jsx'

const ViewEmployee = ({ employee }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const setEmployees = useStore(state => state.setEmployees)

	const handleFire = async () => {
		// anropa deleteEmployee
		// uppdatera listan, två alternativ:
		// 1a. använd getEmployees för att få en ny lista och
		// 1b. anropa setEmployees för att uppdatera store
		// 1c. React uppdaterar komponenten med alla anställda
		// 2. "fuska" - ta bort anställd från listan via Zustand

		setIsLoading(true)
		await deleteEmployee(employee.key)
		const employeesFromDb = await getEmployees()
		setEmployees(employeesFromDb)
		setIsLoading(false)
	}

	return (
		<section className="row border-bottom alternate">
			{isEditing ? (
				<EditEmployee
					employee={employee}
					whenEditDone={() => setIsEditing(false)} />
			) : (
				<>
				<div className="flex-grow"> {employee.name} works as {employee.occupation}. </div>
				<button onClick={() => setIsEditing(true)}> 🖊️ </button>
				<button disabled={isLoading} onClick={handleFire}> Fire </button>
				</>
			)}
		</section>
	)
}

export default ViewEmployee

/*
// Delete documents matching a value
async function deleteByValue(name) {
	const fruitsCol = collection(db, 'fruits')
	const q = query(fruitsCol, where('name', '==', name))
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach(d => {
		const ref = doc(db, 'fruits', d.ref.id)
		deleteDoc(ref)
	})
}
*/
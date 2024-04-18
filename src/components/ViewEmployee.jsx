import { deleteEmployee } from "../data/crud.js"


const ViewEmployee = ({ employee }) => {
	const handleFire = async () => {
		// anropa deleteEmployee
		// uppdatera listan:
		// 1a. använd getEmployees för att få en ny lista och
		// 1b. anropa setEmployees för att uppdatera store
		// 1c. React uppdaterar komponenten med alla anställda
		// 2. "fuska" - ta bort anställd från listan via Zustand

		await deleteEmployee(employee.key)
		// TODO - efter rasten
	}

	return (
		<section className="row border-bottom alternate">
			<div className="flex-grow"> {employee.name} works as {employee.occupation}. </div>
			<button onClick={handleFire}> Fire </button>
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
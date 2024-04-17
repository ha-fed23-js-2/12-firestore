import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from './fire.js'



async function getEmployees() {
	// Skapa en referens till collection "employees" i databasen
	const employeeCollection = collection(db, 'employees')

	// Hämta alla dokument i collection "employees"
	const employeeSnapshot = await getDocs(employeeCollection)
	// console.log('getEmployees: snapshot is', employeeSnapshot)


	const employeeList = employeeSnapshot.docs.map(doc => withKey(doc))
	return employeeList
}

// Use this if you don't have an id in the objects themselves
function withKey(doc) {
	let o = doc.data()
	o.key = doc.id  // "id" is the document reference
	return o
}

export { getEmployees }

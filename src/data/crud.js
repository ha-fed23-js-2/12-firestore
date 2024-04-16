import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from './fire.js'


// Example: read all documents in the "fruits" collection
async function getEmployees() {
	const employeeCollection = collection(db, 'employees')
	const employeeSnapshot = await getDocs(employeeCollection)
	console.log('getEmployees: snapshot is', employeeSnapshot)
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

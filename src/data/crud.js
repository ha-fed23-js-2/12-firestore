import { collection, getDocs, addDoc } from 'firebase/firestore/lite'
import { db } from './fire.js'


const collectionName = 'employees'

async function getEmployees() {
	// Skapa en referens till collection "employees" i databasen
	const employeeCollection = collection(db, collectionName)

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

async function addEmployee(employee) {
	// referens till collection 'employees'
	const collectionRef = collection(db, collectionName)
	await addDoc(collectionRef, employee)
}

export { getEmployees, addEmployee }

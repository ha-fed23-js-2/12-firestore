import { create } from 'zustand'

// set, create

const useStore = create(set => ({
	employees: [],

	setEmployees: newEmployees => set(state => ({
		employees: newEmployees
	})),
	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

	addEmployee: employee => set(state => ({
		employees: [ ...state.employees, employee ]
	}))
}))


export { useStore }

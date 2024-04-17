import { create } from 'zustand'

// set, create

const useStore = create(set => ({
	employees: [ { name: 'Testkalle', occupation: 'Testdisher', key: 'test' } ],

	setEmployees: newEmployees => set(state => ({
		employees: newEmployees
	}))
	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),


	// TODO: lägg till add-funktion
}))


export { useStore }

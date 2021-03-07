export default function () {
	return {
		todolist: [
			{
				id: 1,
				todos: [
					{
						id: 1,
						name : 'boucler todo dans une liste',
						completed : true
					},
					{
						id: 2,
						name : 'checkbox marque todo completed',
						completed: true
					},
					{
						id: 3,
						name : 'supprimer la todo (mais pas avec slice() :/)',
						completed: true
					},
					{
						id: 4,
						name : 'filtrer les todos affichées avec computed',
						completed: false
					},
					{
						id: 5,
						name : 'filtrer dans le template avec des boutons',
						completed: false
					},
					{
						id: 6,
						name : 'modifier la source des données affichées dans le template',
						completed: false
					},
					{
						id: 7,
						name : 'ajouter une todo',
						completed: true
					},
					{
						id: 8,
						name : 'déplacer la gestion des données dans un store Vuex',
						completed: false
					}
				]
			}
		]
	}
}  
const usersList = [
	{ id: 1, name: 'Alice', age: 25 },
	{ id: 2, name: 'Bob', age: 32 },
	{ id: 3, name: 'Charlie', age: 19 },
	{ id: 4, name: 'David', age: 41 },
	{ id: 5, name: 'Eve', age: 27 },
	{ id: 6, name: 'Frank', age: 36 },
	{ id: 7, name: 'Grace', age: 22 },
	{ id: 8, name: 'Henry', age: 29 },
	{ id: 9, name: 'Ivy', age: 38 },
	{ id: 10, name: 'Jack', age: 33 },
]

const getUsersList = (req, res) => {
	res.json(usersList)
}

const handler = (req, res) => {
	if (req.method === 'GET') {
		getUsersList(req, res)
	}
}

export default handler

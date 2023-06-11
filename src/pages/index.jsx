import { useEffect, useState } from 'react'

const HomePage = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('/api/user')
			.then((response) => response.json())
			.then((usersList) => setUsers(usersList))
	}, [])

	return (
		<>
			<h1>@abeia.dev</h1>
			<hr />
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						({user.id}) {user.name} / {user.age} anos
					</li>
				))}
			</ul>
		</>
	)
}

export default HomePage

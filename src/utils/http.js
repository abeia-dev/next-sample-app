const request = async (endpoint) => {
	const response = await fetch(endpoint)
	const data = await response.json()
	return data
}

module.exports = { request }

const http = require('../../utils/http')

describe('utils > http', () => {
	it('request should call fetch API', () => {
		global.fetch = jest
			.fn()
			.mockResolvedValue({ json: jest.fn().mockResolvedValue({}) })

		http.request('/api/user')

		expect(fetch).toHaveBeenCalledWith('/api/user')
	})
})

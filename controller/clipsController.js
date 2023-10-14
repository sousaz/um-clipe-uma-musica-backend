const api = require('../config/api')

module.exports = {
    async all(req, res) {
        try {
            const clips = await api.get('/clips.json')
            res.status(200).json(clips.data)
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar clipes'})
        }
    },
}
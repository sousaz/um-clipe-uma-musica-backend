const api = require("../config/api")

module.exports = {
    async all(req, res) {
        try {
            const musics = await api.get('./musics.json')
            res.status(200).json(musics.data)
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar musicas'})
        }
    },
}
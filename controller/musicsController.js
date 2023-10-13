const Musics = require("../models/musics")

module.exports = {
    async all(req, res) {
        try {
            const musics = await Musics.findAll()
            res.status(200).json(musics)
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar musicas'})
        }
    },
}
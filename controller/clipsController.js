const Clips = require("../models/clips")

module.exports = {
    async all(req, res) {
        try {
            const clips = await Clips.findAll()
            res.status(200).json(clips)
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar clipes'})
        }
    },
}
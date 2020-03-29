const connetion = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ong = await connetion('ongs')
        .where('id', id)
        .select('name')
        .first();
        
        if (!ong) {
            return res.status(400).json({ error: 'Não existe nenhuma ONG com esse ID :/'})
        }
        return res.json(ong);
    }
}
const getAllPlants = async (db) => {
    const plants = await db.get_plants()
    return plants
}


module.exports = {
    getPlants: async (req, res) => {
        const db = req.app.get('db')
        const plants = await getAllPlants(db)
        res.status(200).send(plants)
    }
}
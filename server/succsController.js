const getAllSuccs = async (db) => {
    const succs = await db.get_succs()
    return succs
}

module.exports = {
    getSuccs: async (req, res) => {
        const db = req.app.get('db')
        const plants = await getAllSuccs(db)
        res.status(200).send(succs)
    }
}
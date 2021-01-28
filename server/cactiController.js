const getAllCacti = async (db) => {
  const cacti = await db.get_cacti();
  return cacti;
};

module.exports = {
  getCacti: async (req, res) => {
    const db = req.app.get('db');
    const cacti = await getAllCacti(db);
    res.status(200).send(cacti);
  },
};

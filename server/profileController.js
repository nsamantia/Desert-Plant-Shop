module.exports = {
  editName: async (req, res) => {
    const db = req.app.get('db');
    const { username } = req.body;

    //pulls id for user from thier session
    const { id } = req.session.user;
    // const user = await

    const [updateProfile] = await db.edit_username([id, username]);
    res.status(200).send(updateProfile);
  },

  getInfo: async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.session.user;

    const userInfo = await db.get_user_info(id);

    res.status(200).send(userInfo);
  },
};

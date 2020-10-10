module.exports = {

    editName: async (req, res) => {
        //pulls id for user from thier session
        const {id} = req.session.user
        const{username} = req.body
        
        const db = req.app.get('db')

        // const user = await 

         await db.edit_username([id, username]).then((username) => {
            res.status(200).send(username)
        }) .catch(err => console.log(err))
    }
}
const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res)=>{ 

    const db = req.app.get('db')

        //Desconstruct from body
        const {username, password } = req.body
        // checks for existing user
        const [user] = await db.check_user([username])
        //if exists, reject request
        if(user) {
            return res.status(409).send('user already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        //create the user in the db
        const [newUser] = await db.register_user([username, hash])

        //put new user on session
        req.session.user = newUser

        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {

        const db = req.app.get('db')

        //get email and password from body
        const {username, password} = req.body

        //checks for existing user
        const [existingUser] = await db.check_user([username])

        //if user doesnt exist, rejwct the request
        if (!existingUser) {
            return res.status(404).send('User not found')
        }
            //compare password and hash
            const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)

            if (!isAuthenticated) {
                return res.status(403).send('Incorrect username or password')
            }

            delete existingUser.hash

            //put user on session
            req.session.user = existingUser

            res.status(200).send(req.session.user)
    },
    logout: (req, res)=>{
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        //get suer from session

        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('No session found')
        }
    }
}
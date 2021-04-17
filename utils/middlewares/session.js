import MongoStore, { connectMongo } from 'connect-mongo'
import { session } from 'next-session'

const MongoStore = connectMongo(session)

export default sessionMiddleware=( req, res, next )=>{
    const MongoStore = new MongoStore({
        client: req.dbClient,
        stringify: false,
    });

    return session({
        secret: process.env.SESSION_SECRET,
        store: MongoStore,
    })(req, res, next)
}
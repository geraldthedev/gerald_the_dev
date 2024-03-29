import { connectToDatabase } from  '../../utils/database'

export default contact = async(req, res)=>{
    const {db} = await connectToDatabase();

    db.user.insertOne({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        number: req.body.number,
        website: req.body.website
    })

    const user = await db
        .collection("Contacts.user")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();


    res.json(user);
}


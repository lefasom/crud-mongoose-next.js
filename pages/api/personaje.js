import dbConnect from '../../lib/dbConnect'
import Prueba from '../../models/Anime.jsx'

export default async function handler (req, res) {
    await dbConnect()

    //POST api/personaje

    const {method} = req

    switch (method) {
        case 'POST':
            try {
                
                const prueba = new Prueba(req.body)
                await prueba.save()

                return res.status(200).json({success:true, prueba})

            } catch (error) {
                return res.status(400).json({success: false, error: 'falla de servidor'})
            }
    
        default:
            return res.status(500).json({success: false, error})

    }
}
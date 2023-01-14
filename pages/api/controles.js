import dbConnect from '../../lib/dbConnect'
import Persona from '../../models/Persona.jsx'

export default async function handler (req, res) {
    await dbConnect()

    //POST api/controles

    const {method} = req

    switch (method) {
        case 'POST':
            try {
                
                const persona = new Persona(req.body)
                await persona.save()

                return res.status(200).json({success:true, persona})

            } catch (error) {
                return res.status(400).json({success: false, error: 'falla de servidor'})
            }
    
        default:
            return res.status(500).json({success: false,  error: 'falla de servidor'})

    }
}
import dbConnect from "../../../lib/dbConnect";
import Persona from "../../../models/Persona";

export default async function handler(req, res) {
  const {
    method,
    query: { id }
  } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const persona = await Persona.findById(id)

        if (!persona) {
          return res.status(400).json({ success: false });
        }
        return res.status(200).json({ success: true, data: persona });
      } catch (error) {
        res.status(400).json({ success: false, error:"o no exite persona o no llegan los datos" });
      }
      break;

    case "PUT":
      try {
        const persona = await Persona.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!persona) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: persona });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const persona = await Persona.deleteOne({ _id: id });
        if (!persona) {
          return res.status(400).json({ success: false });
        }
        return res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
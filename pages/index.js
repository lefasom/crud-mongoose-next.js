import dbConnect from '../lib/dbConnect'
import Prueba from '../models/Anime.jsx'

export default function Index ({pruebas}) {
  
 return(
  <>
  <h1>PERSONAJES DE ANIME</h1>
  {pruebas.map((val)=>{
								
                return(
                  <div key={val._id}>
                      {val.pj}
                  </div>
                )
          })} 
  </>
 )
    
}


export async function getServerSideProps() {
  try {
      await dbConnect()

      const res = await Prueba.find({})
      const pruebas = res.map((doc)=>{
        const prueba = doc.toObject()
        prueba._id = `${prueba._id}`
        return prueba
      })

      return { props: {pruebas: pruebas}}
  } catch (error) {
    console.log(error)
  }

}
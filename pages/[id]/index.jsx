import Link from "next/link";
import { useRouter } from "next/router"; 
// import { useState } from "react";
import dbConnect from "../../lib/dbConnect";
import Persona from "../../models/Persona";

export default function Index({ persona }) {
  const router = useRouter();
//   const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const personaId = router.query.id;
    try {
      await fetch(`/api/persona/${persona._id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      setMessage("Error al eliminar");
    }
  };

  return (
    <div className="container">
      <h1 className="my-2">Detalle:</h1>
      <div className="card">
        <div className="card-body">
          <div className="card-title text-uppercase">
            <h5>{persona.nombre}</h5>
          </div>
          <p className="fw-light">{persona.edad}</p>
          <Link  className="btn btn-warning me-2"
            href="/[id]/edit"  as={`/${persona._id}/edit`}
          >
            Editar
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            Eliminar
          </button>
          <Link href="/">
                Volver
          </Link>
          {/* {message && <p>{message}</p>} */}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    // https://mongoosejs.com/docs/tutorials/lean.html
    const persona = await Persona.findById(params.id).lean();
    persona._id = persona._id.toString();
    return { props: { persona } };
  } catch (error) {
    console.log("error", error);
  }
}

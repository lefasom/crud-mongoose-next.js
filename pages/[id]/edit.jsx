import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../components/Form";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

function edit() {

  // solo obtener data para enviar al form
  const router = useRouter();
  const { id } = router.query;
  const { data: persona, error } = useSWR(
    id ? `/api/persona/${id}` : null,
    fetcher
  );

  if (!persona) return <p className="container my-3">Cargando...</p>;
  if (error) return <p className="container my-3">Falló en la carga...</p>;


const formData = {
    nombre: persona.nombre,
    edad: persona.edad,
}

  return (<>
    <div>edit</div>
    <Form formData={formData} forNewPerson={false}/>

  </>)
}

export default edit
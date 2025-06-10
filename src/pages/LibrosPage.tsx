import { useLocation } from "react-router-dom"

const LibrosPage = () => {
  const location = useLocation()
  const name = location.state?.name || "Sin Nombre"

  return <div>Bienvenido a Libros, {name}!</div>
}

export default LibrosPage
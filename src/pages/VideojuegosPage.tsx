import { useEffect, useState } from "react"

const VideojuegosPage = () => {
  const [name, setName] = useState<string>("Sin Nombre")

  useEffect(() => {
    const storedName = sessionStorage.getItem("name")
    if (storedName) {
      setName(storedName)
    }
  }, [])

  return <div>Bienvenido a Videojuegos, {name}!</div>
}

export default VideojuegosPage

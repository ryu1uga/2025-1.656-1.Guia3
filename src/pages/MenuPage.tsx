import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MenuPage = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const validateName = () => {
    if (!name.trim()) {
      setError("Por favor, ingresa un nombre")
      return false
    }
    setError("")
    return true
  }

  const goToLibros = () => {
    if (!validateName()) return
    navigate("/libros", { state: { name } })
  }

  const goToVideojuegos = () => {
    if (!validateName()) return
    sessionStorage.setItem("name", name)
    navigate("/videojuegos")
  }

  return (
    <div className="container">
      <h1>Menu</h1>
      <input
        type="text"
        placeholder="name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={validateName}
      />
      {error && (
        <div style={{ color: "red", marginTop: "5px" }}>
          {error}
        </div>
      )}
      <div style={{ marginTop: "20px" }}>
        <button onClick={goToLibros} disabled={!name.trim()}>
          LIBROS
        </button>
        <button onClick={goToVideojuegos} disabled={!name.trim()} style={{ marginLeft: "10px" }}>
          VIDEOJUEGOS
        </button>
      </div>
    </div>
  )
}

export default MenuPage
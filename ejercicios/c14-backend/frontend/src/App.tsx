import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import LibroDetalle from "./pages/LibroDetalle";
import LibroNuevo from "./pages/LibroNuevo";
import type { Libro } from "./types/libros";
import "./App.css";

function App() {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const res = await fetch("/libros.json"); 
        const data: Libro[] = await res.json();
        setLibros(data);
      } catch (error) {
        console.error("Error al cargar libros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  const agregarLibro = (nuevoLibro: Omit<Libro, "id">) => {
    setLibros([...libros, { ...nuevoLibro, id: libros.length + 1 }]);
  };

  if (loading) return <p>Cargando libros...</p>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home libros={libros} />} />
        <Route path="/catalogo" element={<Catalogo libros={libros} />} />
        <Route path="/libro/:id" element={<LibroDetalle libros={libros} />} />
        <Route
          path="/libros/nuevo"
          element={<LibroNuevo agregarLibro={agregarLibro} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;

"use client";
//función de expresión
//funsión de asignación
//IIFE (Inmediately Invoked Fuction Expression)
//Funsión de expresión invocada inmediatamente
import react from "react"
import styles from "./page.module.css"
//función de expresión
export default function Page() {
  return(
    <div className= {styles.container}>
     <div className= {styles.box}>
      <h1>Todo-list</h1>
      <input type="text" placeholder="Agregar tarea..."></input>
      <input type="date"></input>
      <select>
        <option>Prioridad</option>
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>
      <button>Agregar</button>
     </div>
    </div>
  )
  }
  
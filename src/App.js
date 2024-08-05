import{ React } from "react"
import './Style.css'
import Calendar from "./class-components"

export default function App(){
  return(
    <>
    <header/>
      <h2>Developerthai.com</h2>
      <div className="title">React & React Native</div>
      <h1><center><Calendar></Calendar></center></h1>
    </>
  ) 
}
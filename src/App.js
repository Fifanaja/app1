import{ React } from "react"
import './Style.css'
import Calendar from "./class-components"
import { Header,Content,Footer } from "./func-components"

export default function App(){
 
  return(
    [<Header/>,<Content/>,<Footer/>]
  )
}


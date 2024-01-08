import React, { useState } from 'react'
import './style.scss'


const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "HTML+CSS",
        id: "product",
    },
    {
        name: "React",
        id: "web-page",
    },
    {
        name: "Angular",
        id: "web-app",
    },
    {
        name: "MERN",
        id: "mobile-app",
    },
]


const Filters = ({filterProjects}) => {
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id)
    }


  return (
    <ul className='filters-menu-items'>
        {filtersData.map((item)=>{
            return(
                <li key={item.id} className={`filter-menu-item ${active === item.id ? "active" : ""}`} onClick={()=> clickHandler(item.id)}>{item.name}</li>
            )
        })}
        
    </ul>
  )
}

export default Filters
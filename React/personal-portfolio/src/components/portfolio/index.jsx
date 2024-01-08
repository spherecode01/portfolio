import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";



const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../images/portfolio/thumb-1.jpg"),
        },
    },
    {
        id: 2,
        name: "Google",
        tags: ["web-page"],
        media: {
            thumbnail: require("../images/google.jpg"),
        },
    },
    {
        id: 3,
        name: "Movie X",
        tags: ["web-page"],
        media: {
            thumbnail: require("../images/movie.jpg"),
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../images/portfolio/thumb-1.jpg"),
        },
    },
    {
        id: 5,
        name: "Youtube Clone",
        tags: [ "web-page"],
        media: {
            thumbnail: require("../images/youtube.jpg"),
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "mobile-app"],
        media: {
            thumbnail: require("../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        name: "Admin Dashboard",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../images/dasboard.jpg"),
        },
    },
]




const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
  
    const filterProjects = (tag) => {
      setTransition("zoomout");
  
      setTimeout(() => {
        if (tag !== "all") {
          const filteredProjects = projectsData.filter((f) => f.tags.includes(tag));
          setProjects(filteredProjects);
        } else {
          setProjects(projectsData);
        }
        setTransition("zoomin");
      }, 200);
  
      setTimeout(() => {
        setTransition(false);
      }, 600);
    };
  
    return (
      <Section id="portfolio" title="Check our Portfolio" background="light">
        <div className="portfolio-content-wrapper">
          <Filters filterProjects={(tag) => filterProjects(tag)} />
          <Showcase
            data={projects}
            transition={transition}
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={setSelectedProjectId}
          />
        </div>
      </Section>
    );
  };
  
  export default Portfolio;



//https://chimerical-melomakarona-91f8f3.netlify.app
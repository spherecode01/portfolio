import React, {useEffect} from 'react'
import "./style.scss"
import Arrow from '../../shared/arrow';
import { debounce } from 'lodash';


const Showcase = ({ data, transition, selectedProjectId, setSelectedProjectId }) => {

  
  useEffect(() => {
  const handleNetlifyRedirect = () => {
    console.log("Redirecting to Netlify project");
    const netlifyLinks = {
      3: 'https://benevolent-licorice-9e17cc.netlify.app', //Movie X
      2: 'https://chimerical-melomakarona-91f8f3.netlify.app', //Google project id
      5: 'https://calm-tulumba-fa2082.netlify.app', // Youtube
      8: 'https://rad-palmier-944588.netlify.app', // Admin Dashboard


    };

    const netlifyLink = netlifyLinks[selectedProjectId];
    console.log("Netlify link:", netlifyLink);


    if (netlifyLink) {
      window.location.href = netlifyLink;
    }
  };

  const debouncedRedirect = debounce(handleNetlifyRedirect, 300);

  debouncedRedirect();

  return () => {
    debouncedRedirect.cancel();
  };
}, [selectedProjectId]);

const handleProjectClick = (projectId) => {
  console.log("Selected Project ID:", projectId);
  setSelectedProjectId(projectId);
};

  return (
    <div className="projects-showcase">
      {data.map((project) => (
        <div
          key={project.name}
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomOut"
              : transition === "zoomin"
              ? "zoomIn"
              : ""
          }`}
          onClick={() => handleProjectClick(project.id)}
        >
          <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="go-to-cta">
              <span className="text" >
                Project Details
              </span>
              <Arrow />
            </div>
          </div>
          <img src={project.media.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Showcase;

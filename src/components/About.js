import React from "react";

const About = ({image, about}) => {
  return(
    <aside>
       
       {image ? (<img src = {image} alt = 'blog logo'/>)

              :(<img src = "https://via.placeholder.com/215 (Links to an external site.)" alt="blog logo"/>
               
              
              )}
        <p>{about}</p>
    </aside>
  )
};
export default About
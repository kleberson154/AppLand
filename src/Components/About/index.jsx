import React from 'react'

function About(props) {
  return (
    <div id={props.id} className="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          similique vero quas magni asperiores. Non modi, sint culpa corrupti,
          ab distinctio molestias a repellat rerum aliquam debitis in
          praesentium architecto quibusdam odit, accusamus nesciunt. Nostrum.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default About

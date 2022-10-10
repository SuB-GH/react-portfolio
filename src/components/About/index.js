// this creates the About component
import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';

const [bio] = ([
  {
    name: 'myBio', description: 'Info about me',
  },

]);

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Susan Brown</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        bio 
        </p>
      </div>
    </section>
  );
}

export default About;  // this exports the About component

import React from 'react';
//import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section id="myAbout" className="my-5">
      <h1 id="about">Welcome to My Portfolio</h1>
      <div>
      <img id="avatar" src={require(`../../assets/proj-img/532.jpg`)}/>
      <p id="attrib1">
      <a id="attrib2" href="https://www.freepik.com/free-vector/different-woman-avatars_1089194.htm#query=female%20avatar&position=5&from_view=search">Image by ddraw</a> on Freepik
      </p>
      </div>
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default About;

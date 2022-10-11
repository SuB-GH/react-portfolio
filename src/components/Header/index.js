//Header = parent / Nav= child. Header component should return Nav (a JSX element)
import React from "react";
import Nav from '../Nav';
//import About from '../About';

//import { capitalizeFirstLetter } from '../../utils/helpers';




function Header() {

  return (
    <section className="my-5">
      <p>this text is from the header component</p>
      <Nav></Nav>

    </section>
  );
}
export default Header;
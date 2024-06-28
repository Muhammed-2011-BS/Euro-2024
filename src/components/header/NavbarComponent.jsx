
"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/1200px-UEFA_Champions_League.svg.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Link>      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to='/'>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
        </Link>
        <Link to='/matches'>
          <Navbar.Link href="#">Matcehs</Navbar.Link>
        </Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

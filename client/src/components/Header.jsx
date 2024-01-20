import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar className="border-b-2 text-sm sm:text-xl font-semibold">
      <Link>
        <span>SikkleBlog</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search.."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button color="grey" className="lg:hidden" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2">
        <Button className="w-12 h-10 hidden sm:inline" color="grey" pill>
          <FaMoon />
        </Button>
        <Link>
          <Button>Login</Button>
        </Link>
      </div>
    </Navbar>
  );
};

export default Header;

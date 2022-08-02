import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col">
        <p className="my-4">Chris McConnell &copy; 2022</p>
      </div>
      <div className="mb-8 text-white ">
        <div className="flex ml-10 text-center">
          <Link href="https://github.com/chrismcconn2789/">
            <AiFillGithub size={30} className="mx-2 cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/cmcconnell89/">
            <AiFillLinkedin size={30} className="mx-2" />
          </Link>
          <Link href="https://www.chrismcconnell.dev">
            <BsGlobe size={30} className="mx-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

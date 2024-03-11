import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";



export default function Logo() {

    return (
        <div className="flex max-w-7xl">
        <label htmlFor="my-drawer"  className="btn btn-circle swap swap-rotate">
        <input type="checkbox"  />
        <label  className="btn btn-ghost drawer-button">
        </label>

  {/* this hidden checkbox controls the state */}
        
        
        {/* hamburger icon */}
        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        
        {/* close icon */}
        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
        
        </label>
        <Link  href="/" className="btn btn-ghost text-base-300">
        
        <Image src={logo} alt="logo" width={70} height={70}></Image>
        <p className="align-top">®</p>
      </Link>
      </div>
    );
  }

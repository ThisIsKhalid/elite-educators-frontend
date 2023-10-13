import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/elite-educators.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Headers = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#201A18",
          height: 24,
          backgroundColor: "#FED049",
        }}
      >
        <p>
          Hey, subscribe now for only{" "}
          <span
            style={{
              fontWeight: "600",
            }}
          >
            $4.5
          </span>{" "}
          -{" "}
          <span
            style={{
              fontWeight: "600",
            }}
          >
            Subscribe now
          </span>
        </p>
      </div>

      <div className="flex items-center justify-between px-5 bg-[#FFFFFF]">
        <div>
          <Image src={logo} alt="logo" width={160} height={80} style={{}} />
        </div>
        <div>
          <div className="md:flex hidden gap-10 items-center text-base">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
           <Link href='/tutors'>Tuors</Link>
           <Link href='/about'>About Us</Link>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end flex md:hidden">
            <label tabIndex={0} className="">
              <GiHamburgerMenu />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/signin">Login</Link>
              </li>
              <li>
                <Link href="/signup">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex hidden gap-10">
          <Link href="/signin">Login</Link>
          <Link href="/signup">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Headers;

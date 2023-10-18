import { authKey } from "@/constants/storageKey";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/elite-educators.png";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-cOrange absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300
        ${pathname === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Headers = () => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();

  const logout = () => {
    removeUserInfo(authKey);
    // router.push("/signin");
  };

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
        <div className="relative md:flex hidden">
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="border border-cBlack lg:w-96 input focus:outline-none focus:border-cOrange pl-10"
          />
          <span className="absolute left-3 top-4 text-lg">
            <BiSearch />
          </span>
        </div>
        <div>
          <div className="md:flex hidden gap-10 items-center text-base">
            <nav>
              <CustomLink href="/home" title="Home" className="mr-4" />
              <CustomLink href="/services" title="Services" className="mx-4" />
              <CustomLink href="/tutors" title="Tutors" className="mx-4" />
              <CustomLink href="/about" title="About" className="mx-4" />

              {userLoggedIn ? (
                <>
                  <CustomLink
                    href="/dashboard"
                    title="Dashboard"
                    className="mx-4"
                  />
                  <button
                    onClick={logout}
                    className="btn btn-xs bg-cBlack text-gray-100 hover:bg-cBlue ml-4"
                  >
                    Signout
                  </button>
                </>
              ) : (
                <>
                  <CustomLink href="/signin" title="Signin" className="ml-4" />
                  <CustomLink href="/signup" title="Signup" className="ml-4" />
                </>
              )}
            </nav>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end flex md:hidden">
            <label tabIndex={0} className="text-xl">
              <GiHamburgerMenu />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box w-52"
            >
              <li>
                <CustomLink href="/home" title="Home" />
              </li>
              <li>
                <CustomLink href="/services" title="Services" />
              </li>
              <li>
                <CustomLink href="/tutors" title="Tutors" />
              </li>
              <li>
                <CustomLink href="/about" title="About" />
              </li>
              {userLoggedIn ? (
                <>
                  <CustomLink
                    href="/dashboard"
                    title="Dashboard"
                  />
                  <button
                    onClick={logout}
                    className="btn btn-xs bg-cBlack text-gray-100 hover:bg-cBlue"
                  >
                    Signout
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <CustomLink href="/signin" title="Signin" />
                  </li>
                  <li>
                    <CustomLink href="/signup" title="Signup" />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;

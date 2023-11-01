"use client";

import { authKey } from "@/constants/storageKey";
import { useGetBookingByUserIdQuery } from "@/redux/api/bookingApi";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import logo from "../../assets/elite-educators.png";
import NotificationModel from "./NotificationModel";

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
    toast.success("Logout successfully");
    router.push("/signin");
  };

  const loggedUser: any = getUserInfo();
  const { id, role } = loggedUser;
  // console.log(role);
  const query: Record<string, any> = {};

  const { data } = useGetBookingByUserIdQuery({
    id,
    ...query,
  });

  const bookings = data?.services;

  const statusTrueBookings = bookings?.filter(
    (booking: any) => booking.status === true
  );

  return (
    <>
      {/* <div
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
      </div> */}

      <div className="flex items-center justify-between px-5 bg-[#FFFFFF]">
        <div>
          <Image src={logo} alt="logo" width={160} height={80} style={{}} />
        </div>
        <div className="md:flex hidden gap-10 items-center text-base">
          <CustomLink href="/" title="Home" className="" />
          <CustomLink href="/services" title="Services" className="" />
          <CustomLink href="/events" title="Events" className="" />
          {userLoggedIn ? (
            <>
              <CustomLink href="/dashboard" title="Dashboard" className="" />
            </>
          ) : (
            <>
              <CustomLink href="/signin" title="Signin" className="" />
            </>
          )}
        </div>
        <div>
          <div className="md:flex hidden items-center gap-3 text-base mb-2">
            {/* <CustomLink href="/" title="Tutors" className="mx-4" />
              <CustomLink href="/" title="About" className="mx-4" /> */}
            <Link href="/cart" className="text-xl font-bold">
              <BsCart2 />
            </Link>

            {userLoggedIn && role === "user" && (
              <div
                className="text-xl font-bold relative cursor-pointer"
                onClick={() => {
                  const dialog = document.getElementById(
                    "notification_modal"
                  ) as HTMLDialogElement;
                  if (dialog) {
                    dialog.showModal();
                  }
                }}
              >
                <IoNotificationsOutline />
                <span className="absolute -top-4 left-3 text-cOrange font-mono">
                  {statusTrueBookings?.length}
                </span>
              </div>
            )}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <NotificationModel statusTrueBookings={statusTrueBookings} />
            {/* ------------------- */}

            {userLoggedIn && (
              <>
                <button
                  onClick={logout}
                  className="btn btn-xs bg-cBlack text-gray-100 hover:bg-cBlue"
                >
                  Signout
                </button>
              </>
            )}
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
                <CustomLink href="/" title="Home" />
              </li>
              <li>
                <CustomLink href="/services" title="Services" />
              </li>
              <li>
                <CustomLink href="/events" title="Events" />
              </li>
              {/* <li>
                <CustomLink href="/" title="Tutors" />
              </li>
              <li>
                <CustomLink href="/" title="About" />
              </li> */}
              {userLoggedIn ? (
                <>
                  <CustomLink href="/dashboard" title="Dashboard" />
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

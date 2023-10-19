"use client";
import errorImg from "../assets/Error.png";

const ErrorPage = () => {
  return (
    <div className="bg-cover h-screen relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Something Went Wrong!</h1>
      </div>
      <style jsx>{`
        .bg-cover {
          background-image: url(${errorImg});
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;

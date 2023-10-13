import Image from "next/image";
import logo from "../../assets/elite-educators.png";


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

        <div className="border border-red-400">
          <Image src={logo} alt="logo" width={140} height={70} style={{}} />
        </div>
        
    </>
  );
};

export default Headers;

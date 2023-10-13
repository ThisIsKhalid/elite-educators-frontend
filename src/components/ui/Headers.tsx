import { Col, Layout, Menu, Row } from "antd";
import Image from "next/image";
import logo from "../../assets/elite-educators.png";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  color: "#201A18",
  height: 70,
  backgroundColor: "#FFFFFF",
};

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
      <Header style={headerStyle}>
        <Row align="middle" justify="space-between">
          <Image src={logo} alt="logo" width={140} height={70} style={{}} />

          <Menu
            disabledOverflow
            theme="light"
            mode="horizontal"
            style={{
              border: "0",
              fontSize: "18px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            defaultSelectedKeys={["1"]}
            items={new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Row>
      </Header>
    </>
  );
};

export default Headers;

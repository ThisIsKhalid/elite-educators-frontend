"use client";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Contents;

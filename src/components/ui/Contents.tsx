"use client";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <div className="px-5">{children}</div>
    </section>
  );
};

export default Contents;

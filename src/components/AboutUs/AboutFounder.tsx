import { useState } from "react";

const AboutFounder = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      style={{
        width: "100%",
        // background: "linear-gradient(135deg, #0d0b1e 0%, #1e0a3c 40%, #120824 100%)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "60px 0",
      }}
    >
      {/* Stats Bar - Full Width, NO green bg */}
      <div
        style={{
          width: "100%",
          background: "linear-gradient(90deg, #0f0c29 0%, #1a1545 50%, #0f0c29 100%)",
          borderTop: "1px solid rgba(34,197,94,0.15)",
          borderBottom: "1px solid rgba(34,197,94,0.15)",
          padding: "32px 0",
          display: "flex",
          justifyContent: "center",
          marginBottom: "90px"
        }}
      >
        {[
          { number: "500+", label: "Projects Completed" },
          { number: "600+", label: "Happy Clients" },
          { number: "7+", label: "Industry Awards" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "10px 60px",
              borderRight: i < 2 ? "1px solid rgba(34,197,94,0.2)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "2.6rem",
                fontWeight: "800",
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.5)",
                marginTop: "6px",
                letterSpacing: "0.4px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content - wider container */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          gap: "120px",
        }}
      >
        {/* Left: Larger Round Image */}
        <div style={{ flexShrink: 0, position: "relative" }}>
          {/* Outer animated glow ring */}
          <div
            style={{
              position: "absolute",
              inset: "-7px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #22c55e, #4ade80, #15803d, #86efac)",
              zIndex: 0,
              animation: "spin 5s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-3px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0d0b1e, #1e0a3c)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              zIndex: 2,
              border: "4px solid rgba(34,197,94,0.5)",
            }}
          >
            <img
              src="/images/profile.jpeg"
              alt="Founder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                el.parentElement!.style.background =
                  "linear-gradient(135deg, #1a3a1a, #0d2b0d)";
                el.parentElement!.innerHTML = `
                  <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:90px;">👤</div>
                `;
              }}
            />
          </div>
        </div>

        {/* Right: Content */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              color: "#ffffff",
              marginBottom: "22px",
              lineHeight: "1.2",
              letterSpacing: "-0.5px",
            }}
          >
            Our Vision –{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #22c55e, #4ade80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Message
            </span>
            <br />
            From Founder
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.72)",
              lineHeight: "1.85",
              marginBottom: "18px",
              maxWidth: "840px",
            }}
          >
            At <strong style={{ color: "#ffffff" }}>PIXEL</strong>, we aim to drive
            innovation by blending technology with user insights, creating impactful
            solutions that foster growth and elevate brands. Our mission is to build
            products that not only look great but solve real-world problems with
            precision and creativity. Thank you for joining us on this journey.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: "1.85",
              marginBottom: "18px",
              maxWidth: "840px",
            }}
          >
            We believe that great design is the intersection of art and engineering.
            Every pixel we craft is intentional — from the colors we choose to the
            interactions we build. Our team works tirelessly to ensure every client
            receives a product that exceeds expectations.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.48)",
              lineHeight: "1.85",
              marginBottom: "38px",
              maxWidth: "840px",
            }}
          >
            Advanced imaging techniques, modern design systems, and strategic thinking
            have improved outcomes and accessibility for clients worldwide. We are
            committed to continuous growth, innovation, and delivering excellence in
            every project we undertake.
          </p>

          {/* Contact Us Button */}
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              background: hovered
                ? "linear-gradient(90deg, #1d6fd8, #1a5fc4)"
                : "linear-gradient(90deg, #2563eb, #1d6fd8)",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              padding: "15px 40px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              letterSpacing: "0.3px",
              transition: "all 0.25s ease",
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hovered
                ? "0 10px 30px rgba(37,99,235,0.55)"
                : "0 4px 18px rgba(37,99,235,0.35)",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default AboutFounder;
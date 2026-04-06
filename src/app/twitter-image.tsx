import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ariel Meshorer — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#111111",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Ariel Meshorer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#666666",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          Software engineer focused on distributed systems, ML infrastructure,
          and building things that scale.
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#999999",
            marginTop: 40,
            fontFamily: "monospace",
          }}
        >
          meshorer.dev
        </div>
      </div>
    ),
    { ...size }
  );
}

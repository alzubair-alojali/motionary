import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Motionary — Motion patterns for developers";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(900px 500px at 0% 0%, #2a1d4f 0%, transparent 60%), linear-gradient(135deg, #0a0a0b 0%, #131316 100%)",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#a78bfa",
            textTransform: "uppercase",
            letterSpacing: 6,
          }}
        >
          <span
            style={{
              display: "block",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#a78bfa",
            }}
          />
          Motionary
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 600,
            marginTop: 24,
            lineHeight: 1.0,
            letterSpacing: -2,
            maxWidth: 940,
          }}
        >
          Motion patterns
          <br />
          for developers.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#a1a1aa",
            marginTop: 28,
            maxWidth: 880,
          }}
        >
          Live demos paired with copy-ready AI prompts.
        </div>
      </div>
    ),
    { ...size },
  );
}

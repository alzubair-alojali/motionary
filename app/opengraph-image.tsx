import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Motionary — An Observational Field Guide to Interface Motion";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b0d12",
          color: "#f4efe3",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "ui-monospace, monospace",
            fontSize: 18,
            color: "#6e6a5e",
            textTransform: "uppercase",
            letterSpacing: "4px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ color: "#c9c2b0" }}>MOTIONARY</div>
            <div>VOL. I · MMXXVI</div>
            <div>FIELD GUIDE TO INTERFACE MOTION</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              textAlign: "right",
            }}
          >
            <div>OBSERVATORY · ATACAMA</div>
            <div>SEEING 0.6&quot; · CLEAR</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "1px solid rgba(244, 239, 227, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 96,
                fontStyle: "italic",
                lineHeight: 1,
                letterSpacing: "-2px",
                color: "#f4efe3",
              }}
            >
              Motionary
            </div>
          </div>
          <div
            style={{
              fontSize: 28,
              fontStyle: "italic",
              color: "#c9c2b0",
            }}
          >
            — Eighteen specimens, set in the dark —
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "ui-monospace, monospace",
            fontSize: 16,
            color: "#6e6a5e",
            textTransform: "uppercase",
            letterSpacing: "4px",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>FIELDS · 06</span>
            <span>OBJECTS · 18</span>
            <span>EDITION · I</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#22d3ee",
              }}
            />
            TRACKING
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

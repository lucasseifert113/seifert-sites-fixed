import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Seifert Sites - Premium websites for local businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #07080b 0%, #0f1117 50%, #1a1520 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
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
              fontSize: 64,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-2px",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Seifert Sites
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#ff7a1a",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Premium Web Design
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
              marginTop: 8,
            }}
          >
            Clean websites for local businesses that convert
          </div>
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 24,
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span>seifertsites.com</span>
            <span>•</span>
            <span>Platteville, WI</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

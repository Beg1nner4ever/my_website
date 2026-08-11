import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Philipp Widenfels — From hard idea to working product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const sansFont = await readFile(
    join(process.cwd(), "src/fonts/instrument-sans.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0b0f17",
          color: "#ffffff",
          fontFamily: "Instrument Sans",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 18, letterSpacing: "0.14em" }}>PW / 2026</span>
          <span style={{ fontSize: 14, letterSpacing: "0.14em", color: "#9cff57" }}>
            APPLIED AI + PRODUCT ENGINEERING
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            lineHeight: 0.9,
            letterSpacing: "-0.055em",
          }}
        >
          <span>From hard idea</span>
          <span>
            to <span style={{ color: "#9cff57" }}>working product.</span>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 18, color: "#aab0bc" }}>beg1nner4ever.com</span>
          <span style={{ fontSize: 16, color: "#aab0bc" }}>
            Paris / working across Europe
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Sans",
          data: sansFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}

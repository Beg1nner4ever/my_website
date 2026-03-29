import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Philipp Widenfels — Applied AI Engineer & Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const serifFont = await readFile(
    join(process.cwd(), "src/fonts/instrument-serif.ttf")
  );
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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #f7f5f3 0%, #edeae6 50%, #e8e4f0 100%)",
          fontFamily: "Instrument Sans",
        }}
      >
        {/* Top — logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "Instrument Serif",
              fontSize: 36,
              color: "#1a1a2e",
            }}
          >
            pw.
          </span>
          <span
            style={{
              fontSize: 16,
              color: "#d4654a",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              fontWeight: 500,
            }}
          >
            Available for freelance
          </span>
        </div>

        {/* Center — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Instrument Serif",
              fontSize: 68,
              color: "#1a1a2e",
              lineHeight: 1,
            }}
          >
            <span>I build intelligent</span>
            <span>
              {"systems that\u00A0"}
              <span style={{ color: "#d4654a", fontStyle: "italic" }}>
                solve
              </span>
            </span>
            <span>real problems.</span>
          </div>
          <p
            style={{
              fontSize: 22,
              color: "#6b6b7b",
              margin: 0,
              maxWidth: "600px",
            }}
          >
            Applied AI Engineer & Data Scientist based in Europe.
          </p>
        </div>

        {/* Bottom — URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 18, color: "#6b6b7b" }}>
            beg1nner4ever.com
          </span>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {["AI/ML", "Full-Stack", "Data Science", "AI Agents"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 13,
                    padding: "4px 12px",
                    borderRadius: "99px",
                    border: "1px solid #d4d0cc",
                    color: "#6b6b7b",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serifFont,
          style: "normal",
          weight: 400,
        },
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

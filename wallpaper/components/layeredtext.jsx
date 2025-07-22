export default function LayeredText({
    text,
    size = 4,
    color = "#000000",
  }) {
    return (
      <h1 className="flex -space-x-1">
        {Array.from(text).map((ch, i) => (
          <div
            key={i}
            className="relative inline-block"
            style={{ height: `${size * 3}rem` }}
          >
            {/* invisible measure span to size the wrapper to the serif-glyph’s natural width */}
            <span
              className="invisible block"
              style={{
                whiteSpace: "pre",
                fontSize: `${size * 3*0.45}rem`,
                fontFamily: "Times New Roman, serif",
                lineHeight: 1,
              }}
            >
              {ch}
            </span>
  
            {/* bottom layer (Times New Roman, scaled) */}
            <span
              className="absolute inset-0 flex items-center justify-center leading-none"
              style={{
                fontSize: `${size * 3}rem`,
                color,
                fontFamily: "Times New Roman, serif",
                transform: "scaleX(0.45)",
                transformOrigin: "center",
              }}
            >
              {ch}
            </span>
  
            {/* top layer (Swiss-911, scaled/translated) */}
            <span
              className="absolute inset-0 flex items-center justify-center leading-none"
              style={{
                fontSize: `${size}rem`,
                color,
                fontFamily: "var(--font-swiss-911)",
                transform: `scaleX(1.8) translateY(${0.1 * size}rem)`,
                transformOrigin: "center",
              }}
            >
              {ch}
            </span>
          </div>
        ))}
      </h1>
    );
  }
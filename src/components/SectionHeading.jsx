import React from "react";

export default function SectionHeading({ eyebrow, title, desc, align = "left" }) {
  const a = align === "center";
  return (
    <div className={a ? "text-center" : ""}>
      {eyebrow ? (
        <div className="pill mb-3 w-fit" style={a ? { marginInline: "auto" } : undefined}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 max-w-2xl text-sm text-black/70" style={a ? { marginInline: "auto" } : undefined}>{desc}</p> : null}
    </div>
  );
}

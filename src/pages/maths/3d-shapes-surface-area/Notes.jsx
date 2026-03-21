import NotesLayout from '@/components/NotesLayout'

const TOPICS = [
  { num: "01", id: "cylinders",   label: "Cylinders" },
  { num: "02", id: "spheres",     label: "Spheres & Hemispheres" },
  { num: "03", id: "cones",       label: "Cones" },
  { num: "04", id: "pyramids",    label: "Pyramids" },
  { num: "05", id: "compound",    label: "Compound Shapes" },
]

const REFERENCE = [
  { num: "06", id: "formulas",    label: "Formula Reference" },
  { num: "07", id: "mistakes",    label: "Exam Mistakes" },
  { num: "08", id: "glossary",    label: "Glossary" },
]

export default function Notes() {
  return (
    <NotesLayout
      tag="GCSE Maths · Higher Tier"
      title="Surface Area of 3D Shapes"
      subtitle="Nets, curved surfaces, compound solids, and every formula — with 2026 exam-aid status clearly marked for every shape."
      accent="#2563eb"
      topics={TOPICS}
      reference={REFERENCE}
    >

      {/* 01 CYLINDERS */}
      <section className="section reveal" id="cylinders">
        <div className="section-header">
          <div className="section-num">01</div>
          <h2>Cylinders</h2>
        </div>
        <div className="intro">
          A cylinder has <strong>two circular bases</strong> and one curved rectangular wall. The key insight is understanding <strong>why</strong> the curved surface formula works — once you know that, you can re-derive it yourself in an exam.
        </div>

        <h3>The Net — How It Unfolds</h3>
        <div className="two-col">
          <div className="info-card">
            <div className="info-head">📦 Unfolding the Net</div>
            <p>When you unroll a cylinder you get <strong>three pieces</strong>: two identical circles (the top and bottom bases) and one large rectangle (the curved wall). The rectangle's width is exactly the <strong>circumference</strong> of one circle.</p>
          </div>
          <div className="info-card accent-border">
            <div className="info-head">🧠 Why CSA = 2πrh</div>
            <p>Imagine peeling a label off a tin can. The label is a rectangle. Its <strong>height</strong> is the cylinder's height <em>h</em>. Its <strong>width</strong> is the circumference of the circle = 2πr. Area of a rectangle = length × width, so CSA = 2πr × h = <strong>2πrh</strong>.</p>
          </div>
        </div>

        <h3>Curved Surface Area (CSA)</h3>
        <div className="calc-block">
          <div className="calc-formula-big">CSA = 2πrh</div>
          <div className="calc-legend">
            <span><strong>r</strong> = radius of the circular base (cm or m)</span>
            <span><strong>h</strong> = perpendicular height of the cylinder</span>
          </div>
          <div className="calc-notes">
            <p><strong>⚠ Must Memorize</strong> — this formula is NOT given in the 2026 exam.</p>
          </div>
        </div>

        <h3>Total Surface Area (TSA)</h3>
        <div className="calc-block">
          <div className="calc-formula-big">TSA = 2πrh + 2πr²</div>
          <div className="calc-legend">
            <span><strong>2πrh</strong> = curved wall</span>
            <span><strong>2πr²</strong> = two circular bases (πr² each)</span>
          </div>
          <div className="calc-notes">
            <p>Can be factorised as <strong>TSA = 2πr(h + r)</strong>. Either form is accepted in the exam.</p>
            <p><strong>⚠ Must Memorize</strong> — TSA is derived from CSA + the two bases. Not given.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 02 SPHERES & HEMISPHERES */}
      <section className="section reveal" id="spheres">
        <div className="section-header">
          <div className="section-num">02</div>
          <h2>Spheres &amp; Hemispheres</h2>
        </div>
        <div className="intro">
          A sphere has <strong>no flat faces or edges</strong> — it cannot be unfolded into a flat net. Despite this, the surface area formula 4πr² was proven by Archimedes. A hemisphere is exactly half a sphere, but its TSA includes the flat circular base as well.
        </div>

        <h3>Sphere</h3>
        <div className="calc-block">
          <div className="calc-formula-big">SA = 4πr²</div>
          <div className="calc-legend">
            <span><strong>r</strong> = radius of the sphere</span>
          </div>
          <div className="calc-notes">
            <p>For a sphere, the <strong>CSA and TSA are the same thing</strong> — there is only one surface, no separate bases.</p>
            <p><strong>✓ GIVEN in exam</strong> — this formula will appear on the 2026 Higher Tier formula sheet.</p>
          </div>
        </div>

        <h3>Hemisphere</h3>
        <div className="two-col">
          <div className="calc-block">
            <div className="calc-formula-big">CSA = 2πr²</div>
            <div className="calc-legend">
              <span>Exactly half the sphere's surface area</span>
            </div>
            <div className="calc-notes">
              <p><strong>⚠ Must Memorize</strong> — halve the sphere formula. Not given.</p>
            </div>
          </div>
          <div className="calc-block">
            <div className="calc-formula-big">TSA = 3πr²</div>
            <div className="calc-legend">
              <span>CSA (2πr²) + flat circular base (πr²)</span>
            </div>
            <div className="calc-notes">
              <p><strong>⚠ Must Memorize</strong> — the most common hemisphere mistake is forgetting to add the flat circular base πr².</p>
            </div>
          </div>
        </div>
        <div className="callout warn">
          <div className="callout-title">⚠ Common Hemisphere Trap</div>
          When a hemisphere sits on a surface (e.g. a solid paperweight), the flat base is <strong>hidden</strong> and NOT part of the exposed surface. Check every question carefully — is the flat face exposed or hidden?
        </div>
      </section>

      <div className="divider" />

      {/* 03 CONES */}
      <section className="section reveal" id="cones">
        <div className="section-header">
          <div className="section-num">03</div>
          <h2>Cones</h2>
        </div>
        <div className="intro">
          A cone has one circular base and one curved surface. The curved face, when unrolled, forms a <strong>sector</strong> of a larger circle. The most critical thing for surface area is distinguishing the <strong>slant height</strong> from the <strong>perpendicular height</strong>.
        </div>

        <h3>Critical Vocabulary</h3>
        <div className="two-col">
          <div className="info-card accent-border">
            <div className="info-head">📐 Slant Height (l)</div>
            <p>The distance along the <strong>sloping side</strong> of the cone from the apex to the edge of the base. This is what all surface area formulas use. If not given directly, calculate it using Pythagoras: <strong>l² = h² + r²</strong></p>
          </div>
          <div className="info-card">
            <div className="info-head">📏 Perpendicular Height (h)</div>
            <p>The <strong>vertical height</strong> from the centre of the base straight up to the apex. Used in <em>volume</em> calculations — <strong>never</strong> in surface area. Don't mix these up — it is the #1 cone mistake.</p>
          </div>
        </div>

        <h3>The Net — How It Unfolds</h3>
        <div className="info-card" style={{ marginBottom: "16px" }}>
          <div className="info-head">📦 Unfolding the Cone</div>
          <p>A cone unfolds into two pieces: one <strong>circle</strong> (the base) and one <strong>sector</strong> of a larger circle (the curved face). The radius of that sector is the slant height <em>l</em>. The arc length of the sector equals the circumference of the base circle (2πr).</p>
        </div>

        <h3>Curved Surface Area (CSA)</h3>
        <div className="calc-block">
          <div className="calc-formula-big">CSA = πrl</div>
          <div className="calc-legend">
            <span><strong>r</strong> = radius of the base</span>
            <span><strong>l</strong> = slant height</span>
          </div>
          <div className="calc-notes">
            <p><strong>✓ GIVEN in exam</strong> — the curved surface area of a cone will appear on the 2026 Higher Tier formula sheet.</p>
          </div>
        </div>

        <h3>Total Surface Area (TSA)</h3>
        <div className="calc-block">
          <div className="calc-formula-big">TSA = πrl + πr²</div>
          <div className="calc-legend">
            <span><strong>πrl</strong> = curved surface</span>
            <span><strong>πr²</strong> = circular base</span>
          </div>
          <div className="calc-notes">
            <p>Can be factorised as <strong>πr(l + r)</strong>.</p>
            <p><strong>⚠ Must Memorize</strong> — only the CSA is given. You must add the base yourself.</p>
            <p><strong>Remember:</strong> If you are only given the perpendicular height <em>h</em>, first find <em>l</em> using <strong>l = √(h² + r²)</strong> before substituting.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 04 PYRAMIDS */}
      <section className="section reveal" id="pyramids">
        <div className="section-header">
          <div className="section-num">04</div>
          <h2>Pyramids (Square-Based)</h2>
        </div>
        <div className="intro">
          A square-based pyramid has one square base and four identical triangular faces. There is no single formula — you calculate the area of each face individually and add them up. The same slant height vs. perpendicular height distinction applies here too.
        </div>

        <h3>Critical Vocabulary</h3>
        <div className="two-col">
          <div className="info-card accent-border">
            <div className="info-head">📐 Slant Height (l)</div>
            <p>The height of each <strong>triangular face</strong> — measured from the midpoint of a base edge up to the apex along the sloping face. Used in the area of the triangular faces: <strong>½ × base × l</strong></p>
          </div>
          <div className="info-card">
            <div className="info-head">📏 Perpendicular Height (h)</div>
            <p>The <strong>vertical height</strong> from the centre of the square base straight up to the apex. Used only in <em>volume</em>. To find slant height from perpendicular height: <strong>l = √(h² + (½a)²)</strong> where <em>a</em> is the base side length.</p>
          </div>
        </div>

        <h3>The Net — How It Unfolds</h3>
        <div className="info-card" style={{ marginBottom: "16px" }}>
          <div className="info-head">📦 Unfolding the Pyramid</div>
          <p>A square-based pyramid unfolds into one <strong>square</strong> (the base) and four identical <strong>triangles</strong> arranged around it. The height of each triangle in the net is the <strong>slant height</strong> of the 3D pyramid — not the perpendicular height.</p>
        </div>

        <h3>Curved Surface Area (CSA) — Triangular Faces Only</h3>
        <div className="calc-block">
          <div className="calc-formula-big">CSA = 4 × (½ × a × l) = 2al</div>
          <div className="calc-legend">
            <span><strong>a</strong> = side length of the square base</span>
            <span><strong>l</strong> = slant height of each triangular face</span>
          </div>
          <div className="calc-notes">
            <p><strong>⚠ Must Memorize</strong> — no pyramid surface area formula is given. Derive it from the net.</p>
          </div>
        </div>

        <h3>Total Surface Area (TSA)</h3>
        <div className="calc-block">
          <div className="calc-formula-big">TSA = 2al + a²</div>
          <div className="calc-legend">
            <span><strong>2al</strong> = sum of 4 triangular faces</span>
            <span><strong>a²</strong> = square base</span>
          </div>
          <div className="calc-notes">
            <p><strong>⚠ Must Memorize</strong> — build it up methodically: find each triangular face area, multiply by 4, then add the base.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 05 COMPOUND SHAPES */}
      <section className="section reveal" id="compound">
        <div className="section-header">
          <div className="section-num">05</div>
          <h2>Compound Shapes</h2>
        </div>
        <div className="intro">
          Compound shapes are formed by <strong>joining two or more 3D shapes together</strong>. The critical skill is identifying which faces become hidden at the join and <strong>subtracting them</strong>. This is the most common Grade 7–9 surface area question type.
        </div>

        <h3>The Golden Rule</h3>
        <div className="callout warn">
          <div className="callout-title">⚠ Never blindly add two TSA formulas together.</div>
          When two shapes are joined, the faces at the join are hidden inside the solid — they are no longer part of the outer surface. Always <strong>draw a quick sketch</strong>, identify the join, and cross out any hidden faces before calculating.
        </div>

        <h3>Common Compound Configurations</h3>
        <div className="chain-list">
          {[
            {
              label: "Hemisphere + Cylinder",
              steps: [
                { t: "CSA of hemisphere (2πr²)" },
                { t: "+ CSA of cylinder (2πrh)" },
                { t: "+ Bottom base of cylinder (πr²)" },
              ]
            },
            {
              label: "Cone + Cylinder",
              steps: [
                { t: "CSA of cone (πrl)" },
                { t: "+ CSA of cylinder (2πrh)" },
                { t: "+ Bottom base of cylinder (πr²)" },
              ]
            },
            {
              label: "Pyramid + Cuboid",
              steps: [
                { t: "CSA of pyramid (2al)" },
                { t: "+ 4 walls of cuboid" },
                { t: "+ Bottom base of cuboid" },
              ]
            },
          ].map(({ label, steps }) => (
            <div className="chain" key={label}>
              <span className="chain-label">{label}</span>
              <div className="chain-steps">
                {steps.map((s, i) => (
                  <span key={i}>
                    <span className="chain-step">{s.t}</span>
                    {i < steps.length - 1 && <span className="chain-arrow"> →</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3>Grade 9 Worked Example — Finding a Missing Radius</h3>
        <div className="intro" style={{ marginBottom: "16px" }}>
          <strong>Question:</strong> A solid is formed by attaching a hemisphere to the top of a cylinder. Both have radius <em>r</em> cm. The cylinder's perpendicular height <em>h = 3r</em>. The total surface area is <strong>144π cm²</strong>. Find <em>r</em>.
        </div>
        <div className="steps-list">
          {[
            <><strong>Identify exposed surfaces.</strong> The circle where the hemisphere joins the cylinder is hidden inside. Exposed: CSA of hemisphere + CSA of cylinder + bottom base of cylinder.</>,
            <><strong>Write the total area.</strong> TSA = 2πr² + 2πrh + πr²</>,
            <><strong>Substitute h = 3r.</strong> TSA = 2πr² + 2πr(3r) + πr² = 2πr² + 6πr² + πr²</>,
            <><strong>Simplify and set equal.</strong> 9πr² = 144π → divide by π → 9r² = 144</>,
            <><strong>Solve for r.</strong> r² = 16 → <strong>r = 4 cm</strong></>,
          ].map((text, i) => (
            <div className="step" key={i}>
              <span className="step-num">{i + 1}</span>
              <div>{text}</div>
            </div>
          ))}
        </div>
        <div className="callout">
          <div className="callout-title">💡 Exam Tip — Spot the π</div>
          When the TSA is given in terms of π (e.g. 144π), divide both sides by π immediately. This removes π from the equation and gives you a clean quadratic or linear equation to solve.
        </div>
      </section>

      <div className="divider" />

      {/* 06 FORMULAS */}
      <section className="section reveal" id="formulas">
        <div className="section-header">
          <div className="section-num">06</div>
          <h2>Formula Reference</h2>
        </div>
        <div className="intro">All formulas in one place. The <strong>Exam Aid</strong> column tells you whether it will be on the 2026 Higher Tier formula sheet — if it says MEMORIZE, you must learn it.</div>
        <table className="formula-table">
          <thead>
            <tr>
              <th>Shape</th>
              <th>CSA</th>
              <th>TSA</th>
              <th>2026 Exam Aid</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Cylinder",          "2πrh",         "2πrh + 2πr²  =  2πr(h + r)",   "⚠ MEMORIZE"],
              ["Sphere",            "4πr²",          "4πr²  (same)",                  "✓ GIVEN"],
              ["Hemisphere",        "2πr²",          "3πr²",                          "⚠ MEMORIZE"],
              ["Cone",              "πrl",           "πrl + πr²  =  πr(l + r)",       "CSA given, TSA MEMORIZE"],
              ["Square Pyramid",    "2al",           "2al + a²",                      "⚠ MEMORIZE"],
            ].map(([shape, csa, tsa, aid]) => (
              <tr key={shape}>
                <td style={{ fontWeight: 600 }}>{shape}</td>
                <td className="f-formula">{csa}</td>
                <td className="f-formula">{tsa}</td>
                <td>{aid}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="callout" style={{ marginTop: "20px" }}>
          <div className="callout-title">📐 Key Supporting Formula</div>
          <strong>Pythagoras for slant height:</strong> &nbsp; l = √(h² + r²) &nbsp;|&nbsp; l = √(h² + (a/2)²)
          <br />Use the first for cones (with radius r), the second for square pyramids (with base side a).
        </div>
      </section>

      <div className="divider" />

      {/* 07 MISTAKES */}
      <section className="section reveal" id="mistakes">
        <div className="section-header">
          <div className="section-num">07</div>
          <h2>Common Exam Mistakes</h2>
        </div>
        <div className="intro">These are the mistakes that cost students marks most often. Know them before you sit any mock or the real exam.</div>
        <div className="mistake-list">
          {[
            <><strong>Using perpendicular height instead of slant height in cones and pyramids.</strong> Surface area always uses <em>slant height l</em>. If you're not given it, use Pythagoras to find it first.</>,
            <><strong>Adding two full TSA formulas for a compound shape.</strong> The faces at the join are hidden. Only add the <em>exposed</em> surfaces.</>,
            <><strong>Forgetting the flat circular base of a hemisphere.</strong> CSA = 2πr² but TSA = 3πr². The extra πr² is the flat face.</>,
            <><strong>Using diameter instead of radius.</strong> If a question gives you the diameter, halve it before substituting into any formula — all these formulas use radius r.</>,
            <><strong>Not reading whether the shape is open or closed.</strong> An open cylinder (like a tube) has no circular ends, so TSA = CSA = 2πrh only. Check the question wording.</>,
            <><strong>Rounding too early.</strong> Keep the full value in your calculator until the very last step, then round to the required decimal places.</>,
            <><strong>Confusing surface area with volume.</strong> Surface area is measured in cm² or m². Volume is measured in cm³ or m³. Check your units at the end.</>,
          ].map((text, i) => (
            <div className="mistake" key={i}><span className="mistake-x">✗</span><div>{text}</div></div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* 08 GLOSSARY */}
      <section className="section reveal" id="glossary">
        <div className="section-header">
          <div className="section-num">08</div>
          <h2>Glossary</h2>
        </div>
        <div className="intro">Key terms for surface area of 3D shapes. Examiners award marks for precise language — use these exact definitions.</div>
        <table className="def-table">
          <thead><tr><th>Term</th><th>Definition</th></tr></thead>
          <tbody>
            {[
              ["Net",                "A 2D shape that can be folded up to make a 3D solid. Every face appears as a flat polygon in the net."],
              ["Surface Area",       "The total area of all the outer faces of a 3D shape. Measured in cm² or m²."],
              ["Curved Surface Area (CSA)", "The area of only the curved (non-flat) part of a 3D shape. Used for cylinders, cones, and spheres."],
              ["Total Surface Area (TSA)", "The area of all faces including flat bases. TSA = CSA + area of all flat faces."],
              ["Slant Height (l)",   "The distance along the sloping face of a cone or pyramid from the apex to the base edge. ALWAYS used in surface area, never confused with perpendicular height."],
              ["Perpendicular Height (h)", "The straight vertical distance from the base to the apex. Used in volume, not in surface area."],
              ["Radius (r)",         "The distance from the centre of a circle to its edge. Always halve the diameter if given."],
              ["Apex",               "The very top point of a cone or pyramid."],
              ["Compound Shape",     "A 3D solid formed by joining two or more simple 3D shapes. Faces at the join are hidden and must be excluded from the surface area."],
              ["Formula Sheet",      "A sheet provided in the 2025–2027 GCSE exams listing certain formulas. Sphere SA and Cone CSA are given; cylinder and pyramid formulas must be memorised."],
              ["Pythagoras' Theorem","a² + b² = c². Used to find slant height l when only the perpendicular height h and radius r are given: l = √(h² + r²)."],
            ].map(([word, def]) => (
              <tr key={word}><td>{word}</td><td>{def}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

    </NotesLayout>
  )
}

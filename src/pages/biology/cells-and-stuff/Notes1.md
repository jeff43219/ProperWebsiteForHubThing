import { useState } from 'react';
import NotesLayout from '../../../components/NotesLayout';

const TOPICS = [
  { num: "01", id: "foundations", label: "Cell Foundations" },
  { num: "02", id: "specialisation", label: "Cell Specialisation" },
  { num: "03", id: "transport", label: "Transport & Exchange" },
  { num: "04", id: "evolution", label: "Evolution & Continuity" },
];

const REFERENCE = [
  { num: "05", id: "glossary", label: "Glossary" },
];

const ORGANELLES = [
  { name: "Nucleus", feat: "Double membrane (nuclear envelope).", func: "Contains DNA; controls cell activities via protein synthesis.", found: "All eukaryotes" },
  { name: "Mitochondria", feat: "Inner membrane folded into cristae.", func: "Site of aerobic respiration; releases energy as ATP.", found: "All eukaryotes" },
  { name: "Chloroplasts", feat: "Contains thylakoids/grana and chlorophyll.", func: "Site of photosynthesis; absorbs light energy.", found: "Plant cells" },
  { name: "Permanent Vacuole", feat: "Filled with cell sap (sugars/salts).", func: "Maintains turgor pressure for structural support.", found: "Plant cells" },
  { name: "Plasmids", feat: "Small, circular loops of extra DNA.", func: "Contain genes for antibiotic resistance; transferrable.", found: "Prokaryotes" },
  { name: "70S vs 80S Ribosomes", feat: "70S (smaller) vs 80S (larger).", func: "Site of translation (protein synthesis).", found: "Prokaryotes vs Eukaryotes" }
];

const SPECIALISED_CELLS = [
  {
    name: "Nerve Cell (Neurone)",
    cat: "Animal",
    adaptations: [
      { a: "Long Axon (1m+)", f: "Rapid impulse transmission over long distances." },
      { a: "Myelin Sheath", f: "Fatty insulation allowing saltatory conduction." },
      { a: "Dendrites", f: "Increased connectivity with other neurons." }
    ]
  },
  {
    name: "Muscle Cell",
    cat: "Animal",
    adaptations: [
      { a: "Protein Filaments", f: "Actin and myosin slide for contraction." },
      { a: "Mitochondrial Density", f: "High ATP supply for mechanical work." },
      { a: "Glycogen Stores", f: "Rapid glucose source for respiration." }
    ]
  },
  {
    name: "Red Blood Cell",
    cat: "Animal",
    adaptations: [
      { a: "Biconcave Shape", f: "Maximises surface area for oxygen uptake." },
      { a: "No Nucleus", f: "Creates more space for haemoglobin molecules." },
      { a: "Flexible Membrane", f: "Allows cell to squeeze through narrow capillaries." }
    ]
  },
  {
    name: "Sperm Cell",
    cat: "Animal",
    adaptations: [
      { a: "Acrosome", f: "Hydrolytic enzymes to digest the zona pellucida." },
      { a: "Middle Piece", f: "Packed with mitochondria to power the tail." },
      { a: "Flagellum", f: "Whip-like propeller for motility." }
    ]
  },
  {
    name: "Root Hair Cell",
    cat: "Plant",
    adaptations: [
      { a: "Hair-like Extension", f: "Huge SA for water (osmosis) and minerals (active)." },
      { a: "Mitochondria", f: "ATP for active transport of ions against gradient." },
      { a: "No Chloroplasts", f: "Subterranean; resources diverted to absorption." }
    ]
  },
  {
    name: "Xylem Vessel",
    cat: "Plant",
    adaptations: [
      { a: "Lignin Reinforcement", f: "Prevents collapse under transpiration tension." },
      { a: "Dead/Hollow", f: "Forms a physical tube for continuous mass flow." },
      { a: "Pits", f: "Lateral water movement between vessels." }
    ]
  },
  {
    name: "Palisade Cell",
    cat: "Plant",
    adaptations: [
      { a: "Chloroplast Density", f: "Packed at the top of the leaf to maximise light absorption." },
      { a: "Columnar Shape", f: "Allows cells to pack tightly for maximum efficiency." },
      { a: "Thin Cell Wall", f: "Short diffusion distance for CO₂ entry." }
    ]
  }
];

const GLOSSARY = [
  { word: "Resolution", def: "The ability to distinguish between two points that are close together." },
  { word: "Magnification", def: "How many times larger an image appears compared to the real object." },
  { word: "Differentiation", def: "Process where cells acquire specific structural features to perform a role." },
  { word: "Stem Cell", def: "Undifferentiated cell capable of dividing to produce many more cells of the same type." },
  { word: "Prokaryotic", def: "Cell with no membrane-bound nucleus; DNA is a circular loop." },
  { word: "Eukaryotic", def: "Cell with DNA contained in a membrane-bound nucleus." },
  { word: "Passive Transport", def: "Movement of molecules down a gradient requiring no metabolic energy." },
  { word: "Net Movement", def: "The overall direction of movement (e.g. in osmosis)." }
];

export default function Notes() {
  const [openCell, setOpenCell] = useState(null);

  return (
    <NotesLayout
      tag="Ultimate Biology v2.0"
      title="The Cellular & Evolutionary Masterclass"
      subtitle="Exhaustive high-tier research covering ultrastructure, transport physics, and reproductive sequences. Designed for Grade 9 Mastery."
      accent="#2d9e7f"
      topics={TOPICS}
      reference={REFERENCE}
    >
      {/* 01 FOUNDATIONS */}
      <section className="section reveal" id="foundations">
        <div className="section-header">
          <div className="section-num">01</div>
          <h2>Cell Foundations & Organization</h2>
        </div>
        <div className="intro">
          Biological systems bridge the gap between inanimate molecules and conscious life through structured compartmentalisation and the management of metabolic energy.
        </div>

        <h3>Levels of Organisation</h3>
        <div className="steps-list mb-8">
          {[
            { t: "Cells", d: "Basic functional units (e.g. Muscle cell)." },
            { t: "Tissues", d: "Groups of similar cells performing a function (e.g. Muscle tissue)." },
            { t: "Organs", d: "Groups of different tissues working together (e.g. The Heart)." },
            { t: "Organ Systems", d: "Groups of organs performing complex roles (e.g. Circulatory system)." },
            { t: "Organism", d: "The integrated living entity." }
          ].map((item, i) => (
            <div className="step" key={i}>
              <span className="step-num">{i + 1}</span>
              <div><strong>{item.t}:</strong> {item.d}</div>
            </div>
          ))}
        </div>

        <h3>Advanced Microscopy math</h3>
        <div className="two-col">
          <div className="calc-block h-full">
            <div className="calc-formula-big">I = A × M</div>
            <div className="calc-notes">
              <p>Where <strong>I</strong> = Image size, <strong>A</strong> = Actual size, and <strong>M</strong> = Magnification.</p>
              <p className="mt-2 text-xs text-[var(--accent)] font-bold">PRO TIP: Always convert units to µm before calculating (1mm = 1000µm).</p>
            </div>
          </div>
          <div className="info-card h-full">
            <div className="info-head">Light vs Electron</div>
            <ul className="text-[0.82rem] leading-[1.6] space-y-1">
              <li><strong>Light:</strong> Visible light; max mag ~2000x; max res ~200nm. (Can view live specimens).</li>
              <li><strong>Electron:</strong> Beam of electrons; max mag ~2,000,000x; max res ~0.2nm. (Vacuum required).</li>
            </ul>
          </div>
        </div>

        <div className="callout mt-8">
          <div className="callout-title">The Endosymbiotic Theory</div>
          <p>Mitochondria and chloroplasts were once free-living prokaryotes. Evidence: They have their own <strong>circular DNA</strong>, <strong>70S ribosomes</strong>, and divide via <strong>binary fission</strong>—identical to bacteria.</p>
        </div>
      </section>

      <div className="divider" />

      {/* 02 SPECIALISATION */}
      <section className="section reveal" id="specialisation">
        <div className="section-header">
          <div className="section-num">02</div>
          <h2>Cell Specialisation & Stem Cells</h2>
        </div>
        <div className="intro">
          Differentiation is the engine of complexity. Cells lose <strong>totipotency</strong> as they mature, becoming high-fidelity machines for specific environmental challenges.
        </div>

        <div className="flex flex-col gap-3">
          {SPECIALISED_CELLS.map(cell => (
            <div key={cell.name} className="bg-[var(--surface)] border-[1.5px] border-[var(--border)] rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-5 py-4 font-bold text-[var(--text)] flex justify-between items-center text-[0.88rem]"
                onClick={() => setOpenCell(openCell === cell.name ? null : cell.name)}
              >
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-widest uppercase ${cell.cat === 'Plant' ? 'bg-[#2E9E6B]26 text-[#2E9E6B]' : 'bg-[#d4522a]26 text-[#d4522a]'}`}>
                    {cell.cat}
                  </span>
                  {cell.name}
                </div>
                <span className="text-[var(--accent)]">{openCell === cell.name ? '−' : '+'}</span>
              </button>
              {openCell === cell.name && (
                <div className="px-5 pb-5 border-t border-[var(--border)] pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {cell.adaptations.map((a, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[var(--accent)] font-bold text-[0.7rem] uppercase tracking-wider mb-0.5">{a.a}</span>
                        <span className="text-[var(--muted)] text-[0.82rem] leading-[1.5]">{a.f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 className="mt-10">Stem Cell Potency</h3>
        <div className="two-col tight">
          <div className="pro-card">
            <div className="pro-head">Embryonic Stem Cells</div>
            <p className="text-[0.82rem] mb-2 leading-relaxed">Derived from 5-day blastocysts. They are <strong>pluripotent</strong>, meaning they can differentiate into <em>any</em> cell type in the body.</p>
            <div className="text-[0.72rem] text-[#2E9E6B] font-bold">ETHICAL NOTE: Potential for treating paralysis/diabetes.</div>
          </div>
          <div className="con-card">
            <div className="con-head">Adult Stem Cells</div>
            <p className="text-[0.82rem] mb-2 leading-relaxed">Found in bone marrow. They are <strong>multipotent</strong>, limited to differentiating into specific types (e.g. blood cells).</p>
            <div className="text-[0.72rem] text-[#d4522a] font-bold">LIMITATION: Narrow differentiation range.</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 03 TRANSPORT */}
      <section className="section reveal" id="transport">
        <div className="section-header">
          <div className="section-num">03</div>
          <h2>Transport & Required Practical</h2>
        </div>
        <div className="intro">
          Life is a constant battle against equilibrium. Cells spend metabolic capital (ATP) to maintain steep concentration gradients through <strong>Active Transport</strong>.
        </div>

        <div className="callout warn mb-8">
          <div className="callout-title">Required Practical: Osmosis in Potatoes</div>
          <p className="mb-2"><strong>The Logic:</strong> If a potato cylinder is placed in a solution with lower water potential (hypertonic), it loses mass via osmosis.</p>
          <p className="text-[0.85rem] text-[var(--muted)]"><strong>Key Variables:</strong> Dependent = % Change in mass; Independent = Concentration of sugar solution; Controlled = Temperature, Surface Area of potato.</p>
        </div>

        <h3>Exchange Surface Deep Dives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="info-card">
            <div className="info-head">The Alveoli (Human Lungs)</div>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.6]">
              • <strong>SA:</strong> Millions of spherical sacs provide area of ~70m².<br />
              • <strong>Distance:</strong> Walls are <strong>one cell thick</strong> (squamous epithelium).<br />
              • <strong>Gradient:</strong> Continuous ventilation and blood flow via capillaries.
            </p>
          </div>
          <div className="info-card">
            <div className="info-head">Small Intestine (Villi)</div>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.6]">
              • <strong>SA:</strong> Microvilli on the surface of villi increase area massively.<br />
              • <strong>Distance:</strong> Blood vessels are adjacent to the surface.<br />
              • <strong>Role:</strong> Glucose enters via active transport; fats enter the <strong>lacteal</strong>.
            </p>
          </div>
        </div>

        <div className="calc-block mt-8">
          <div className="calc-formula-big">Fick's Law: Rate ∝ (SA × ΔC) / d</div>
          <div className="calc-notes text-center">
            To maximise rate, organisms evolve to maximise <strong>Surface Area (SA)</strong> and <strong>Concentration Gradient (ΔC)</strong>, while minimising <strong>Diffusion Distance (d)</strong>.
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 04 EVOLUTION */}
      <section className="section reveal" id="evolution">
        <div className="section-header">
          <div className="section-num">04</div>
          <h2>The Continuity of Life</h2>
        </div>
        <div className="intro">
          Variation is the substrate; Natural Selection is the sculptor. Together they drive the genomic adaptation of all life on Earth.
        </div>

        <h3>Reproductive Milestones</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="info-card">
            <div className="info-head">The Cortical Reaction</div>
            <p className="text-[0.83rem] text-[var(--muted)] leading-[1.6]">Triggered by the first sperm penetration. Cortical granules release enzymes to <strong>harden the zona pellucida</strong>, preventing lethal polyspermy.</p>
          </div>
          <div className="info-card">
            <div className="info-head">Hormonal Maintenance</div>
            <p className="text-[0.83rem] text-[var(--muted)] leading-[1.6]">The implanted blastocyst secretes <strong>hCG</strong>, signalling the corpus luteum to continue <strong>progesterone</strong> production, stalling menstruation.</p>
          </div>
        </div>

        <h3>Natural Selection in Action: Peppered Moths</h3>
        <div className="resource-block">
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Pre-Industrial</div>
              <p className="text-[0.82rem] mb-2">Pale bark trees favored pale moths. Rare dark mutants were easily spotted by birds and predated.</p>
              <div className="text-[0.72rem] font-bold text-[var(--accent)]">ALLELE FREQUENCY: Pale = 99%</div>
            </div>
            <div className="con-card">
              <div className="con-head">Post-Industrial</div>
              <p className="text-[0.82rem] mb-2">Soot darkened the trees. Now, pale moths were predated; dark mutants survived and reproduced.</p>
              <div className="text-[0.72rem] font-bold text-[var(--accent)]">ALLELE FREQUENCY: Dark = 90%+</div>
            </div>
          </div>
        </div>

        <div className="callout mt-6">
          <div className="callout-title">Therapeutic Cloning</div>
          <p>The creation of an embryo with the <strong>same genes as the patient</strong>. Stem cells harvested would not be rejected by the patient's immune system, allowing for the regrowth of organs or nerves.</p>
        </div>
      </section>

      <div className="divider" />

      {/* 05 GLOSSARY */}
      <section className="section reveal" id="glossary">
        <div className="section-header">
          <div className="section-num">05</div>
          <h2>Glossary</h2>
        </div>
        <table className="def-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>High-Tier Definition</th>
            </tr>
          </thead>
          <tbody>
            {GLOSSARY.map((g) => (
              <tr key={g.word}>
                <td className="font-bold text-[var(--accent)]">{g.word}</td>
                <td className="text-[var(--muted)]">{g.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </NotesLayout>
  );
}

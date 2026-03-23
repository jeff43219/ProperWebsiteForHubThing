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
  { name: "Nucleus", feat: "Double membrane (nuclear envelope) with nuclear pores; contains chromatin (DNA + histone proteins); contains a nucleolus where rRNA is synthesised.", func: "Contains genetic material (DNA); controls cell activities by providing instructions for protein synthesis via mRNA transcription.", found: "All eukaryotes" },
  { name: "Mitochondria", feat: "Double membrane; inner membrane folded into cristae (greatly increases surface area for ATP synthase); fluid interior called the matrix contains its own DNA and 70S ribosomes.", func: "Site of aerobic respiration; the cristae host the electron transport chain; the matrix is where the Krebs cycle occurs. Releases energy as ATP.", found: "All eukaryotes" },
  { name: "Ribosomes", feat: "No membrane; two subunits (large + small); 70S in prokaryotes, 80S in eukaryotes. Found free in cytoplasm or bound to Rough ER.", func: "Site of protein synthesis (translation); reads mRNA codons and assembles amino acid chains (polypeptides).", found: "All cells" },
  { name: "Chloroplasts", feat: "Double membrane; inner system of thylakoid membranes (stacked into grana, connected by lamellae); fluid stroma contains its own DNA and ribosomes.", func: "Site of photosynthesis; light-dependent reactions occur on thylakoid membranes; light-independent reactions (Calvin cycle) occur in the stroma.", found: "Plant cells & algae" },
  { name: "Vacuole", feat: "Single membrane (tonoplast) filled with cell sap (dilute solution of sugars, salts, and pigments).", func: "Maintains turgor pressure against the cell wall, providing structural rigidity. In plants, the central vacuole can occupy up to 90% of cell volume.", found: "Large/Permanent in Plants; small/temporary in animal cells" },
  { name: "Cell Membrane", feat: "Phospholipid bilayer with embedded intrinsic (channel/carrier) and extrinsic proteins (Fluid Mosaic Model). Cholesterol molecules regulate fluidity.", func: "Controls what enters/leaves the cell; site of receptor proteins for hormones and cell signalling.", found: "All cells" },
  { name: "Rough ER (RER)", feat: "Network of membrane-bound sacs (cisternae) studded with 80S ribosomes on the outer surface.", func: "Transports proteins synthesised by ribosomes; modifies and folds them before export to the Golgi apparatus.", found: "Eukaryotes (abundant in secretory cells e.g. pancreatic cells)" },
  { name: "Smooth ER (SER)", feat: "Membrane-bound sacs without ribosomes; continuous with the RER.", func: "Synthesises lipids (phospholipids, steroids); detoxifies drugs and toxins; stores calcium ions in muscle cells.", found: "Eukaryotes (abundant in liver and muscle cells)" },
  { name: "Golgi Apparatus", feat: "Stack of flattened membrane-bound sacs (cisternae); has a cis (receiving) face and a trans (secreting) face.", func: "Receives proteins from RER via vesicles; modifies, packages, and sorts them; produces lysosomes; secretes proteins via secretory vesicles.", found: "Eukaryotes" },
  { name: "Lysosomes", feat: "Small membrane-bound vesicles containing hydrolytic (digestive) enzymes (e.g. proteases, lipases) maintained at low pH (~4.8).", func: "Intracellular digestion of pathogens (after phagocytosis), worn-out organelles (autophagy), and programmed cell death (apoptosis).", found: "Animal cells (especially phagocytes and white blood cells)" },
  { name: "Centrioles", feat: "Two cylindrical structures made of microtubule triplets, arranged at right angles to each other (forming the centrosome).", func: "Organise the spindle fibres during mitosis and meiosis to pull chromosomes to opposite poles. Absent in most plant cells.", found: "Animal cells; some lower plants" },
  { name: "Cell Wall", feat: "Rigid outer layer; cellulose microfibrils in plants, chitin in fungi, peptidoglycan in bacteria. NOT a membrane — freely permeable.", func: "Provides structural support and prevents osmotic lysis (cell bursting). The wall pressure it exerts on a turgid cell is called wall pressure.", found: "Plants, fungi, bacteria (NOT animal cells)" }
];

const PROTEIN_SECRETION_PATHWAY = [
  { step: "1. Ribosome (on RER)", detail: "Protein is synthesised and threaded into the lumen of the RER." },
  { step: "2. Transport Vesicle", detail: "Protein is packaged into a vesicle that buds off from the RER membrane." },
  { step: "3. Golgi Apparatus (cis face)", detail: "Vesicle fuses with the Golgi; protein is modified (e.g. glycosylation — adding sugar chains)." },
  { step: "4. Golgi (trans face)", detail: "Modified protein is packaged into a secretory vesicle." },
  { step: "5. Cell Membrane", detail: "Secretory vesicle fuses with the membrane; protein is exocytosed out of the cell." },
];

const UNICELLULAR_ADAPTATIONS = [
  { name: "Amoeba", movement: "Pseudopodia (temporary cytoplasmic projections) used for 'creeping' and phagocytosis of food particles.", control: "Contractile vacuole collects and expels excess water to prevent bursting (osmotic lysis) — critical as a freshwater organism with higher solute concentration than its surroundings." },
  { name: "Euglena", movement: "Flagellum acts as a whip-like propeller; eyespot (photoreceptor) detects light direction for optimal photosynthesis (phototaxis).", control: "Pellicle (flexible protein strips beneath the membrane) allows shape changes for movement through viscous water." },
  { name: "Paramecium", movement: "Thousands of cilia beat in coordinated waves (metachronal rhythm) for rapid directional movement.", control: "Two contractile vacuoles (one at each end) continuously pump out water by osmoregulation. Trichocysts can be fired for defence." },
  { name: "Bacteria", movement: "Rotating flagella (driven by a protein motor) for motility; pili (protein tubes) for attachment to surfaces and conjugation.", control: "Slime layer (capsule) protects from desiccation, antibiotics, and host immune detection. Endospore formation under stress." }
];

const CELL_FRACTIONATION = [
  { step: "1. Homogenisation", detail: "Cells are broken open (e.g. using a blender) in ice-cold isotonic buffer solution. Cold = prevents enzyme activity; isotonic = prevents osmotic damage to organelles; buffered = prevents pH changes." },
  { step: "2. Filtration", detail: "The homogenate is filtered through muslin/gauze to remove cell debris (cell wall fragments, connective tissue)." },
  { step: "3. Low-speed centrifugation (~1,000g)", detail: "Largest, heaviest structures pellet first: nuclei and cell debris form a pellet at the bottom. The supernatant (liquid above) is removed." },
  { step: "4. Medium-speed centrifugation (~10,000g)", detail: "The supernatant is spun again. Mitochondria, chloroplasts, and lysosomes pellet at this stage." },
  { step: "5. High-speed centrifugation (~100,000g)", detail: "ER fragments and ribosomes are pelleted. The final supernatant contains soluble cytoplasm proteins." },
];

const SPECIALISED_CELLS = [
  {
    name: "Nerve Cell (Neurone)",
    cat: "Animal",
    adaptations: [
      { a: "Long Axon (up to 1m)", f: "Carries electrical impulses over long distances without relay stations." },
      { a: "Myelin Sheath", f: "Fatty insulation layer (formed by Schwann cells) increases speed of transmission via saltatory conduction — the impulse jumps between nodes of Ranvier rather than travelling continuously, massively increasing speed." },
      { a: "Many Dendrites", f: "Branched extensions provide large surface area for connecting with multiple other neurones, allowing integration of signals." },
      { a: "Synaptic Knobs", f: "Contain vesicles of neurotransmitters (e.g. acetylcholine) and high mitochondria density for ATP-driven active transport of neurotransmitter precursors." },
      { a: "Node of Ranvier", f: "Gaps in the myelin sheath (~1mm apart) where the action potential is regenerated, enabling saltatory conduction." }
    ]
  },
  {
    name: "Red Blood Cell (Erythrocyte)",
    cat: "Animal",
    adaptations: [
      { a: "Biconcave Disc Shape", f: "Maximises surface area to volume ratio for faster O₂ diffusion. No nucleus or organelles means maximum space for haemoglobin packing." },
      { a: "No Nucleus", f: "Differentiated erythrocytes expel their nucleus during maturation, allowing space for ~280 million haemoglobin molecules per cell." },
      { a: "Flexible Membrane", f: "Can squeeze through capillaries narrower than its own diameter (as small as 3µm vs 8µm cell diameter) without rupturing." },
      { a: "High Haemoglobin Content", f: "Each molecule binds 4 O₂ cooperatively (sigmoidal dissociation curve). At low pO₂ (respiring tissues), O₂ is released readily." },
      { a: "Short Lifespan (120 days)", f: "Lack of a nucleus means they cannot repair DNA damage. Aged cells are recycled by phagocytes in the spleen and liver." }
    ]
  },
  {
    name: "Ciliated Epithelial Cell",
    cat: "Animal",
    adaptations: [
      { a: "Cilia (200–300 per cell)", f: "Hair-like projections (~10µm long) beat in coordinated waves (metachronal rhythm) to sweep mucus and trapped pathogens/particles up toward the throat (mucociliary escalator)." },
      { a: "High Mitochondrial Density", f: "Cilia beating is powered by ATP hydrolysis using dynein motor proteins, requiring continuous mitochondrial ATP supply." },
      { a: "Goblet Cells (adjacent)", f: "Secrete mucus via exocytosis; mucus traps particles >5µm and pathogens before they reach the alveoli. The two cell types always work in partnership." },
      { a: "Tight Junctions", f: "Adjacent cells are sealed to prevent pathogens penetrating between cells into the bloodstream." }
    ]
  },
  {
    name: "Muscle Cell (Skeletal)",
    cat: "Animal",
    adaptations: [
      { a: "Protein Filaments (Sarcomeres)", f: "Actin (thin) and myosin (thick) filaments are arranged in repeating units called sarcomeres. During contraction, myosin heads bind actin, forming cross-bridges, and the filaments slide over one another (sliding filament theory)." },
      { a: "High Mitochondrial Density", f: "Provides sustained ATP production for repeated contraction cycles. Type I (slow-twitch) fibres have more mitochondria than type II (fast-twitch)." },
      { a: "Multinucleate", f: "Multiple nuclei coordinate the large cell volume; each nucleus controls a specific region (myonuclear domain)." },
      { a: "Sarcoplasmic Reticulum", f: "Stores Ca²⁺ ions; releases them on nerve impulse arrival to trigger the troponin-tropomyosin complex to expose actin binding sites." },
      { a: "T-Tubules", f: "Deep infoldings of the membrane rapidly conduct the action potential deep into the fibre, ensuring simultaneous contraction throughout." }
    ]
  },
  {
    name: "Sperm Cell",
    cat: "Animal",
    adaptations: [
      { a: "Acrosome Reaction", f: "Cap releases hydrolytic enzymes (acrosin, hyaluronidase) to digest through the zona pellucida of the egg." },
      { a: "Mitochondrial Midpiece", f: "Tightly coiled mitochondria (spiral arrangement) in the midpiece produce ATP to power the flagellum. One sperm can swim up to 72 hours." },
      { a: "Haploid Nucleus", f: "Contains 23 chromosomes to restore the diploid number (46) at fertilisation. DNA is tightly compacted with protamine proteins (instead of histones)." },
      { a: "Flagellum (Tail)", f: "9+2 arrangement of microtubules (axoneme); dynein motor proteins cause sliding to create whip-like movement." },
      { a: "Streamlined Head", f: "Minimal cytoplasm reduces drag; hydrodynamic shape allows penetration of cervical mucus." }
    ]
  },
  {
    name: "Root Hair Cell",
    cat: "Plant",
    adaptations: [
      { a: "Hair-like Extension", f: "Dramatically increases the surface area (estimated 10×) for water (osmosis) and mineral (active transport) absorption." },
      { a: "Low Water Potential (Ψ)", f: "High solute concentration in vacuole maintains a lower water potential than surrounding soil water, driving osmosis inward down the gradient." },
      { a: "High Mitochondrial Density", f: "Provides ATP needed for active transport of mineral ions (NO₃⁻, K⁺, PO₄³⁻) against the concentration gradient via carrier proteins." },
      { a: "No Chloroplasts", f: "Underground cell where no light is available; chloroplasts would be non-functional and metabolically costly to maintain." },
      { a: "Thin Cell Wall", f: "Reduces diffusion distance for water and ions moving from soil solution to the cytoplasm." }
    ]
  },
  {
    name: "Xylem Vessel",
    cat: "Plant",
    adaptations: [
      { a: "Lignin Deposition", f: "Spirals, rings, or complete sheets of lignin reinforce walls, prevent collapse under the negative pressure (tension) of the transpiration stream, and provide mechanical support." },
      { a: "Dead, Hollow Cells (Vessel Elements)", f: "Loss of cytoplasm and dissolution of end walls at maturity forms a continuous, unobstructed tube for the transpiration stream. The lumen can be up to 500µm in diameter." },
      { a: "Pits", f: "Thin, unthickened regions in the lignified wall allow lateral movement of water between adjacent vessels and into surrounding cells." },
      { a: "Narrow Lumen", f: "Allows water to rise by capillary action; cohesion between water molecules and adhesion to vessel walls maintain the water column under tension." }
    ]
  },
  {
    name: "Phloem (Sieve Tube Element)",
    cat: "Plant",
    adaptations: [
      { a: "Sieve Plates", f: "Perforated end walls (pores 1–15µm) allow dissolved sugars (sucrose) and amino acids to flow freely between elements (translocation)." },
      { a: "Companion Cells", f: "Nucleated cells (connected via plasmodesmata) provide metabolic support and ATP for active loading of sucrose into the sieve tube at source (leaves)." },
      { a: "No Nucleus / Few Organelles", f: "Maximises the cross-sectional area available for solute flow; all metabolic control is delegated to companion cells." },
      { a: "Plasmodesmata", f: "Cytoplasmic channels between companion cells and sieve elements allow direct transfer of ATP and other molecules." }
    ]
  }
];

const STEM_CELLS = [
  { type: "Totipotent", desc: "Can differentiate into any cell type including extraembryonic tissue (e.g. placenta). Only exists in the first few divisions of a fertilised egg (zygote → 8-cell stage)." },
  { type: "Pluripotent", desc: "Can differentiate into any cell of the body (3 germ layers) but NOT extraembryonic tissue. Found in the inner cell mass of the blastocyst. Used in embryonic stem cell research." },
  { type: "Multipotent", desc: "Can only differentiate into a limited range of cell types within a tissue lineage. Example: haematopoietic (bone marrow) stem cells produce all blood cell types." },
  { type: "Unipotent", desc: "Can only produce one cell type. Example: skin epidermal stem cells constantly divide to replace lost keratinocytes." },
];

const GLOSSARY = [
  { term: "Prokaryotic", def: "Cell lacking a membrane-bound nucleus and organelles; genetic material is a single circular DNA strand in the nucleoid region. Size: 0.1–10µm." },
  { term: "Eukaryotic", def: "Cell containing a membrane-bound nucleus housing linear chromosomal DNA and membrane-bound organelles. Size: 10–100µm." },
  { term: "Turgid", def: "Plant cell state in hypotonic (more dilute) solution: water enters by osmosis, vacuole swells, cell wall exerts inward wall pressure — the cell is firm but cannot burst due to the wall." },
  { term: "Plasmolysed", def: "Plant cell state in hypertonic (more concentrated) solution: water leaves by osmosis, the vacuole shrinks, and the cell membrane pulls away from the cell wall (the protoplast retracts)." },
  { term: "Incipient Plasmolysis", def: "The point at which the cell membrane just begins to pull away from the cell wall; water potential inside the cell equals that of the external solution." },
  { term: "Active Transport", def: "Movement of substances against their concentration gradient using energy (ATP) from respiration and specific carrier proteins (pumps). Example: sodium-potassium pump." },
  { term: "Facilitated Diffusion", def: "Passive movement of molecules down their concentration gradient via specific channel or carrier proteins. No energy required. Example: glucose uptake by GLUT proteins." },
  { term: "SA:V Ratio", def: "Surface area to volume ratio; as organism size increases, volume grows faster than surface area (volume ∝ l³, SA ∝ l²), decreasing the ratio and making diffusion insufficient." },
  { term: "Acrosome Reaction", def: "Release of hydrolytic enzymes (acrosin, hyaluronidase) from the sperm head's acrosome cap to dissolve the zona pellucida (glycoprotein layer) of the egg." },
  { term: "Cortical Reaction", def: "Release of cortical granules beneath the egg membrane after sperm entry; enzymes harden the zona pellucida into a fertilisation membrane, permanently preventing polyspermy." },
  { term: "Polyspermy", def: "Fertilisation of one egg by more than one sperm, which would result in a non-viable polyploid cell. Prevented by the fast block (membrane depolarisation) and slow block (cortical reaction)." },
  { term: "Natural Selection", def: "The process by which individuals with advantageous heritable characteristics are more likely to survive, reproduce, and pass those alleles to offspring, increasing their frequency." },
  { term: "Allele Frequency", def: "The proportion of a specific allele within a total gene pool of a population. Changes over generations via selection, mutation, genetic drift, or gene flow." },
  { term: "Genetic Drift", def: "Random change in allele frequency in a small population due to chance (not selection). Can lead to fixation or loss of alleles regardless of fitness." },
  { term: "Gene Pool", def: "The total collection of all alleles of all genes in a breeding population at a given time." },
  { term: "Speciation", def: "The formation of new, reproductively isolated species from an existing species. In allopatric speciation, a physical barrier separates populations; in sympatric speciation, isolation occurs within the same geographic area." },
  { term: "Reproductive Isolation", def: "The inability of two populations to interbreed and produce fertile offspring. Can be pre-zygotic (behavioural, temporal, mechanical) or post-zygotic (hybrid infertility)." },
  { term: "Differential Gene Expression", def: "The process by which all cells contain the same genome but express different genes at different times, producing the diverse cell types of a multicellular organism." },
  { term: "Apoptosis", def: "Programmed cell death — a controlled cellular 'self-destruct' mechanism essential for development (e.g. finger separation in embryo) and removing cancerous/damaged cells." },
  { term: "Osmosis", def: "The net movement of water molecules from a region of higher water potential to a region of lower water potential through a partially permeable membrane, down the water potential gradient." },
  { term: "Water Potential (Ψ)", def: "A measure of the tendency of water to move by osmosis. Measured in kPa. Pure water = 0 kPa (maximum). Any dissolved solutes lower water potential, giving a negative value." },
  { term: "Cell Fractionation", def: "Technique used to separate organelles from disrupted cells by spinning in a centrifuge at progressively higher speeds. Heaviest organelles (nuclei) pellet first." },
  { term: "Mitosis", def: "Cell division producing two genetically identical diploid daughter cells. Used for growth, repair, and asexual reproduction. Consists of prophase, metaphase, anaphase, telophase." },
  { term: "Meiosis", def: "Cell division producing four genetically unique haploid daughter cells. Occurs in gonads to produce gametes. Involves two rounds of division (meiosis I and II) and generates variation via crossing over and independent assortment." },
];

export default function Notes() {
  const [openCell, setOpenCell] = useState(null);
  const [openFrac, setOpenFrac] = useState(false);

  return (
    <NotesLayout
      tag="GCSE Biology 2026"
      title="Cellular Systems & Evolutionary Continuity"
      subtitle="Exhaustive Grade 9 research artifact synthesizing cellular ultrastructure, transport physics, and reproductive sequences."
      accent="#2d9e7f"
      topics={TOPICS}
      reference={REFERENCE}
    >
      {/* 01 FOUNDATIONS */}
      <section className="section reveal" id="foundations">
        <div className="section-header">
          <div className="section-num">01</div>
          <h2>Cell Foundations</h2>
        </div>
        <div className="intro">
          The 2026 standards prioritize the sophisticated analysis of how cellular ultrastructure facilitates life. The distinction between <strong>eukaryotic</strong> and <strong>prokaryotic</strong> cells is an exploration of how evolutionary strategies manage genetic storage and metabolic energy generation.
        </div>

        <h3>The Architecture of Life</h3>
        <div className="two-col">
          <div className="info-card">
            <div className="info-head">Prokaryotic (Bacteria)</div>
            <p className="text-[0.88rem] leading-[1.6] text-[var(--muted)] mb-3">
              • <strong>Size:</strong> Typically 0.1–10µm.<br />
              • <strong>Genetic Material:</strong> Single circular DNA strand (nucleoid) — not membrane-bound. May also carry <strong>plasmids</strong> (small circular DNA loops) for horizontal gene transfer and antibiotic resistance genes.<br />
              • <strong>Ribosomes:</strong> Small <strong>70S</strong> type (30S + 50S subunits). Target of antibiotics like streptomycin.<br />
              • <strong>Energy:</strong> Respiration occurs across the cell membrane (invaginations called mesosomes).<br />
              • <strong>No Membrane-Bound Organelles:</strong> No mitochondria, no ER, no Golgi.<br />
              • <strong>Defense:</strong> Peptidoglycan cell wall often surrounded by a <strong>slime layer (capsule)</strong> — protects from phagocytosis and dehydration.
            </p>
          </div>
          <div className="info-card">
            <div className="info-head">Eukaryotic (Animal/Plant)</div>
            <p className="text-[0.88rem] leading-[1.6] text-[var(--muted)] mb-3">
              • <strong>Size:</strong> Typically 10–100µm.<br />
              • <strong>Genetic Material:</strong> Linear chromosomes contained in a <strong>double-membrane nucleus</strong>. DNA is associated with histone proteins.<br />
              • <strong>Ribosomes:</strong> Large <strong>80S</strong> type (40S + 60S subunits). Also 70S in mitochondria and chloroplasts (endosymbiotic origin).<br />
              • <strong>Energy:</strong> Dedicated mitochondria provide site for aerobic respiration (and ATP synthesis via oxidative phosphorylation).<br />
              • <strong>Compartmentalisation:</strong> Membrane-bound organelles allow incompatible chemical reactions to occur simultaneously (e.g. protein synthesis in RER while lipid digestion in lysosomes).
            </p>
          </div>
        </div>

        <div className="callout warn mt-4">
          <div className="callout-title">⚠ Plant vs. Animal Cells: Key Structural Differences</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 text-[0.85rem]">
            <div>
              <p className="font-bold text-[var(--text)] mb-1">Plant cells HAVE (animal cells do NOT):</p>
              <ul className="list-disc pl-4 text-[var(--muted)] space-y-1">
                <li>Cell wall (cellulose)</li>
                <li>Large permanent central vacuole</li>
                <li>Chloroplasts (in photosynthetic cells)</li>
                <li>Plasmodesmata (cytoplasmic connections)</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-[var(--text)] mb-1">Animal cells HAVE (plant cells do NOT):</p>
              <ul className="list-disc pl-4 text-[var(--muted)] space-y-1">
                <li>Centrioles (for cell division)</li>
                <li>Lysosomes (in most)</li>
                <li>Irregular shape (no rigid wall)</li>
                <li>Cholesterol in membrane (for fluidity regulation)</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Organelle Functionality</h3>
        <table className="def-table mb-8">
          <thead>
            <tr>
              <th>Organelle</th>
              <th>Structural Feature</th>
              <th>Functional Significance</th>
              <th>Found In</th>
            </tr>
          </thead>
          <tbody>
            {ORGANELLES.map(o => (
              <tr key={o.name}>
                <td><strong>{o.name}</strong></td>
                <td>{o.feat}</td>
                <td>{o.func}</td>
                <td className="text-[var(--accent)] text-[0.8rem]">{o.found}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>The Secretory Pathway: How Proteins Leave the Cell</h3>
        <p className="text-[0.88rem] text-[var(--muted)] mb-4 leading-[1.6]">
          A classic exam question asks you to describe the route a protein takes from synthesis to secretion. This pathway links RER → Golgi → Cell Membrane and is a favourite for 4–6 mark questions.
        </p>
        <div className="steps-list mb-6">
          {PROTEIN_SECRETION_PATHWAY.map((s, i) => (
            <div className="step" key={i}>
              <span className="step-num">{i + 1}</span>
              <div><strong className="text-[var(--text)]">{s.step}:</strong> <span className="text-[var(--muted)]">{s.detail}</span></div>
            </div>
          ))}
        </div>

        <div className="callout warn">
          <div className="callout-title">⚠ Common Mark-Loss Pitfalls</div>
          <ul className="text-[0.88rem] leading-[1.6] space-y-2 list-disc pl-4 mt-1">
            <li><strong>Never</strong> call the nucleus the "brain" of the cell. State it "contains genetic material (DNA) and controls cell activities via protein synthesis instructions."</li>
            <li>Energy is <strong>not</strong> "made" or "created"; it is <strong>transferred or released</strong> from glucose during respiration.</li>
            <li>On diagrams, the <strong>cell membrane</strong> is the <em>inner</em> line; the <strong>cell wall</strong> is the <em>outer</em> line in plant cells.</li>
            <li>Mitochondria have their <strong>own 70S ribosomes and circular DNA</strong> — evidence for the endosymbiotic theory (they were once free-living bacteria). This is a Grade 9 link examiners love.</li>
            <li>The cell wall is <strong>freely permeable</strong> — it does NOT control what enters. Only the cell membrane is selectively permeable.</li>
            <li>Ribosomes are <strong>not membrane-bound</strong>. Never draw a membrane around them.</li>
          </ul>
        </div>

        <h3>Cell Fractionation & Ultracentrifugation</h3>
        <p className="text-[0.88rem] text-[var(--muted)] mb-4 leading-[1.6]">
          To study organelles, biologists must isolate them from cells without damaging them. This is done using <strong>differential centrifugation</strong> — spinning at progressively higher speeds so that different organelles pellet out at each stage.
        </p>
        <div
          className="bg-[var(--surface)] border-[1.5px] border-[var(--border)] rounded-xl overflow-hidden mb-6"
        >
          <button
            className="w-full text-left px-5 py-4 font-bold text-[var(--text)] flex justify-between items-center text-[0.88rem]"
            onClick={() => setOpenFrac(!openFrac)}
          >
            <span>Show Centrifugation Protocol</span>
            <span className="text-[var(--accent)] text-lg">{openFrac ? '−' : '+'}</span>
          </button>
          {openFrac && (
            <div className="px-5 pb-5 border-t border-[var(--border)] pt-4">
              <div className="steps-list">
                {CELL_FRACTIONATION.map((s, i) => (
                  <div className="step" key={i}>
                    <span className="step-num">{i + 1}</span>
                    <div><strong className="text-[var(--text)]">{s.step}:</strong> <span className="text-[var(--muted)] text-[0.85rem]">{s.detail}</span></div>
                  </div>
                ))}
              </div>
              <div className="callout mt-4">
                <div className="callout-title">The Three Conditions of the Buffer — and Why</div>
                <p className="text-[0.85rem]">The buffer solution must be: (1) <strong>Ice-cold</strong> — to inhibit enzyme activity that would digest organelles; (2) <strong>Isotonic</strong> — same water potential as the cell contents, preventing osmotic swelling or shrinkage of organelles; (3) <strong>Buffered (controlled pH)</strong> — prevents enzyme denaturation. All three must be stated for full marks.</p>
              </div>
            </div>
          )}
        </div>

        <h3>Adaptations of Unicellular Organisms</h3>
        <div className="stores-grid mt-6">
          {UNICELLULAR_ADAPTATIONS.map(u => (
            <div className="store-card" key={u.name}>
              <div className="store-name">{u.name}</div>
              <p className="text-[0.82rem] text-[var(--muted)] leading-[1.5] mb-2"><strong>Movement:</strong> {u.movement}</p>
              <p className="text-[0.82rem] text-[var(--muted)] leading-[1.5]"><strong>Control:</strong> {u.control}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* 02 SPECIALISATION */}
      <section className="section reveal" id="specialisation">
        <div className="section-header">
          <div className="section-num">02</div>
          <h2>Cell Specialisation</h2>
        </div>
        <div className="intro">
          Multicellularity allows for a division of labour. Cells divide by <strong>mitosis</strong>, then undergo <strong>differentiation</strong> through <strong>differential gene expression</strong> — only specific genes are switched on in each cell type, despite every cell containing the same complete genome.
        </div>

        <h3>Mitosis vs. Meiosis</h3>
        <table className="def-table mb-6">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Mitosis</th>
              <th>Meiosis</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Purpose</strong></td><td>Growth, repair, asexual reproduction</td><td>Gamete production (sexual reproduction)</td></tr>
            <tr><td><strong>Divisions</strong></td><td>1</td><td>2 (meiosis I and II)</td></tr>
            <tr><td><strong>Daughter cells</strong></td><td>2 diploid (2n) cells</td><td>4 haploid (n) cells</td></tr>
            <tr><td><strong>Genetic identity</strong></td><td>Genetically identical to parent (clones)</td><td>Genetically unique (variation)</td></tr>
            <tr><td><strong>Crossing over?</strong></td><td>No</td><td>Yes — in prophase I (generates new allele combinations)</td></tr>
            <tr><td><strong>Where it occurs</strong></td><td>All body (somatic) cells</td><td>Gonads only (ovaries, testes)</td></tr>
          </tbody>
        </table>

        <div className="callout warn mb-6">
          <div className="callout-title">⚠ The Mitosis Stages — PMAT</div>
          <p className="text-[0.85rem]"><strong>P</strong>rophase: Chromosomes condense and become visible; nuclear envelope breaks down; spindle fibres begin to form from centrioles.<br />
          <strong>M</strong>etaphase: Chromosomes line up at the equator (metaphase plate); spindle fibres attach to centromeres.<br />
          <strong>A</strong>naphase: Sister chromatids are pulled to opposite poles by spindle fibres shortening. Cell elongates.<br />
          <strong>T</strong>elophase: Nuclear envelopes reform around each set of chromosomes; chromosomes decondense. Cytokinesis follows (cytoplasm divides).</p>
        </div>

        <h3>Stem Cells: Potency Hierarchy</h3>
        <p className="text-[0.88rem] text-[var(--muted)] mb-4 leading-[1.6]">
          Stem cells are undifferentiated cells capable of self-renewal and differentiation. Their potency (range of possible cell types they can become) decreases as development progresses.
        </p>
        <div className="stores-grid mb-6">
          {STEM_CELLS.map(s => (
            <div className="store-card" key={s.type}>
              <div className="store-name">{s.type}</div>
              <p className="text-[0.82rem] text-[var(--muted)] leading-[1.5]">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="callout mb-6">
          <div className="callout-title">Induced Pluripotent Stem Cells (iPSCs) — Grade 9 Extension</div>
          <p className="text-[0.85rem]">Shinya Yamanaka (2006, Nobel Prize 2012) demonstrated that adult somatic cells can be reprogrammed back to a pluripotent state by inserting just four transcription factor genes (Oct4, Sox2, Klf4, c-Myc). This bypasses the ethical issues of embryonic stem cells. iPSCs are now used to model diseases in a dish and develop personalised medicines.</p>
        </div>

        <h3>Biological Specialisation (Grade 9 Detail)</h3>
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
                <span className="text-[var(--accent)] text-lg">{openCell === cell.name ? '−' : '+'}</span>
              </button>
              {openCell === cell.name && (
                <div className="px-5 pb-5 border-t border-[var(--border)] pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {cell.adaptations.map((a, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[var(--accent)] font-bold text-[0.72rem] uppercase tracking-wider mb-1">{a.a}</span>
                        <span className="text-[var(--muted)] text-[0.83rem] leading-[1.5]">{a.f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="callout mt-6">
          <div className="callout-title">The Expert Synthesis</div>
          <p>The "Why" behind specialisation is rooted in the physical limitations of diffusion. As an organism grows, its <strong>SA:V ratio decreases</strong> (volume grows faster than surface area), meaning diffusion alone cannot sustain life. Specialised cells — and the transport systems that connect them — solve the hydraulic and exchange problems that arise in large, complex bodies. Every single structural adaptation of every cell type links back to solving one of: <em>surface area, diffusion distance, energy supply, or gradient maintenance</em>.</p>
        </div>
      </section>

      <div className="divider" />

      {/* 03 TRANSPORT */}
      <section className="section reveal" id="transport">
        <div className="section-header">
          <div className="section-num">03</div>
          <h2>Transport & Exchange</h2>
        </div>
        <div className="intro">
          Biological systems rely on the movement of molecules relative to concentration gradients. Success at High Tier requires precise nomenclature, an understanding of all four movement types, and mathematical fluency.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="info-card">
            <div className="info-head">💨 Diffusion</div>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.6]">Net movement of particles from higher to lower concentration (down the gradient). Passive; relies on random kinetic energy. Affected by: temperature, concentration gradient, surface area, diffusion distance, molecule size.</p>
          </div>
          <div className="info-card">
            <div className="info-head">🔵 Facilitated Diffusion</div>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.6]">Passive movement <em>down</em> the concentration gradient via specific <strong>channel proteins</strong> (for ions/water) or <strong>carrier proteins</strong> (for glucose, amino acids). No ATP required. Rate limited by number of available protein channels.</p>
          </div>
          <div className="info-card">
            <div className="info-head">💧 Osmosis</div>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.6]">Net movement of water molecules from higher to lower <strong>water potential (Ψ)</strong> through a <strong>partially permeable membrane</strong>. Pure water = Ψ 0 kPa. Dissolved solutes lower Ψ (more negative value).</p>
          </div>
          <div className="info-card">
            <div className="info-head">⚡ Active Transport</div>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.6]">Movement <em>against</em> a concentration gradient (from low to high). Requires specific <strong>carrier proteins (pumps)</strong> and <strong>ATP</strong> from respiration. Example: Na⁺/K⁺ pump — moves 3 Na⁺ out and 2 K⁺ in per ATP hydrolysed.</p>
          </div>
        </div>

        <h3>Osmosis in Plant Cells: Turgidity & Plasmolysis</h3>
        <table className="def-table mb-6">
          <thead>
            <tr>
              <th>Condition</th>
              <th>External Solution</th>
              <th>Water Movement</th>
              <th>Cell State</th>
              <th>Cell Appearance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Turgid</strong></td>
              <td>Hypotonic (more dilute than cell)</td>
              <td>Into cell</td>
              <td>Vacuole full; wall pressure high; firm</td>
              <td>Cell membrane pushed against wall; no gap visible</td>
            </tr>
            <tr>
              <td><strong>Incipient plasmolysis</strong></td>
              <td>Isotonic (equal to cell)</td>
              <td>No net movement</td>
              <td>Flaccid; Ψ inside = Ψ outside</td>
              <td>Membrane just touching wall; equilibrium point</td>
            </tr>
            <tr>
              <td><strong>Plasmolysed</strong></td>
              <td>Hypertonic (more concentrated than cell)</td>
              <td>Out of cell</td>
              <td>Vacuole shrinks; membrane pulls away from wall</td>
              <td>Visible gap between membrane and wall (protoplast retraction)</td>
            </tr>
          </tbody>
        </table>
        <div className="callout warn mb-6">
          <div className="callout-title">⚠ Animal Cells vs. Plant Cells in Osmosis</div>
          <p className="text-[0.85rem]">Animal cells have no cell wall, so they <strong>cannot become turgid</strong> — instead they <strong>lyse (burst)</strong> in hypotonic solution and <strong>crenate (shrivel)</strong> in hypertonic solution. Plant cells are protected from lysis by the cell wall; they can only become plasmolysed, not burst. Always specify the cell type in osmosis questions.</p>
        </div>

        <h3>The Math of Material Exchange</h3>
        <div className="calc-block">
          <div className="calc-formula-big">SA:V ∝ 1/l</div>
          <div className="calc-notes">
            <p>For a cube of side length <em>l</em>: Surface Area = 6<em>l</em>² and Volume = <em>l</em>³. As <em>l</em> doubles, SA quadruples (×4) but Volume octuples (×8) — the SA:V ratio <em>halves</em>.</p>
            <p className="mt-2"><strong>Worked example:</strong> Cube with l=1cm → SA=6cm², V=1cm³, SA:V = 6:1. Cube with l=2cm → SA=24cm², V=8cm³, SA:V = 3:1. The larger cell has a ratio half as favourable.</p>
            <p className="mt-2"><strong>Fick's Law:</strong> Rate of Diffusion ∝ (Surface Area × Concentration Difference) / Diffusion Distance. To maximise rate: increase SA, increase gradient (e.g. via blood flow), decrease distance (thin membranes).</p>
          </div>
        </div>

        <h3>Case Study 1: The Alveolus (Gas Exchange)</h3>
        <div className="resource-block mb-6">
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Structural Adaptations</div>
              <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.7]">
                <li><strong>~300 million alveoli</strong> → total SA ~70m² (tennis court).</li>
                <li><strong>One cell thick</strong> epithelium (type I pneumocytes) → minimal diffusion distance (~0.2µm total).</li>
                <li><strong>Moist inner lining</strong> → gases dissolve for diffusion (CO₂ and O₂ diffuse in solution).</li>
                <li><strong>Surfactant</strong> (secreted by type II pneumocytes) → reduces surface tension, prevents alveoli collapsing during exhalation.</li>
              </ul>
            </div>
            <div className="con-card">
              <div className="con-head">Gradient Maintenance</div>
              <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.7]">
                <li><strong>Dense capillary network</strong> → deoxygenated blood continuously removes O₂ and delivers CO₂, maintaining steep gradients.</li>
                <li><strong>Ventilation</strong> (breathing) → replaces stale air with fresh, maintaining high pO₂ and low pCO₂ in alveoli.</li>
                <li><strong>Haemoglobin</strong> immediately binds O₂ → keeps dissolved [O₂] in blood low, maintaining the inward gradient.</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Case Study 2: The Villus (Nutrient Absorption)</h3>
        <div className="resource-block mb-8">
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Structural Features</div>
              <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.7]">
                <li><strong>Villi</strong> (finger-like projections, ~1mm tall) increase SA ~10× over a flat surface.</li>
                <li><strong>Microvilli</strong> (brush border) on each epithelial cell → further ~20× SA increase.</li>
                <li><strong>One cell thick epithelium</strong> → short diffusion path from lumen to blood.</li>
                <li><strong>Lacteal</strong> (lymph vessel) → absorbs fats (as chylomicrons) directly into lymphatic system.</li>
              </ul>
            </div>
            <div className="con-card">
              <div className="con-head">Transport Mechanisms</div>
              <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.7]">
                <li><strong>Glucose & amino acids:</strong> Co-transported with Na⁺ via co-transporter proteins (secondary active transport — uses Na⁺ gradient set up by Na⁺/K⁺ ATPase).</li>
                <li><strong>Fats:</strong> Fatty acids + glycerol diffuse freely through lipid membrane → reassembled into triglycerides → packaged into chylomicrons → enter lacteal.</li>
                <li><strong>Dense capillary network</strong> → maintains low [glucose] in blood, sustaining the inward gradient.</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Universal Adaptations of Exchange Surfaces</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { t: "Large Surface Area", d: "Maximises area for molecules to pass through (e.g. millions of alveoli, villi + microvilli, root hairs)." },
            { t: "Thin Membranes", d: "Short diffusion path (often only one cell thick, ~0.2µm) maximises rate per Fick's Law." },
            { t: "Rich Blood / Fluid Supply", d: "Constant flow removes products and delivers reactants, maintaining a steep concentration gradient." },
            { t: "Ventilation / Irrigation", d: "Maintains high external O₂ / substrate and low CO₂ / product concentrations at the exchange surface." }
          ].map(item => (
            <div key={item.t} className="bg-[var(--surface)] border-[1.5px] border-[var(--border)] p-4 rounded-xl">
              <div className="font-bold text-[0.82rem] text-[var(--text)] mb-2 uppercase tracking-wide">{item.t}</div>
              <p className="text-[0.8rem] text-[var(--muted)] leading-[1.5]">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="callout warn">
          <div className="callout-title">⚠ Percentage Change in Mass (Osmosis Practicals)</div>
          <p className="mb-2 text-[0.85rem]">Percentage change must be calculated rather than absolute change to allow valid comparison between potato cylinders of different starting masses:</p>
          <div className="font-mono text-[var(--accent)] text-sm mb-3 text-center bg-[var(--surface)] py-2 rounded">
            % change = ((Final Mass − Initial Mass) / Initial Mass) × 100
          </div>
          <p className="text-[0.85rem]">When % change = 0, the external solution is <strong>isotonic</strong> to the cell contents (their water potentials are equal). This is the point of incipient plasmolysis. Plot % change (y) vs. concentration (x) and read off where the line crosses zero.</p>
        </div>
      </section>

      <div className="divider" />

      {/* 04 EVOLUTION */}
      <section className="section reveal" id="evolution">
        <div className="section-header">
          <div className="section-num">04</div>
          <h2>Evolution & Continuity</h2>
        </div>
        <div className="intro">
          Inheritance and natural selection link cellular processes to the long-term survival of species. Mastering these links — from mutation at the molecular level to changes in allele frequency across populations — is the hallmark of a high-tier biological researcher.
        </div>

        <h3>Types of Mutation</h3>
        <table className="def-table mb-6">
          <thead>
            <tr>
              <th>Mutation Type</th>
              <th>What Changes</th>
              <th>Effect</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Substitution</strong></td>
              <td>One base replaced by another</td>
              <td>May be silent (same amino acid due to degeneracy of code), missense (different amino acid), or nonsense (premature stop codon)</td>
              <td>Sickle cell anaemia — single A→T substitution changes glutamic acid to valine in haemoglobin</td>
            </tr>
            <tr>
              <td><strong>Insertion</strong></td>
              <td>Extra base(s) added</td>
              <td>Frameshift — all codons downstream are disrupted; usually catastrophic protein change</td>
              <td>Huntington's disease — CAG trinucleotide repeat expansion</td>
            </tr>
            <tr>
              <td><strong>Deletion</strong></td>
              <td>Base(s) removed</td>
              <td>Frameshift — as above</td>
              <td>Cystic fibrosis — deletion of 3 bases removes phenylalanine at position 508 (ΔF508)</td>
            </tr>
            <tr>
              <td><strong>Chromosomal</strong></td>
              <td>Whole chromosomes or large segments</td>
              <td>Non-disjunction → aneuploidy (e.g. trisomy)</td>
              <td>Down syndrome — trisomy 21 (non-disjunction during meiosis)</td>
            </tr>
          </tbody>
        </table>

        <h3>Cellular Foundations of Reproduction</h3>
        <div className="steps-list mb-8">
          {[
            { t: "The Acrosome Reaction", d: "Sperm releases digestive enzymes (acrosin, hyaluronidase) to dissolve the zona pellucida (glycoprotein layer) surrounding the egg. One sperm penetrates the zona." },
            { t: "Fast Block to Polyspermy", d: "Within milliseconds of sperm entry, the egg membrane depolarises (from ~-70mV to +20mV), preventing any further sperm from fusing. This is a temporary electrical block." },
            { t: "The Cortical Reaction (Slow Block)", d: "Ca²⁺ ions flood the egg cytoplasm (released from the ER), triggering cortical granules beneath the membrane to fuse with it and release enzymes. These enzymes harden the zona pellucida into a permanent fertilisation membrane — the definitive polyspermy block." },
            { t: "Pronuclei Formation & Syngamy", d: "Both sperm and egg nuclei become pronuclei; each undergoes DNA replication. The two pronuclei migrate together, their envelopes break down, and chromosomes align for the first mitotic division of the zygote." },
            { t: "Cleavage & Blastocyst Formation", d: "Rapid mitotic divisions produce a morula (solid ball) then a blastocyst (hollow sphere with inner cell mass). The inner cell mass will form the embryo; the outer trophoblast forms the placenta." },
            { t: "Implantation", d: "Days 5–7 post-fertilisation: The blastocyst embeds in the endometrium. Trophoblast cells invade the uterine wall to access maternal blood supply, initiating placenta formation." }
          ].map((step, i) => (
            <div className="step" key={i}>
              <span className="step-num">{i + 1}</span>
              <div><strong className="text-[var(--text)]">{step.t}:</strong> <span className="text-[var(--muted)]">{step.d}</span></div>
            </div>
          ))}
        </div>

        <h3>The Mechanism of Natural Selection</h3>
        <div className="resource-block mb-6">
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Darwin's Four Observations</div>
              <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.7]">
                <li><strong>Overproduction:</strong> Organisms produce more offspring than can possibly survive (e.g. one oak produces thousands of acorns).</li>
                <li><strong>Variation:</strong> Individuals in a population show heritable variation in traits (due to random mutation and sexual recombination).</li>
                <li><strong>Struggle for existence:</strong> Resources (food, mates, territory) are limited → competition.</li>
                <li><strong>Differential survival ("survival of the fittest"):</strong> Individuals with advantageous traits are more likely to survive, reproduce, and pass those alleles on.</li>
              </ul>
            </div>
            <div className="con-card">
              <div className="con-head">Wallace's Contribution</div>
              <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.7]">
                <li>Alfred Russel Wallace independently developed natural selection theory while studying species distribution in the Malay Archipelago (1858).</li>
                <li>His letter to Darwin prompted the joint presentation to the Linnean Society (1858) — one year before Darwin's <em>On the Origin of Species</em> (1859).</li>
                <li>Wallace's work on biogeography (why related species occur in geographically separated locations) provided key evidence for both evolution and the theory of speciation.</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Speciation</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="info-card">
            <div className="info-head">Allopatric Speciation</div>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.6]">A physical (geographic) barrier (mountain range, sea, river) separates a population into two groups. Gene flow between them stops. Different selection pressures, mutations, and genetic drift act independently on each group. Over time, they accumulate enough genetic differences to become <strong>reproductively isolated</strong> — even if the barrier is removed, they can no longer interbreed to produce fertile offspring. They are now two species.</p>
            <p className="text-[0.85rem] text-[var(--accent)] mt-2 font-bold">Example: Darwin's Galapagos finches (geographic isolation on different islands → beak adaptations → new species).</p>
          </div>
          <div className="info-card">
            <div className="info-head">Sympatric Speciation</div>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.6]">Speciation occurs within the same geographic area without a physical barrier. Reproductive isolation arises from: behavioural differences (different mating displays), temporal isolation (different breeding seasons), or ecological isolation (using different food sources). Allele frequencies diverge until the groups no longer interbreed.</p>
            <p className="text-[0.85rem] text-[var(--accent)] mt-2 font-bold">Example: Apple maggot fly — populations split between hawthorn and apple trees in the same area, developing different host preferences.</p>
          </div>
        </div>

        <h3>Case Study: Antibiotic Resistance in Bacteria</h3>
        <div className="resource-block">
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Mechanism (Causal Chain)</div>
              <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.6]">
                <li><strong>Initial Variation:</strong> Random mutations (e.g. in ribosome structure or producing efflux pumps) spontaneously create resistance alleles in a small number of cells.</li>
                <li><strong>Selection Pressure:</strong> Antibiotic treatment kills non-resistant bacteria. <em>Note: the antibiotic does not cause the mutation — it selects for pre-existing mutations.</em></li>
                <li><strong>Differential Survival:</strong> Resistant individuals survive and replicate by binary fission (every 20 minutes under ideal conditions).</li>
                <li><strong>Horizontal Gene Transfer:</strong> Resistance genes on plasmids can be transferred to entirely different bacterial species via conjugation — bypassing normal inheritance.</li>
              </ul>
            </div>
            <div className="con-card">
              <div className="con-head">Evolutionary Results & MRSA</div>
              <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.6]">
                <li><strong>Rapid generational change:</strong> Bacteria replicate every ~20 minutes → millions of generations in days → selection happens on a timescale unobservable in mammals.</li>
                <li><strong>MRSA:</strong> Methicillin-resistant <em>Staphylococcus aureus</em> — carries the <em>mecA</em> gene encoding an altered penicillin-binding protein (PBP2a) that β-lactam antibiotics cannot bind.</li>
                <li><strong>Misuse drives selection:</strong> Incomplete antibiotic courses leave partially resistant survivors to reproduce; over-prescription selects resistant strains in the environment.</li>
                <li><strong>Solutions:</strong> Antibiotic stewardship, combination therapies (harder to develop simultaneous resistance to multiple drugs), phage therapy research.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="callout warn mt-6">
          <div className="callout-title">⚠ Warning: Intentionality Errors (Most Common Evolution Mistake)</div>
          <p className="text-[0.85rem]">Never write that an organism "adapted <em>so that</em> it could survive," "developed resistance <em>in order to</em> survive," or "needed to change." These imply intention or purpose, which scores zero. <br /><br />
          <strong>Correct phrasing:</strong> "A random mutation occurred in some individuals. The selection pressure (antibiotic/predation/environment) meant that individuals <em>with</em> the mutation survived more frequently, reproduced, and passed the allele to offspring. Over many generations, the frequency of the allele increased in the gene pool."</p>
        </div>

        <div className="callout mt-6">
          <div className="callout-title">Genetic Drift vs. Natural Selection</div>
          <p className="text-[0.85rem]">In large populations, allele frequencies change mainly due to selection. But in <strong>small populations</strong> (e.g. after a bottleneck event — disaster killing most of a population, or founder effect — small group colonises a new area), <strong>genetic drift</strong> dominates: alleles can become fixed or lost entirely by <em>chance</em>, regardless of whether they are advantageous. This is why cheetahs have very low genetic diversity (near-extinction bottleneck ~10,000 years ago) and are vulnerable to disease.</p>
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
              <th>Exam-Standard Definition</th>
            </tr>
          </thead>
          <tbody>
            {GLOSSARY.map((g) => (
              <tr key={g.term}>
                <td className="font-bold text-[var(--accent)]">{g.term}</td>
                <td className="text-[var(--muted)]">{g.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </NotesLayout>
  );
}
import { useState } from 'react';
import NotesLayout from '../../../components/NotesLayout';

const TOPICS = [
  { num: "01", id: "biomes", label: "Biomes & Location" },
  { num: "02", id: "layers", label: "Layers & Adaptations" },
  { num: "03", id: "cycle", label: "Nutrient & Water Cycles" },
  { num: "04", id: "deforestation", label: "The Palm Oil Debate" },
  { num: "05", id: "casestudy", label: "Case Study: Belo Monte Dam" },
  { num: "06", id: "sustainability", label: "Sustainability" },
];

const REFERENCE = [
  { num: "07", id: "terms", label: "Key Terms" },
  { num: "08", id: "exam", label: "Exam Tips" },
];

export default function Notes() {
  const [openPlant, setOpenPlant] = useState(null);
  const [openAnimal, setOpenAnimal] = useState(null);

  const togglePlant = (name) => setOpenPlant(openPlant === name ? null : name);
  const toggleAnimal = (name) => setOpenAnimal(openAnimal === name ? null : name);

  return (
    <NotesLayout
      tag="Year 8 Geography"
      title="Tropical Rainforest Ecosystems"
      subtitle="Comprehensive deep-dive into biomes, adaptations, nutrient and water cycles, palm oil, the Belo Monte Dam case study, and sustainability."
      accent="#c49a1a"
      topics={TOPICS}
      reference={REFERENCE}
    >
      {/* 01 BIOMES */}
      <section className="section reveal scroll-mt-32" id="biomes">
        <div className="section-header">
          <div className="section-num">01</div>
          <h2>Biomes & Location</h2>
        </div>
        <div className="intro">
          A <strong>Biome</strong> is a large-scale global ecosystem with a distinctive climate, flora, and fauna. Tropical rainforests are typically distributed in a band around the <strong>Equator</strong> (between the <strong>Tropics of Cancer and Capricorn</strong>), found heavily in the Amazon Basin (South America), West and Central Africa (e.g., Congo Basin), and Southeast Asia (e.g., Malaysia and Indonesia).
        </div>
        <p className="mb-4 text-[var(--muted)] text-[0.88rem] leading-[1.6]">
          The reason it rains so much at the <strong>Equator</strong> is due to the <strong>Hadley Cell</strong>. The Sun's rays are most concentrated and direct at the <strong>Equator</strong>, heating the ground intensely. This causes the hot, moist air to rapidly rise. As the air rises in the <strong>Hadley Cell</strong>, it cools and condenses to form heavy <strong>convectional rainfall</strong>. This continuous rising air creates a permanent zone of <strong>Low Pressure</strong>, guaranteeing the hot, humid, and wet conditions that tropical rainforests need to thrive all year round.
        </p>
      </section>

      <div className="divider" />

      {/* 02 LAYERS & ADAPTATIONS */}
      <section className="section reveal scroll-mt-32" id="layers">
        <div className="section-header">
          <div className="section-num">02</div>
          <h2>Layers & Adaptations</h2>
        </div>
        <div className="intro">
          The rainforest is highly stratified, dividing natural competition for sunlight into four distinct layers. Because of the extreme competition for light and the unique climate, species have evolved incredible <strong>Adaptations</strong>.
        </div>

        <h3>Rainforest Layers</h3>
        <div className="flex flex-col gap-3 mb-8">
          {[
            { name: "Emergent Layer (30m–50m+)", desc: "The tallest, isolated, umbrella-shaped trees poking completely through the canopy roof into open sunlight." },
            { name: "Canopy (15m–30m)", desc: "A thick, continuous, interlocking roof of green leaves blocking out 80% of the sunlight." },
            { name: "Under-canopy (5m–15m)", desc: "Narrow saplings growing upward, waiting for a break in the trees above to capture sunlight." },
            { name: "Forest Floor (0m–5m)", desc: "Very dark, sparse vegetation with giant buttress roots at the base of trees." }
          ].map((layer) => (
            <div key={layer.name} className="flex px-5 py-4 items-center gap-4 bg-[var(--surface)] border-[1.5px] border-[var(--border)] rounded-xl">
              <span className="text-3xl">🌴</span>
              <div>
                <div className="font-bold text-[var(--text)] text-[0.9rem]">{layer.name}</div>
                <div className="text-[0.8rem] text-[var(--muted)] mt-1">{layer.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h3>Plant Adaptations</h3>
        <div className="mb-6">
          {[
            { name: "Buttress Roots", desc: "Essential for the tallest trees. Because heavy rainfall washes away deep soil nutrients (a process called Leaching), rainforest soils are unusually shallow. Massive, wide ridges of root grow above ground to provide structural stability in the shallow soil, stopping the giant trees from toppling over in the wind." },
            { name: "Drip-tips", desc: "Leaves have waxy surfaces and pointed, downward-facing tips. This allows the heavy daily rainfall to run off quickly. If water sits on the leaf, it could grow algae that block sunlight, or the sheer weight of the water could snap the stem." },
            { name: "Lianas", desc: "Thick, woody vines rooted in the soil that use host trees like ladders, tightly wrapping around their trunks to climb high into the Canopy to reach the sunlight." },
            { name: "Epiphytes", desc: "Plants (like orchids or ferns) that entirely bypass the dark Forest Floor. They live high up on the branches of other trees, extracting moisture and nutrients directly from the humid air rather than the soil." }
          ].map((item) => (
            <div key={item.name} className="bg-[var(--surface)] border-[1.5px] border-[var(--border)] rounded-xl overflow-hidden mb-3">
              <button
                className="w-full text-left px-5 py-4 font-bold text-[var(--text)] flex justify-between items-center text-[0.88rem]"
                onClick={() => togglePlant(item.name)}
              >
                {item.name}
                <span className="text-[var(--accent)] font-bold text-lg leading-none">{openPlant === item.name ? '−' : '+'}</span>
              </button>
              {openPlant === item.name && (
                <div className="px-5 pb-4 text-[var(--muted)] text-[0.85rem] leading-[1.6] border-t border-[var(--border)] pt-3">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>

        <h3>Animal Adaptations</h3>
        <div>
          {[
            { name: "Camouflage (Sloths)", desc: "Sloths move incredibly slowly, which saves energy. They grow green algae in their fur to blend seamlessly into the leafy Canopy, rendering them invisible to predators like the Harpy Eagle." },
            { name: "Poisonous Warnings (Poison Dart Frogs)", desc: "Exhibit Aposematism—bright, highly visible colors (like neon blue or yellow). Instead of hiding, they boldly warn predators of the lethal toxins secreted through their skin." },
            { name: "Specialized Limbs (Spider Monkeys)", desc: "Exclusively adapted for the Canopy. They possess extremely long limbs and a highly muscular, Prehensile Tail that acts like a fifth hand, allowing them to swing quickly and efficiently between branches (brachiation) to find fruit." }
          ].map((item) => (
            <div key={item.name} className="bg-[var(--surface)] border-[1.5px] border-[var(--border)] rounded-xl overflow-hidden mb-3">
              <button
                className="w-full text-left px-5 py-4 font-bold text-[var(--text)] flex justify-between items-center text-[0.88rem]"
                onClick={() => toggleAnimal(item.name)}
              >
                {item.name}
                <span className="text-[var(--accent)] font-bold text-lg leading-none">{openAnimal === item.name ? '−' : '+'}</span>
              </button>
              {openAnimal === item.name && (
                <div className="px-5 pb-4 text-[var(--muted)] text-[0.85rem] leading-[1.6] border-t border-[var(--border)] pt-3">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* 03 NUTRIENT & WATER CYCLES */}
      <section className="section reveal scroll-mt-32" id="cycle">
        <div className="section-header">
          <div className="section-num">03</div>
          <h2>Nutrient & Water Cycles</h2>
        </div>
        <div className="intro">
          Rainforests function on rapid, highly localised systems. The warm, wet climate means both the nutrient cycle and the water cycle operate at incredibly fast speeds.
        </div>

        <h3>The Gersmehl Nutrient Cycle</h3>
        <p className="mb-4 text-[var(--muted)] text-[0.88rem] leading-[1.6]">
          Nutrients are essential for plant growth and move continuously between three main stores:<br />
          • <strong>Biomass Store:</strong> The living vegetation and animals. This is by far the <em>largest</em> store in a rainforest because of the dense, multi-layered plant life.<br />
          • <strong>Litter Store:</strong> The dead leaves and branches on the forest floor. It is very small because the hot and humid climate causes incredibly rapid decomposition.<br />
          • <strong>Soil Store:</strong> The thin layer of earth. It is surprisingly poor in nutrients because heavy rainfall constantly washes them away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[var(--surface)] border-[1.5px] border-[var(--border)] rounded-xl p-6">
            <div className="font-bold text-[var(--text)] mb-3 text-[0.95rem]">Key Nutrient Flows</div>
            <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.6] space-y-2">
              <li><strong>Fallout:</strong> Dead leaves and branches fall from Biomass to Litter.</li>
              <li><strong>Decomposition/Decay:</strong> Fungi and bacteria rapidly break down Litter into Soil. This is fast because conditions are warm and wet.</li>
              <li><strong>Uptake:</strong> Massive tree root systems quickly absorb nutrients from Soil back into Biomass.</li>
            </ul>
          </div>
          <div className="bg-[var(--surface)] border-[1.5px] border-[var(--border)] rounded-xl p-6">
            <div className="font-bold text-[var(--text)] mb-3 text-[0.95rem]">Nutrient Losses</div>
            <ul className="text-[var(--muted)] text-[0.85rem] leading-[1.6] space-y-2">
              <li><strong>Leaching:</strong> Heavy rainfall infiltrates the soil and washes crucial nutrients deep beyond the reach of plant roots — a permanent loss from the cycle.</li>
              <li><strong>Surface Runoff:</strong> Heavy rain washes un-decomposed litter directly off the forest floor before it can decay into the soil.</li>
            </ul>
          </div>
        </div>

        <div className="callout">
          <div className="callout-title">Why is rainforest soil so poor?</div>
          <p>Despite the lush growth above, rainforest soils are surprisingly infertile. Nutrients cycle so fast from Litter → Biomass that they barely spend any time in the soil. Deforestation permanently breaks this cycle — once the trees are gone, there is no fallout to replenish the litter, and the thin soil is quickly exhausted and eroded.</p>
        </div>

        <h3>The Water Cycle & Transpiration</h3>
        <p className="mb-4 text-[var(--muted)] text-[0.88rem] leading-[1.6]">
          Tropical rainforests generate much of their own rainfall. Trees absorb water through their roots and release it as water vapour through their leaves — a process called <strong>Transpiration</strong>. Up to 75% of rainfall in the Amazon is returned to the atmosphere this way. This moisture rises, cools, condenses, and falls again as rain, creating a self-sustaining rainfall cycle. The dense canopy also intercepts rainfall, slowing its journey to the ground and reducing surface run-off and flooding.
        </p>

        <div className="steps-list mb-6">
          {[
            <span>Heavy convectional rainfall soaks into the ground and is absorbed by roots.</span>,
            <span>Trees release water vapour through their leaves (<strong>Transpiration</strong>) — up to 75% of Amazon rainfall is returned to the atmosphere this way.</span>,
            <span>This water vapour rises, cools, condenses, and falls as rainfall again — keeping the cycle self-sustaining.</span>,
            <span>The dense canopy intercepts rainfall, slowing run-off and reducing flooding at the forest floor.</span>,
          ].map((text, i) => (
            <div className="step" key={i}>
              <span className="step-num">{i + 1}</span>
              <div>{text}</div>
            </div>
          ))}
        </div>

        <div className="two-col">
          <div className="info-card">
            <div className="info-head">🌧️ Less Rainfall</div>
            <p>Without trees to undergo <strong>Transpiration</strong>, far less water vapour enters the atmosphere. This reduces local rainfall and pushes the region toward drought — destroying the conditions the remaining forest depends on.</p>
          </div>
          <div className="info-card">
            <div className="info-head">🌊 More Flooding & Erosion</div>
            <p>Without canopy interception and root systems holding soil together, rainfall hits the ground directly and runs off rapidly, causing flash flooding and severe soil erosion.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 04 DEFORESTATION (PALM OIL) */}
      <section className="section reveal scroll-mt-32" id="deforestation">
        <div className="section-header">
          <div className="section-num">04</div>
          <h2>The Palm Oil Debate</h2>
        </div>
        <div className="intro">
          The mass cultivation of palm oil is currently one of the most polarizing environmental issues. It represents a major conflict between economic development and ecological preservation.
        </div>

        <h3>Causes (The Efficiency Argument)</h3>
        <div className="waste-list">
          <div className="waste-item">
            <span className="waste-icon">📈</span>
            <div>Palm oil is the most land-efficient vegetable oil crop globally; it yields up to ten times more oil per hectare than alternatives like soybean or sunflower oil.</div>
          </div>
          <div className="waste-item">
            <span className="waste-icon">🧴</span>
            <div>It provides cheap, versatile ingredients for global food and cosmetics.</div>
          </div>
          <div className="waste-item">
            <span className="waste-icon">💰</span>
            <div>It drives vital <strong>Economic Development</strong> and income for developing regions in Southeast Asia.</div>
          </div>
        </div>

        <h3>Effects (The Biodiversity Cost)</h3>
        <div className="waste-list">
          <div className="waste-item">
            <span className="waste-icon">🔥</span>
            <div>To make way for endless rows of palm oil plantations, companies use rapid "slash and burn" <strong>Deforestation</strong>.</div>
          </div>
          <div className="waste-item">
            <span className="waste-icon">🏚️</span>
            <div>This completely destroys incredibly fragile and complex natural <strong>Habitats</strong>, collapsing the ecosystem's <strong>Biodiversity</strong>.</div>
          </div>
          <div className="waste-item">
            <span className="waste-icon">🐅</span>
            <div>Iconic critically endangered species naturally native to these regions, such as <strong>Orangutans</strong> and <strong>Sumatran Tigers</strong>, are being driven relentlessly closer to extinction.</div>
          </div>
          <div className="waste-item">
            <span className="waste-icon">🌱</span>
            <div><strong>Soil Erosion:</strong> Tree roots anchor soil in place. Once the forest is cleared, heavy tropical rainfall rapidly washes the exposed, nutrient-poor topsoil away, leaving the land barren and largely unusable within a few years.</div>
          </div>
          <div className="waste-item">
            <span className="waste-icon">💧</span>
            <div><strong>Water Pollution:</strong> Palm oil plantations rely heavily on agrichemicals — pesticides and fertilizers — which wash into local rivers during rainfall, poisoning aquatic ecosystems and contaminating drinking water that local communities depend on.</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 05 BELO MONTE DAM */}
      <section className="section reveal scroll-mt-32" id="casestudy">
        <div className="section-header">
          <div className="section-num">05</div>
          <h2>Case Study: Belo Monte Dam</h2>
        </div>
        <div className="intro">
          Located on the Xingu River in the Brazilian Amazon, the Belo Monte Dam is one of the world's largest hydroelectric projects. It showcases the conflict between human development and environmental and social costs.
        </div>

        <div className="resource-block mt-6">
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Benefits</div>
              <ul>
                <li><strong>Hydroelectric Power (HEP):</strong> At peak capacity, it acts as a massive source of <strong>Renewable Energy</strong> to satisfy Brazil's rapidly growing industrial and domestic electricity demands.</li>
                <li><strong>Economic Growth:</strong> Secures a reliable power grid for factories and businesses, boosting Brazil's nationwide wealth.</li>
                <li><strong>Job Creation:</strong> Employed tens of thousands of local workers during construction and continues to employ people for operational maintenance.</li>
              </ul>
            </div>
            <div className="con-card">
              <div className="con-head">Problems</div>
              <ul>
                <li><strong>Displacement of Indigenous Tribes:</strong> Severely reduced water flows in the Volta Grande have forced traditional Indigenous and riverine communities off their ancestral lands, destroying traditional food sources and transport.</li>
                <li><strong>Methane Emissions:</strong> Submerging massive areas of the forest causes the flooded, underwater vegetation to rot, releasing <strong>Methane</strong> — a highly potent <strong>Greenhouse Gas</strong>.</li>
                <li><strong>Loss of Fish Species:</strong> Disrupted flood cycles prevented fish from reaching breeding grounds, causing severe mass mortality and physical deformities (like in the silver croaker), devastating local aquatic food webs — which Indigenous communities like the Juruna heavily rely on as their primary source of protein.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 06 SUSTAINABILITY */}
      <section className="section reveal scroll-mt-32" id="sustainability">
        <div className="section-header">
          <div className="section-num">06</div>
          <h2>Sustainability</h2>
        </div>
        <div className="intro">
          To prevent permanent destruction of rainforests, multiple forms of <strong>Sustainable Management</strong> are being implemented globally. The goal is to allow human use of the forest without destroying its long-term ability to function as an ecosystem.
        </div>

        <h3>Management Strategies</h3>
        <div className="steps-list">
          <div className="step">
            <span className="step-num">1</span>
            <div>
              <div className="font-bold text-[var(--text)] mb-1">Debt-for-Nature Swaps</div>
              A financial agreement where a portion of a developing nation's foreign debt is canceled by the lender. In exchange, the developing nation guarantees to spend the saved money entirely on local environmental protection and conservation projects.
            </div>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <div>
              <div className="font-bold text-[var(--text)] mb-1">Selective Logging</div>
              Instead of clear-cutting entire areas, only specific mature or commercially valuable trees (such as mahogany) are individually targeted and felled. Careful planning of felling direction and extraction routes means the overall Canopy structure is left largely intact, allowing the forest to naturally regenerate.
            </div>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <div>
              <div className="font-bold text-[var(--text)] mb-1">Ecotourism</div>
              Small-scale, environmentally friendly tourism that directly employs local residents as guides or lodge staff. Because tourists pay specifically to see untouched nature, it gives local communities a direct financial incentive to protect the rainforest instead of clearing it for farming or logging.
            </div>
          </div>
          <div className="step">
            <span className="step-num">4</span>
            <div>
              <div className="font-bold text-[var(--text)] mb-1">REDD+ (International Programme)</div>
              A United Nations programme — Reducing Emissions from Deforestation and forest Degradation. Wealthy developed countries pay developing countries directly to keep their forests standing rather than clearing them. It puts a financial value on the forest as a carbon store, making it economically worthwhile for countries like Brazil and Indonesia to protect rather than exploit it.
            </div>
          </div>
          <div className="step">
            <span className="step-num">5</span>
            <div>
              <div className="font-bold text-[var(--text)] mb-1">National Parks & Protected Areas</div>
              Governments designate areas of rainforest as legally protected, banning logging, farming, and development. Brazil's <strong>Amazon Fund</strong> (backed by Norway and Germany) has channeled billions into enforcing these protections and monitoring deforestation via satellite.
            </div>
          </div>
        </div>

        <div className="callout">
          <div className="callout-title">Evaluation point — do these strategies work?</div>
          <p>In 9-mark questions, acknowledge that these strategies are often <strong>difficult to enforce</strong> in remote areas, that <strong>economic pressures</strong> on developing countries make conservation hard to prioritise, and that <strong>international cooperation</strong> (like REDD+) is essential because deforestation is a global problem no single country can solve alone.</p>
        </div>
      </section>

      <div className="divider" />

      {/* 07 KEY TERMS */}
      <section className="section reveal scroll-mt-32" id="terms">
        <div className="section-header">
          <div className="section-num">07</div>
          <h2>Key Terms</h2>
        </div>
        <div className="intro">
          These essential Tier 3 geography terms must be used in your long-answer exam questions.
        </div>
        <div className="stores-grid">
          {[
            { name: "Biome", desc: "A large-scale global ecosystem with a distinctive climate, flora, and fauna." },
            { name: "Equator", desc: "The line of 0° latitude where the Sun's rays are most concentrated and direct, causing intense heating." },
            { name: "Hadley Cell", desc: "The atmospheric convection cell responsible for making the equator a zone of low pressure and heavy convectional rainfall." },
            { name: "Convectional Rainfall", desc: "Heavy rain formed when the ground is heated intensely, causing hot, moist air to rapidly rise, cool, and condense." },
            { name: "Leaching", desc: "The process where heavy rainfall rapidly washes soil nutrients down beyond the reach of plant roots." },
            { name: "Transpiration", desc: "The process by which trees release water vapour through their leaves, returning moisture to the atmosphere and driving local rainfall." },
            { name: "Gersmehl Cycle", desc: "A model showing how nutrients flow between three stores — Biomass, Litter, and Soil — in an ecosystem." },
            { name: "Prehensile Tail", desc: "A specialized muscular tail adapted to act like a fifth hand for gripping branches, allowing brachiation (swinging between branches)." },
            { name: "Aposematism", desc: "Bright, highly visible warning colors exhibited by toxic animals (like Poison Dart Frogs) to deter predators." },
            { name: "Biodiversity", desc: "The variety of living organisms — including species, genetic, and ecosystem diversity — found in a given area." },
            { name: "Hydroelectric Power", desc: "Renewable energy generated by using flowing or falling water to spin turbines, as in the Belo Monte Dam." },
            { name: "REDD+", desc: "A UN programme that pays developing countries to protect their forests by giving carbon stores a financial value." },
          ].map((term) => (
            <div className="store-card" key={term.name}>
              <div className="store-name">{term.name}</div>
              <div className="store-desc">{term.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* 08 EXAM TIPS */}
      <section className="section reveal scroll-mt-32" id="exam">
        <div className="section-header">
          <div className="section-num">08</div>
          <h2>Exam Tips</h2>
        </div>

        <div className="callout warn">
          <div className="callout-title">⚠ Command Words — Know the Difference</div>
          <ul className="text-[var(--text)] text-[0.88rem] leading-[1.6] space-y-2 list-disc pl-4 mt-2">
            <li><strong>Describe</strong> — state what something is like or its distribution. No explanation needed.</li>
            <li><strong>Explain</strong> — give a reason why, using connectives like "because", "therefore", "this means that".</li>
            <li><strong>Evaluate</strong> — weigh up both sides and reach a clear, justified conclusion. Don't just list — make a judgement.</li>
          </ul>
        </div>

        <div className="callout warn" style={{ marginTop: '1rem' }}>
          <div className="callout-title">⚠ 9-Mark Evaluation Questions</div>
          <ul className="text-[var(--text)] text-[0.88rem] leading-[1.6] space-y-2 list-disc pl-4 mt-2">
            <li>When evaluating the Belo Monte Dam, Palm Oil, or sustainability strategies, explicitly weigh up <strong>Economic Benefits</strong> against <strong>Environmental &amp; Social Costs</strong>.</li>
            <li>A strong conclusion must make a clear judgement — don't just list both sides.</li>
            <li>Use Tier 3 vocabulary (<em>Biodiversity</em>, <em>Leaching</em>, <em>Transpiration</em>, <em>REDD+</em>) directly in your answer.</li>
          </ul>
        </div>

        <div className="callout warn" style={{ marginTop: '1rem' }}>
          <div className="callout-title">⚠ Nutrient Cycle Questions</div>
          <ul className="text-[var(--text)] text-[0.88rem] leading-[1.6] space-y-2 list-disc pl-4 mt-2">
            <li>Always name all three stores: <strong>Biomass, Litter, Soil</strong>.</li>
            <li>Use the correct flow terms: <strong>fallout, decomposition, uptake, leaching</strong>.</li>
            <li>The largest store is always <strong>Biomass</strong> — never say it's the soil.</li>
            <li>The fastest transfer is <strong>Decay/Decomposition</strong> — explain why (warm and wet conditions speed it up).</li>
            <li>If asked to interpret or draw proportional arrows, the Biomass circle should be the largest and the Soil/Litter circles much smaller.</li>
          </ul>
        </div>

        <div className="callout warn" style={{ marginTop: '1rem' }}>
          <div className="callout-title">⚠ Deforestation & the Water Cycle</div>
          <ul className="text-[var(--text)] text-[0.88rem] leading-[1.6] space-y-2 list-disc pl-4 mt-2">
            <li>Fewer trees = less transpiration = less rainfall = increased drought risk.</li>
            <li>Also mention increased surface run-off and flooding without canopy interception.</li>
            <li>Linking deforestation → water cycle → climate change earns top marks.</li>
          </ul>
        </div>

        <div className="callout warn" style={{ marginTop: '1rem' }}>
          <div className="callout-title">⚠ Causes vs Effects</div>
          <ul className="text-[var(--text)] text-[0.88rem] leading-[1.6] space-y-2 list-disc pl-4 mt-2">
            <li>Never confuse them. Logging and palm oil farming are <em>causes</em> of deforestation.</li>
            <li>Soil erosion, species extinction, reduced rainfall, and climate disruption are <em>effects</em>.</li>
            <li>Read the question carefully — answering effects when asked for causes loses marks instantly.</li>
          </ul>
        </div>
      </section>

    </NotesLayout>
  );
}
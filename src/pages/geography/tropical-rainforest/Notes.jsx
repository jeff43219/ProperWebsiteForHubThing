import { useState } from 'react';
import NotesLayout from '../../../components/NotesLayout';

const TOPICS = [
  { num: "01", id: "biomes", label: "Biomes & Location" },
  { num: "02", id: "layers", label: "Layers & Adaptations" },
  { num: "03", id: "cycle", label: "Nutrient Cycle" },
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
      subtitle="Comprehensive deep-dive into biomes, adaptations, palm oil, the Belo Monte Dam case study, and sustainability."
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
          The reason it rains so much at the <strong>Equator</strong> is due to the <strong>Hadley Cell</strong>. The Sun’s rays are most concentrated and direct at the <strong>Equator</strong>, heating the ground intensely. This causes the hot, moist air to rapidly rise. As the air rises in the <strong>Hadley Cell</strong>, it cools and condenses to form heavy <strong>convectional rainfall</strong>. This continuous rising air creates a permanent zone of <strong>Low Pressure</strong>, guaranteeing the hot, humid, and wet conditions that tropical rainforests need to thrive all year round.
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

      {/* 03 NUTRIENT CYCLE */}
      <section className="section reveal scroll-mt-32" id="cycle">
        <div className="section-header">
          <div className="section-num">03</div>
          <h2>Nutrient Cycle</h2>
        </div>
        <div className="intro">
          The Gersmehl Nutrient Cycle shows how nutrients move between the Biomass, Litter, and Soil stores in the rainforest. The vast majority of nutrients are stored in living trees, not the ground!
        </div>
        
        <div className="bg-[var(--surface)] border-[1.5px] border-[var(--border)] rounded-xl p-8 flex flex-col items-center text-center max-w-lg mx-auto mb-6">
          <div className="text-5xl mb-4">💧</div>
          <div className="font-bold text-[var(--text)] text-[1.1rem] mb-2">The Nutrient Cycle</div>
          <p className="text-[var(--muted)] text-[0.85rem] leading-[1.6]">
            Nutrients transfer via fallout (Biomass to Litter), decay (Litter to Soil), and uptake (Soil back to Biomass). Heavy rainfall causes extreme <strong>Leaching</strong>, rapidly washing nutrients out of the shallow soil store.
          </p>
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
            <div>This completely destroys incredibly fragile and complex natural <strong>Habitats</strong>, collapsing the ecosystem’s <strong>Biodiversity</strong>.</div>
          </div>
          <div className="waste-item">
            <span className="waste-icon">🐅</span>
            <div>Iconic critically endangered species naturally native to these regions, such as <strong>Orangutans</strong> and <strong>Sumatran Tigers</strong>, are being driven relentlessly closer to extinction.</div>
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
          Located on the Xingu River in the Brazilian Amazon, the Belo Monte Dam showcases the conflict between human development and environmental costs. Based on recent 2026 data monitoring the dam's impact on the Volta Grande (Big Bend) region, the outcomes are striking.
        </div>

        <div className="resource-block mt-6">
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Benefits</div>
              <ul>
                <li><strong>Hydroelectric Power (HEP):</strong> At peak capacity, it acts as a massive source of <strong>Renewable Energy</strong> to satisfy Brazil’s rapidly growing industrial and domestic electricity demands.</li>
                <li><strong>Economic Growth:</strong> Secures a reliable power grid for factories and businesses, boosting Brazil's nationwide wealth.</li>
                <li><strong>Job Creation:</strong> Employed tens of thousands of local workers during construction and continues to employ people for operational maintenance.</li>
              </ul>
            </div>
            <div className="con-card">
              <div className="con-head">Problems</div>
              <ul>
                <li><strong>Displacement of Indigenous Tribes:</strong> Severely reduced water flows in the Volta Grande have forced traditional Indigenous and riverine communities off their ancestral lands, destroying traditional food sources and transport.</li>
                <li><strong>Methane Emissions:</strong> Submerging massive areas of the forest causes the flooded, underwater vegetation to rot, releasing <strong>Methane</strong>—a highly potent <strong>Greenhouse Gas</strong>.</li>
                <li><strong>Loss of Fish Species:</strong> Disrupted flood cycles prevented fish from reaching breeding grounds, causing severe mass mortality and physical deformities (like in the silver croaker), devastating local aquatic food webs.</li>
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
          To prevent permanent destruction of rainforests, multiple forms of <strong>Sustainable Management</strong> are being implemented globally.
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
              Instead of clear-cutting everything, loggers use helicopters or strict planning to individually target precise, mature, or highly valuable trees (like mahogany). This ensures the overall <strong>Canopy</strong> structure is left biologically intact so the forest can naturally regenerate.
            </div>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <div>
              <div className="font-bold text-[var(--text)] mb-1">Ecotourism</div>
              Small-scale, environmentally friendly tourism. It directly employs local residents as guides or lodge staff. Because the tourists pay specifically to see untouched nature, it gives local communities a direct financial incentive to protect the rainforest instead of cutting it down for farming or logging.
            </div>
          </div>
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
            { name: "Hadley Cell", desc: "The atmospheric convection cell responsible for making the equator a zone of low pressure and heavy rainfall." },
            { name: "Convectional Rainfall", desc: "Heavy rain formed when the ground is heated intensely, causing hot, moist air to rapidly rise, cool, and condense." },
            { name: "Leaching", desc: "The process where heavy rainfall rapidly washes deep soil nutrients out of the ground." },
            { name: "Prehensile Tail", desc: "A specialized muscular tail adapted to act like a fifth hand for swinging between branches (brachiation)." },
            { name: "Aposematism", desc: "Bright, highly visible warning colors exhibited by toxic animals (like Poison Dart Frogs)." },
            { name: "Biodiversity", desc: "The rich variety of complex plant and animal species living within a completely natural habitat." },
            { name: "Hydroelectric Power", desc: "A massive source of renewable energy generated by damming rivers, like the Belo Monte Dam." }
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
          <div className="callout-title">⚠ Exam Tips to Remember</div>
          <p>When evaluating the Belo Monte Dam or Palm Oil in a 9-mark question, always explicitly weigh up the <strong>Economic Benefits</strong> against the <strong>Environmental & Social Costs</strong>. Ensure you use Tier 3 vocabulary (e.g., <em>Biodiversity</em>, <em>Deforestation</em>, <em>Leaching</em>) directly in your conclusion.</p>
        </div>
      </section>

    </NotesLayout>
  );
}

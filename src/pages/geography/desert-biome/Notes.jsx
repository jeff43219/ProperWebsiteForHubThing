import { useState } from 'react'
import NotesLayout from '@/components/NotesLayout'

const TOPICS = [
  { num: '01', id: 'location',        label: 'Location & Atmosphere' },
  { num: '02', id: 'plants',          label: 'Plant Adaptations' },
  { num: '03', id: 'animals',         label: 'Animal Adaptations' },
  { num: '04', id: 'bedouin',         label: 'The Bedouin' },
  { num: '05', id: 'middleeast',      label: 'The Middle East' },
  { num: '06', id: 'desertification', label: 'Desertification' },
  { num: '07', id: 'fastfashion',     label: 'Fast Fashion & Atacama' },
]

const REFERENCE = [
  { num: '08', id: 'quiz',     label: 'Quick Quiz' },
  { num: '09', id: 'glossary', label: 'Key Terms' },
]

const PLANT_ADAPTATIONS = [
  {
    name: 'Saguaro Cactus',
    desc: 'It features a pleated or accordion-like skin that expands to store massive volumes of water. Its waxy cuticle reduces transpiration (the exhalation of water vapour through the stomata on the surface of plant leaves). Its sharp spines provide shade, defend against thirsty herbivores, and help capture morning dew condensation. Roots are wide but shallow to quickly intercept rapid surface runoff after rare rainfall.',
  },
  {
    name: 'Acacia Tree',
    desc: 'Unlike the Saguaro, it relies on deep taproots stretching tens of metres down to reach the underground water table. Its tiny leaves significantly limit the surface area available for water loss.',
  },
  {
    name: 'Succulence',
    desc: 'This is succulence (the biological strategy of stockpiling water within specialised fleshy leaves, stems, or swollen roots to survive extended droughts). Cacti, such as the Saguaro, rely heavily on this.',
  },
  {
    name: 'Desert Sand Verbena (Ephemerals)',
    desc: 'These are ephemerals (plants with extremely short, opportunistic life cycles; their seeds can lay dormant in the hot soil for years and only germinate immediately after a flash rainstorm). They grow, flower, and release new seeds within weeks.',
  },
  {
    name: 'CAM Photosynthesis',
    desc: 'This is an advanced survival mechanism known as CAM photosynthesis (a specialised carbon fixation pathway where plants act opposite to normal plants by opening their stomata only at night to take in carbon dioxide, drastically reducing moisture loss during the hot, dry day).',
  },
]

const ANIMAL_ADAPTATIONS = [
  {
    name: 'The Camel',
    types: [
      { label: 'Physiological', detail: 'Humps store fat (not water), which can be broken down into energy and metabolic water. By concentrating all body fat into one place, they avoid trapping heat everywhere else. Camels excrete highly concentrated urine and can tolerate a wide fluctuation in body temperature without sweating.' },
      { label: 'Anatomical', detail: 'Wide feet stop sinking into sand. Long eyelashes and closeable nostrils provide protection in sandstorms.' },
    ],
  },
  {
    name: 'The Fennec Fox',
    types: [
      { label: 'Anatomical', detail: 'Oversized ears have massive surface area packed with blood vessels allowing rapid heat radiation to cool the whole body. They also aid hearing to locate prey underground. Pale fur reflects sunlight.' },
      { label: 'Behavioural', detail: 'Nocturnal — hunts strictly at night to avoid massive energy exhaustion in the daytime sun.' },
    ],
  },
  {
    name: 'The Sidewinder Rattlesnake',
    types: [
      { label: 'Behavioural', detail: 'Moves in a diagonal "S" shape, ensuring only two small points of its body touch the scorching sand at any single moment — dramatically reducing heat transfer from the hot ground.' },
      { label: 'Anatomical', detail: 'Raised supraocular scales (horns) act as sunshades for its eyes, vital for hunting in extreme glare.' },
    ],
  },
]

const GLOSSARY_TERMS = [
  { term: 'Xerophyte',                       def: 'A plant specifically adapted to survive in an environment with extreme heat and little liquid water.' },
  { term: 'Transpiration',                   def: 'The exhalation of water vapour through the stomata on the surface of plant leaves.' },
  { term: 'Succulence',                      def: 'The biological strategy of stockpiling water within specialised fleshy leaves, stems, or swollen roots to survive extended droughts.' },
  { term: 'Ephemerals',                      def: 'Plants with extremely short, opportunistic life cycles; their seeds can lay dormant in the hot soil for years and only germinate immediately after a flash rainstorm.' },
  { term: 'CAM Photosynthesis',              def: 'A specialised carbon fixation pathway where plants open their stomata only at night to take in carbon dioxide, drastically reducing moisture loss during the hot, dry day.' },
  { term: 'Behavioural Adaptations',         def: 'Actions, routines, or conscious activities an organism undertakes to survive.' },
  { term: 'Physiological Adaptations',       def: 'Internal biochemical processes, metabolic changes, or cellular functions that aid survival.' },
  { term: 'Anatomical Adaptations',          def: "Distinctive physical structures or morphological features built into an organism's body." },
  { term: 'Sedentarisation',                 def: 'The process by which nomadic or migratory groups are pressured, often by governments, into settling down in permanent, stationary villages.' },
  { term: 'Chokepoints',                     def: 'Narrow, highly strategic navigable waterways where global shipping traffic is uniquely vulnerable to blockade or disruption.' },
  { term: 'Geopolitics',                     def: 'The study of how geographical positioning, physical landforms, and resource distribution intimately influence the political power and foreign policy of a state.' },
  { term: 'Desertification',                 def: 'The destructive process by which formerly fertile or semi-arid land degrades into dry, unproductive desert.' },
  { term: 'Overgrazing',                     def: 'The excessive feeding by livestock, such as cattle or goats, which entirely consumes protective vegetation and compacts the soil, exposing it to wind erosion.' },
  { term: 'Salinisation',                    def: 'The environmental hazard where ground water rapidly evaporates under intense sun, leaving behind dissolved mineral salts that slowly poison the soil and kill crops.' },
  { term: 'Aridity',                         def: 'A severe baseline lack of atmospheric and soil water that significantly hinders organic growth and slows natural decomposition.' },
  { term: 'Microplastics',                   def: 'Minuscule fragments of synthetic plastic, less than 5mm in length, which are highly damaging when they enter ecosystems.' },
  { term: 'Linear Economy',                  def: 'A traditional "take-make-dispose" economic system where raw materials are consumed rapidly and then mindlessly thrown away as waste.' },
  { term: 'Circular Economy',                def: 'A sustainable economic framework designed around reusing, repairing, refurbishing, and recycling existing materials to entirely eliminate waste.' },
  { term: 'Extended Producer Responsibility', def: 'A landmark policy approach legally forcing manufacturers and importers to bear the financial burden and physical responsibility for cleaning up and recycling their products at the end of their lifecycle.' },
  { term: 'Hadley Cell',                     def: 'A global-scale atmospheric circulation pattern in which warm air rises near the equator, flows out towards the poles, descends in the subtropics, and flows back towards the equator.' },
  { term: 'Leeward',                         def: 'The dry, sheltered side of a mountain range that faces away from the wind.' },
]

const DESERTS = [
  { icon: '🌍', name: 'Sahara Desert',        desc: 'Africa',        formula: '~15°–30° N' },
  { icon: '🐪', name: 'Arabian Desert',        desc: 'Middle East',   formula: '~15°–30° N' },
  { icon: '🌵', name: 'Sonoran Desert',        desc: 'North America', formula: '~15°–30° N' },
  { icon: '🦘', name: 'Great Victoria Desert', desc: 'Australia',     formula: '~20°–30° S' },
]

const QUIZ = [
  {
    label: 'Q1',
    q: 'Recall: What global atmospheric feature occurs around 30° North and South, causing sinking air and preventing cloud formation?',
    guidance: 'You should mention the Hadley Cell and the generation of high pressure.',
  },
  {
    label: 'Q2',
    q: 'Recall: Aside from humps storing fat, list two anatomical adaptations of a Camel.',
    guidance: 'Answers could include long eyelashes, closeable nostrils, or wide feet.',
  },
  {
    label: 'Q3',
    q: 'Application: Explain why the use of unsustainable irrigation in hot desert margins frequently leads to severe crop failure.',
    guidance: 'Apply the concept of evaporation. The intense sun evaporates the irrigation water extremely rapidly, leaving behind dissolved mineral salts in the topsoil (salinisation) which is highly toxic to plants.',
  },
  {
    label: 'Q4',
    q: 'Evaluation: Assess the extent to which human activity is more responsible for desertification than physical factors. (9 marks)',
    guidance: 'A strong answer argues that whilst physical conditions (e.g. erratic climatic drought) set the baseline vulnerability of the land, intense human activity (overgrazing, deforestation from rapid population growth) provides the immediate, rapid trigger. Evaluating the interaction (synoptic links) between the two is key to top marks.',
  },
]

function Accordion({ items, openState, setOpenState, renderBody }) {
  return (
    <div className="steps-list">
      {items.map((item, i) => {
        const isOpen = openState === i
        return (
          <div key={i} className="step" style={{ flexDirection: 'column', gap: 0, padding: 0 }}>
            <button
              onClick={() => setOpenState(isOpen ? null : i)}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpenState(isOpen ? null : i))}
              aria-expanded={isOpen}
              style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14 }}
            >
              <span className="step-num" style={{ flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ flex: 1, fontWeight: 700, fontSize: '.9rem', color: 'var(--text)' }}>{item.name}</span>
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 16px 16px 58px' }}>{renderBody(item)}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function Notes() {
  const [openPlant, setOpenPlant] = useState(null)
  const [openAnimal, setOpenAnimal] = useState(null)

  return (
    <NotesLayout
      tag="GCSE Geography"
      title="Hot Desert Ecosystems"
      subtitle="Comprehensive, exam-focused revision notes covering atmospheric science, xerophytes, the Bedouin, desertification, geopolitics, and sustainability."
      accent="#e67e22"
      topics={TOPICS}
      reference={REFERENCE}
    >

      {/* 01 LOCATION */}
      <section className="section reveal" id="location">
        <div className="section-header">
          <div className="section-num">01</div>
          <h2>Location &amp; Atmospheric Science</h2>
        </div>
        <div className="intro">
          Hot deserts are generally found in bands approximately <strong>15° to 30° north and south of the equator</strong>. Their location is primarily determined by global atmospheric circulation and the rain shadow effect.
        </div>

        <div className="stores-grid">
          {DESERTS.map(d => (
            <div className="store-card" key={d.name}>
              <div className="store-icon">{d.icon}</div>
              <div className="store-name">{d.name}</div>
              <div className="store-desc">{d.desc}</div>
              <div className="store-formula">{d.formula}</div>
            </div>
          ))}
        </div>

        <div className="two-col">
          <div className="info-card">
            <div className="info-head">🌍 The Hadley Cell</div>
            <p>Specifically the <strong>Hadley Cell</strong> (a global-scale atmospheric circulation pattern in which warm air rises near the equator, flows out towards the poles, descends in the subtropics, and flows back towards the equator). At the equator, intense solar heating causes air to rise. By the time this air reaches around 30° latitude it has cooled, become dense, and sinks back toward the Earth's surface. This descending air creates <strong>high pressure</strong>. As the air sinks, it warms up, increasing its capacity to hold moisture — completely suppressing cloud formation and precipitation.</p>
          </div>
          <div className="info-card">
            <div className="info-head">⛰️ Rain Shadow Effect</div>
            <p>A secondary factor causing deserts is the rain shadow effect. For example, the Atacama Desert in South America lies behind the high Andes mountains. When prevailing winds carry moist air from the ocean, they are forced upwards over the mountains. The air cools, condenses, and deposits heavy rain on the windward side. As the air descends on the <strong>leeward</strong> (the dry, sheltered side of a mountain range that faces away from the wind) side, it warms up and dries out, leaving the land entirely deprived of moisture.</p>
          </div>
        </div>

        <div className="callout warn">
          <div className="callout-title">📝 Examiner's Tip</div>
          <p>When asked to explain the formation of hot deserts, many students lose marks by just saying "it is too hot to rain." You must explicitly mention sinking air, high pressure, and the Hadley Cell. A top-band answer explains <em>why</em> high pressure stops rain: sinking air warms and absorbs moisture, preventing condensation.</p>
        </div>
      </section>
      <div className="divider" />

      {/* 02 PLANT ADAPTATIONS */}
      <section className="section reveal" id="plants">
        <div className="section-header">
          <div className="section-num">02</div>
          <h2>Plant Adaptations (Xerophytes)</h2>
        </div>
        <div className="intro">
          Plants that survive in hot deserts are known as a <strong>xerophyte</strong> (a plant specifically adapted to survive in an environment with extreme heat and little liquid water).
        </div>

        <Accordion
          items={PLANT_ADAPTATIONS}
          openState={openPlant}
          setOpenState={setOpenPlant}
          renderBody={item => (
            <p style={{ fontSize: '.88rem', lineHeight: 1.65, color: 'var(--muted)' }}>{item.desc}</p>
          )}
        />

        <div className="callout warn">
          <div className="callout-title">📝 Examiner's Tip</div>
          <p>Examiners love CAM photosynthesis because it separates a Level 8/9 student from the rest. Mentioning that stomata open at night to save water shows a high-level understanding of plant biology applied directly to geographical ecosystems.</p>
        </div>
      </section>
      <div className="divider" />

      {/* 03 ANIMAL ADAPTATIONS */}
      <section className="section reveal" id="animals">
        <div className="section-header">
          <div className="section-num">03</div>
          <h2>Animal Adaptations</h2>
        </div>
        <div className="intro">
          Desert animals must cope with extreme heat during the day, freezing drops in temperature at night, and a severe lack of water. Adaptations can be categorised into three distinct groups:
        </div>

        <div className="two-col">
          {[
            { head: '🏃 Behavioural', body: "Actions, routines, or conscious activities an organism undertakes to survive. Example: the Fennec Fox hunts strictly at night." },
            { head: '🔬 Physiological', body: "Internal biochemical processes, metabolic changes, or cellular functions. Example: the Camel producing heavily concentrated urine to prevent water wastage." },
            { head: '🦴 Anatomical', body: "Distinctive physical structures or morphological features built into an organism's body. Example: the Fennec Fox's giant ears or the Camel's wide feet." },
          ].map(({ head, body }) => (
            <div className="info-card" key={head}>
              <div className="info-head">{head}</div>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <Accordion
          items={ANIMAL_ADAPTATIONS}
          openState={openAnimal}
          setOpenState={setOpenAnimal}
          renderBody={item => (
            <div className="unit-grid">
              {item.types.map((t, j) => (
                <div key={j} className="unit-row">
                  <span className="unit-val" style={{ fontSize: '.7rem', letterSpacing: '.06em', textTransform: 'uppercase', flexShrink: 0 }}>{t.label}</span>
                  <span style={{ fontSize: '.86rem', color: 'var(--text)', maxWidth: '70%', textAlign: 'right', lineHeight: 1.55 }}>{t.detail}</span>
                </div>
              ))}
            </div>
          )}
        />

        <div className="callout warn">
          <div className="callout-title">📝 Examiner's Tip</div>
          <p>Questions on animal survival frequently require you to categorise adaptations. A common pitfall is calling nocturnal behaviour a physical adaptation. Always clearly distinguish between structural features (anatomical), internal functions (physiological), and actions (behavioural).</p>
        </div>
      </section>
      <div className="divider" />

      {/* 04 THE BEDOUIN */}
      <section className="section reveal" id="bedouin">
        <div className="section-header">
          <div className="section-num">04</div>
          <h2>The Bedouin</h2>
        </div>
        <div className="intro">
          The Bedouin are nomadic Arab tribes who have survived in the Middle Eastern deserts for thousands of years. Named examples that examiners reward include the <strong>Rwala</strong> tribe of the Syrian Desert and the <strong>Beni Sakhr</strong> of Jordan.
        </div>

        <div className="two-col">
          <div className="info-card">
            <div className="info-head">🏕️ Traditional Lifestyle</div>
            <p>Their historical survival was heavily reliant on <strong>nomadic pastoralism</strong> — constantly moving following rainfall, water, and grazing lands. Traditional Bedouin tents are woven from black goat hair; during rare rains, these fibres expand and swell to become waterproof, while in the dry heat they shrink, allowing cooling air ventilation. Loose, layered, and often light-coloured clothing protects from the sun whilst trapping a layer of insulating air. Deep, passed-down generational knowledge of oasis locations is vital.</p>
          </div>
          <div className="info-card">
            <div className="info-head">📱 Contemporary (2025–2026)</div>
            <p>Modernisation has drastically altered Bedouin existence. Today, highly capable Toyota pickup trucks have largely replaced camels for long-distance desert crossing. Satellite phones provide lifeline communications to the outside world, whilst portable solar panels easily power small electronics.</p>
            <p style={{ marginTop: 10 }}>However, they are facing immense pressure regarding <strong>sedentarisation</strong> (the process by which nomadic or migratory groups are pressured, often by governments, into settling down in permanent, stationary villages). Geopolitical borders restrict their free movement across nations, and disputes over traditional land rights threaten their historical way of life.</p>
          </div>
        </div>

        <div className="callout warn">
          <div className="callout-title">📝 Examiner's Tip</div>
          <p>When evaluating human interaction in deserts, traditional living is an excellent example of a sustainable relationship with the environment. Be prepared to contrast this with the modern pressures that force nomads into stationary, often less sustainable lifestyles.</p>
        </div>
      </section>
      <div className="divider" />

      {/* 05 MIDDLE EAST */}
      <section className="section reveal" id="middleeast">
        <div className="section-header">
          <div className="section-num">05</div>
          <h2>The Middle East: Significance</h2>
        </div>
        <div className="intro">
          The Middle East is a critically important region due to its strategic geography — a geographic nexus joining <strong>Europe, Asia, and Africa</strong>. It is defined heavily by massive <strong>chokepoints</strong> (narrow, highly strategic navigable waterways where global shipping traffic is uniquely vulnerable to blockade or disruption). Famous examples include the <strong>Strait of Hormuz</strong> and the <strong>Suez Canal</strong>.
        </div>

        <h3>Oil &amp; Gas Geology</h3>
        <div className="callout">
          <div className="callout-title">How the Reserves Formed</div>
          <p>Millions of years ago, the region was covered by shallow, life-rich seas. Microscopic organisms died, accumulated on the seabed, and were buried. Extreme heat and pressure over immense periods of geological time transformed this biological matter into fossil fuels. Because the entire global economy relies on this energy supply, the Middle East is the centre of intense <strong>geopolitics</strong> (the study of how geographical positioning, physical landforms, and resource distribution intimately influence the political power and foreign policy of a state). Tensions frequently erupt around controlling energy chokepoints.</p>
        </div>

        <h3>Energy Transition</h3>
        <div className="info-card accent-border">
          <div className="info-head">☀️ Mohammed bin Rashid Al Maktoum Solar Park, Dubai</div>
          <p>Many oil-rich states are now heavily planning an energy transition. Current targets aim for approximately <strong>5,000 MW by 2030</strong>, though some government projections push this even higher. This highlights a fascinating irony: petrostates whose wealth was built entirely on fossil fuels are now leading some of the world's most dramatic investments into solar, attempting to diversify their economies before oil demand collapses.</p>
        </div>

        <div className="callout warn">
          <div className="callout-title">📝 Examiner's Tip</div>
          <p>GCSE questions on global resource distribution often look for the "so what?" factor. Don't just mention the Middle East has oil; mention the global geopolitical tension and the strategic significance of chokepoints like the Strait of Hormuz.</p>
        </div>
      </section>
      <div className="divider" />

      {/* 06 DESERTIFICATION */}
      <section className="section reveal" id="desertification">
        <div className="section-header">
          <div className="section-num">06</div>
          <h2>Desertification</h2>
        </div>
        <div className="intro">
          Margins of hot deserts are highly vulnerable to <strong>desertification</strong> (the destructive process by which formerly fertile or semi-arid land degrades into dry, unproductive desert). This is driven by both human and physical forces.
        </div>

        <h3>Causes</h3>
        <div className="two-col">
          <div className="info-card">
            <div className="info-head">🐄 Overgrazing</div>
            <p>The excessive feeding by livestock, such as cattle or goats, which entirely consumes protective vegetation and compacts the soil, exposing it to wind erosion.</p>
          </div>
          <div className="info-card">
            <div className="info-head">🪓 Deforestation</div>
            <p>The removal of trees (often for firewood) rips out root networks holding the topsoil together, escalating soil erosion via surface runoff when it does rain.</p>
          </div>
          <div className="info-card">
            <div className="info-head">💧 Unsustainable Irrigation</div>
            <p>Tapping aquifers to intensely water desert farms can lead to severe <strong>salinisation</strong> — ground water rapidly evaporates under intense sun, leaving behind dissolved mineral salts that slowly poison the soil and kill crops.</p>
          </div>
          <div className="info-card">
            <div className="info-head">🌡️ Climate Change</div>
            <p>Global warming causes reduced, less reliable, and incredibly erratic rainfall in already dry marginal zones, meaning plant life inevitably dies out.</p>
          </div>
        </div>

        <h3>Case Study — The Great Green Wall</h3>
        <div className="calc-block">
          <div className="calc-notes">
            <p>Spanning the <strong>Sahel region</strong> across Africa (just south of the Sahara), the Great Green Wall is an ambitious anti-desertification project. Planned to stretch roughly <strong>8,000 km</strong> across the continent, countries are planting thousands of drought-resistant trees, largely Acacias. As of 2024, approximately <strong>30 million hectares</strong> of degraded land have been successfully restored — roughly <strong>30%</strong> towards its massive 2030 targets. The trees' roots bind the soil, their canopies offer shade, and species like <em>Acacia senegal</em> yield valuable gum arabic for the local economy.</p>
          </div>
        </div>

        <div className="callout">
          <div className="callout-title">🔗 Synoptic Link</div>
          <p>A top-level geographical understanding recognises that physical and human factors are rarely separated. Physical climate change reduces rainfall, making native grass struggle to grow. Concurrently, human population growth drastically increases the demand for food, placing more herds on the land. The human element (overgrazing) continuously strips the vegetation just as the physical element (drought) prevents it from recovering — accelerating desertification far past what either factor could accomplish alone.</p>
        </div>

        <div className="callout warn">
          <div className="callout-title">📝 Examiner's Tip</div>
          <p>A guaranteed question type will ask you to explain or evaluate the causes of desertification. The highest marks go to students who explicitly link human and physical factors, showing how rising populations and climate change "multiply" the damage together.</p>
        </div>
      </section>
      <div className="divider" />

      {/* 07 FAST FASHION */}
      <section className="section reveal" id="fastfashion">
        <div className="section-header">
          <div className="section-num">07</div>
          <h2>Fast Fashion &amp; The Atacama</h2>
        </div>
        <div className="intro">
          The Atacama Desert in northern Chile is the driest non-polar desert in the world, renowned for its unbelievable <strong>aridity</strong> (a severe baseline lack of atmospheric and soil water that significantly hinders organic growth and slows natural decomposition). It has recently become a global symbol for the crisis of the modern fast fashion industry.
        </div>

        <h3>The Supply Chain</h3>
        <div className="steps-list">
          {[
            'Western consumers aggressively buy and discard clothing, frequently donating it to charity.',
            'Charities cannot sell it all, so it is packaged and exported. Chile imports roughly 123,000 tonnes of used clothing annually through the port of Iquique.',
            'While some is resold locally, an estimated 11,000 to 59,000 tonnes annually of unsellable surplus is illegally dumped into the Atacama desert to bypass disposal tariffs.',
          ].map((text, i) => (
            <div key={i} className="step">
              <span className="step-num">{i + 1}</span>
              <div>{text}</div>
            </div>
          ))}
        </div>

        <div className="callout warn">
          <div className="callout-title">⚠ Environmental Harm &amp; Microplastics</div>
          <p>Because the Atacama's aridity prevents bacteria from naturally breaking materials down, this waste sits permanently. Modern clothing is largely made from cheap polyester and synthetic fibres. As they degrade under intense UV light, they continuously leach toxic dyes and <strong>microplastics</strong> (minuscule fragments of synthetic plastic, less than 5mm in length, which are highly damaging when they enter ecosystems) into the fragile groundwater and sandy soils.</p>
        </div>

        <h3>Sustainability &amp; Policy Response</h3>
        <p style={{ fontSize: '.88rem', lineHeight: 1.65, color: 'var(--muted)', marginBottom: 16 }}>
          This crisis highlights the flaws of our current <strong>linear economy</strong> (a traditional "take-make-dispose" economic system where raw materials are consumed rapidly and then mindlessly thrown away as waste). Geographers advocate for a transition into a <strong>circular economy</strong> (a sustainable economic framework designed around reusing, repairing, refurbishing, and recycling existing materials to entirely eliminate waste).
        </p>

        <div className="two-col">
          <div className="info-card accent-border">
            <div className="info-head">🇪🇺 EU — Extended Producer Responsibility</div>
            <p>New laws for 2024 and 2025 legally force manufacturers and importers to bear the financial burden and physical responsibility for cleaning up and recycling their products at the end of their lifecycle.</p>
          </div>
          <div className="info-card accent-border">
            <div className="info-head">🇨🇱 Chilean Government</div>
            <p>The Chilean government has recently escalated its own laws, finally categorising textiles as a priority sector under local EPR legislation to force accountability onto clothing importers.</p>
          </div>
        </div>

        <div className="callout warn">
          <div className="callout-title">📝 Examiner's Tip</div>
          <p>Use the Atacama dumping ground as your ultimate case study for global inequalities in consumption. You must show the geographical link: wealthy Western nations (linear economy) exploit less developed regulatory systems (dumping in Chile), creating localised environmental hazards (microplastics/aridity).</p>
        </div>
      </section>
      <div className="divider" />

      {/* 08 QUICK QUIZ */}
      <section className="section reveal" id="quiz">
        <div className="section-header">
          <div className="section-num">08</div>
          <h2>Quick Quiz</h2>
        </div>
        <div className="intro">
          Test your knowledge with these application and recall questions. Read the guidance below after attempting your answer.
        </div>
        <div className="steps-list">
          {QUIZ.map(({ label, q, guidance }) => (
            <div key={label} className="step">
              <span className="step-num" style={{ fontSize: '.7rem' }}>{label}</span>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: 4, fontSize: '.88rem' }}>{q}</div>
                <p style={{ fontStyle: 'italic', fontSize: '.8rem', color: 'var(--muted)', marginTop: 4 }}>
                  <strong>Guidance:</strong> {guidance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="divider" />

      {/* 09 GLOSSARY */}
      <section className="section reveal" id="glossary">
        <div className="section-header">
          <div className="section-num">09</div>
          <h2>Key Terms</h2>
        </div>
        <div className="intro">
          These essential Tier 3 geography terms must be used in your long-answer exam questions.
        </div>
        <div className="stores-grid">
          {GLOSSARY_TERMS.map(({ term, def }) => (
            <div className="store-card" key={term}>
              <div className="store-name" style={{ color: 'var(--accent)' }}>{term}</div>
              <div className="store-desc">{def}</div>
            </div>
          ))}
        </div>
      </section>

    </NotesLayout>
  )
}
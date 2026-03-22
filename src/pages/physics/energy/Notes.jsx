import NotesLayout from '@/components/NotesLayout'

const TOPICS = [
  { num:"01", id:"stores",       label:"Energy Stores" },
  { num:"02", id:"transfers",    label:"Transfers & Pathways" },
  { num:"03", id:"calculations", label:"Calculations" },
  { num:"04", id:"resources",    label:"Energy Resources" },
  { num:"05", id:"efficiency",   label:"Efficiency" },
  { num:"06", id:"generation",   label:"Electricity Generation" },
]

const REFERENCE = [
  { num:"07", id:"formulas", label:"Key Formulas" },
  { num:"08", id:"mistakes", label:"Exam Mistakes" },
  { num:"09", id:"glossary", label:"Glossary" },
]

export default function Notes() {
  return (
    <NotesLayout
      tag="GCSE Physics"
      title="Energy & Power"
      subtitle="Clear, simple notes covering everything you need to know — stores, transfers, calculations, resources, and generation."
      accent="#d4522a"
      topics={TOPICS}
      reference={REFERENCE}
    >

      {/* 01 ENERGY STORES */}
      <section className="section reveal scroll-mt-32" id="stores">
        <div className="section-header">
          <div className="section-num">01</div>
          <h2>Energy Stores</h2>
        </div>
        <div className="intro">
          The <strong>Law of Conservation of Energy</strong> states that energy cannot be created or destroyed — it can only be transferred between stores or converted from one form to another. The total energy in a closed system always stays the same.
        </div>
        <h3>The 8 Energy Stores</h3>
        <div className="stores-grid">
          {[
            { icon:"⚡", name:"Kinetic",                desc:"Energy in any moving object. The faster it moves and the more mass it has, the more kinetic energy it stores.",                                     formula:"Ek = ½mv²" },
            { icon:"🌡️", name:"Thermal",               desc:"All objects store thermal energy. The hotter the object, the more it stores. Heat always flows from hot → cold.",                                  formula:"ΔE = mcΔθ" },
            { icon:"⚗️", name:"Chemical",              desc:"Stored in the bonds between atoms. Released during chemical reactions. Examples: food, fuel, batteries." },
            { icon:"⬆️", name:"Gravitational Potential",desc:"Stored in objects above the ground. The higher up and heavier the object, the more GPE it has.",                                                 formula:"GPE = mgh" },
            { icon:"🌀", name:"Elastic Potential",      desc:"Stored when an object is stretched or squashed — e.g. a spring or rubber band. Released when it returns to its original shape.",                  formula:"Ee = ½ke²" },
            { icon:"🧲", name:"Magnetic",               desc:"Stored in magnets and magnetic fields. Like poles repel, unlike poles attract — energy is stored in this interaction." },
            { icon:"⚡", name:"Electrostatic",          desc:"Stored between charged objects. Like charges repel, unlike charges attract. Lightning is electrostatic energy being released." },
            { icon:"☢️", name:"Nuclear",               desc:"Stored in the nucleus of atoms. Released by fission (splitting) or fusion (joining). This is how stars produce energy." },
          ].map(({ icon, name, desc, formula }) => (
            <div className="store-card" key={name}>
              <div className="store-icon">{icon}</div>
              <div className="store-name">{name}</div>
              <div className="store-desc">{desc}</div>
              {formula && <div className="store-formula">{formula}</div>}
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* 02 TRANSFERS */}
      <section className="section reveal scroll-mt-32" id="transfers">
        <div className="section-header">
          <div className="section-num">02</div>
          <h2>Transfers &amp; Pathways</h2>
        </div>
        <div className="intro">
          Energy moves between stores through <strong>pathways</strong>. There are 4 pathways. When energy is transferred, some is always wasted — usually as thermal energy spreading into the surroundings. This is called <strong>dissipation</strong>.
        </div>
        <h3>The 4 Energy Pathways</h3>
        <div className="two-col">
          {[
            { icon:"🔧", head:"Mechanical", body:"A force causes movement. Example: pushing a box transfers energy from your muscles to the kinetic store of the box." },
            { icon:"🔌", head:"Electrical",  body:"Moving charges (current) transfer energy through a circuit. Example: a wire carrying current from a battery to a bulb." },
            { icon:"🔥", head:"Heating",     body:<>Energy moves from hotter to cooler objects. Three methods:<br/><strong>Conduction</strong> — through solids<br/><strong>Convection</strong> — through liquids/gases<br/><strong>Radiation</strong> — through space as infrared waves</> },
            { icon:"💡", head:"Radiation",   body:"Energy travels as waves — light, infrared, sound, and other electromagnetic waves." },
          ].map(({ icon, head, body }) => (
            <div className="info-card" key={head}>
              <div className="info-head">{icon} {head}</div>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <h3>Energy Transfer Chains</h3>
        <div className="chain-list">
          {[
            { label:"Falling ball",   steps:[{t:"Gravitational Potential"},{t:"Kinetic"},{t:"Thermal (impact)",w:true}] },
            { label:"Phone charging", steps:[{t:"Chemical (battery pack)"},{t:"Electrical"},{t:"Chemical (phone)"}] },
            { label:"Light bulb",     steps:[{t:"Electrical"},{t:"Light",plus:true},{t:"Thermal (wasted)",w:true}] },
            { label:"Power station",  steps:[{t:"Chemical (fuel)"},{t:"Thermal"},{t:"Kinetic"},{t:"Electrical"}] },
          ].map(({ label, steps }) => (
            <div className="chain" key={label}>
              <span className="chain-label">{label}</span>
              <div className="chain-steps">
                {steps.map((s, i) => (
                  <span key={i}>
                    <span className={`chain-step${s.w ? " waste" : ""}`}>{s.t}</span>
                    {i < steps.length - 1 && <span className="chain-arrow">{s.plus ? " +" : " →"}</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="callout">
          <div className="callout-title">What is a Sankey Diagram?</div>
          A visual way to show energy transfers. The width of each arrow is proportional to the amount of energy. Useful energy goes straight ahead; wasted energy branches downward. The total input always equals all outputs added together.
        </div>
      </section>

      <div className="divider" />

      {/* 03 CALCULATIONS */}
      <section className="section reveal scroll-mt-32" id="calculations">
        <div className="section-header">
          <div className="section-num">03</div>
          <h2>Calculations</h2>
        </div>
        <div className="intro">
          These are the four main calculations you need to know. Always check your units before substituting into a formula — time must be in <strong>seconds</strong>, distance in <strong>metres</strong>, mass in <strong>kg</strong>.
        </div>
        <h3>Work Done</h3>
        <div className="calc-block">
          <div className="calc-formula-big">W = F × d</div>
          <div className="calc-legend">
            <span><strong>W</strong> = Work Done (Joules, J)</span>
            <span><strong>F</strong> = Force (Newtons, N)</span>
            <span><strong>d</strong> = Distance (metres, m)</span>
          </div>
          <div className="calc-notes">
            <p>Work done = energy transferred. They are the same thing, measured in Joules.</p>
            <p><strong>No movement = no work done</strong>, even if a force is applied (e.g. pushing a wall).</p>
            <p><strong>Example:</strong> A person pushes a box with 50 N over 3 m → W = 50 × 3 = <strong>150 J</strong></p>
          </div>
        </div>
        <h3>Power</h3>
        <div className="calc-block">
          <div className="calc-formula-big">P = E ÷ t</div>
          <div className="calc-legend">
            <span><strong>P</strong> = Power (Watts, W)</span>
            <span><strong>E</strong> = Energy (Joules, J)</span>
            <span><strong>t</strong> = Time (<em>seconds</em>, s)</span>
          </div>
          <div className="calc-notes">
            <p>Power is the <strong>rate of energy transfer</strong> — how quickly energy is used or transferred. 1 W = 1 J per second.</p>
            <p><strong>Always convert time to seconds</strong> before calculating. Minutes × 60. Hours × 3,600.</p>
            <p><strong>Example:</strong> A motor transfers 6,000 J in 2 minutes → 2 min = 120 s → P = 6,000 ÷ 120 = <strong>50 W</strong></p>
          </div>
        </div>
        <h3>Kinetic Energy</h3>
        <div className="calc-block">
          <div className="calc-formula-big">Ek = ½mv²</div>
          <div className="calc-legend">
            <span><strong>Ek</strong> = Kinetic Energy (J)</span>
            <span><strong>m</strong> = mass (kg)</span>
            <span><strong>v</strong> = speed (m/s)</span>
          </div>
          <div className="calc-notes">
            <p><strong>Speed is squared</strong> — this is the most common mistake. If a car doubles its speed, its kinetic energy quadruples (×4).</p>
            <p><strong>Example:</strong> 1,000 kg car at 20 m/s → Ek = ½ × 1000 × 400 = <strong>200,000 J</strong></p>
          </div>
        </div>
        <h3>Gravitational Potential Energy</h3>
        <div className="calc-block">
          <div className="calc-formula-big">GPE = mgh</div>
          <div className="calc-legend">
            <span><strong>m</strong> = mass (kg)</span>
            <span><strong>g</strong> = 10 N/kg on Earth</span>
            <span><strong>h</strong> = height (m)</span>
          </div>
          <div className="calc-notes">
            <p><strong>Example:</strong> 2 kg book on a 1 m shelf → GPE = 2 × 10 × 1 = <strong>20 J</strong></p>
          </div>
        </div>
        <h3>Efficiency</h3>
        <div className="calc-block">
          <div className="calc-formula-big">η = (useful output ÷ total input) × 100%</div>
          <div className="calc-notes">
            <p>Efficiency tells you what percentage of input energy is actually useful. <strong>Maximum is 100%</strong> — impossible in practice because there is always some wasted energy.</p>
            <p><strong>Example:</strong> Motor uses 500 J, produces 350 J of kinetic energy → efficiency = (350 ÷ 500) × 100 = <strong>70%</strong>. The other 150 J is wasted as heat.</p>
          </div>
        </div>
        <div className="callout warn">
          <div className="callout-title">⚠ Unit Conversions to Remember</div>
          <div className="unit-grid">
            {[["Minutes → seconds","× 60"],["Hours → seconds","× 3,600"],["kW → W","× 1,000"],["MW → W","× 1,000,000"],["km → m","× 1,000"]].map(([l,v]) => (
              <div className="unit-row" key={l}><span>{l}</span><span className="unit-val">{v}</span></div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 04 RESOURCES */}
      <section className="section reveal scroll-mt-32" id="resources">
        <div className="section-header">
          <div className="section-num">04</div>
          <h2>Energy Resources</h2>
        </div>
        <div className="intro">
          Energy resources are used for three things: <strong>transport</strong>, <strong>heating</strong>, and <strong>generating electricity</strong>. They split into two types — non-renewable (will run out) and renewable (will not run out).
        </div>
        <h3>Non-Renewable Sources</h3>
        <div className="resource-block">
          <div className="resource-head nonrenew">🪨 Fossil Fuels (Coal, Oil, Natural Gas)</div>
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Advantages</div>
              <ul>
                <li>Very reliable — can generate on demand, 24/7</li>
                <li>High energy density — small amount = lots of energy</li>
                <li>Existing infrastructure already in place</li>
              </ul>
            </div>
            <div className="con-card">
              <div className="con-head">Disadvantages</div>
              <ul>
                <li>Releases CO₂ → greenhouse effect → climate change</li>
                <li>Releases SO₂ → acid rain → damages forests and buildings</li>
                <li>Finite — will run out (oil and gas: ~50–100 years)</li>
                <li>Damaging to extract (mining, drilling, oil spills)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resource-block">
          <div className="resource-head nonrenew">☢️ Nuclear</div>
          <div className="two-col tight">
            <div className="pro-card">
              <div className="pro-head">Advantages</div>
              <ul>
                <li>No CO₂ emissions during operation</li>
                <li>Very high energy density — tiny amount of fuel, huge output</li>
                <li>Reliable — not weather dependent</li>
              </ul>
            </div>
            <div className="con-card">
              <div className="con-head">Disadvantages</div>
              <ul>
                <li>Produces radioactive waste — dangerous for thousands of years</li>
                <li>Risk of accidents (Chernobyl 1986, Fukushima 2011)</li>
                <li>Very expensive to build; takes many years</li>
                <li>Still non-renewable — uranium will eventually run out</li>
              </ul>
            </div>
          </div>
        </div>
        <h3>Renewable Sources</h3>
        <div className="renew-grid">
          {[
            { icon:"💨", head:"Wind",         how:"Wind turns turbine blades → spins a generator.",                          pros:"✓ No CO₂, free fuel, can be offshore",                               cons:"✗ Unreliable — no wind = no power. Can be noisy." },
            { icon:"☀️", head:"Solar",        how:"Photovoltaic cells convert sunlight directly into electricity.",           pros:"✓ No CO₂, low maintenance, no moving parts",                         cons:"✗ Only works in daylight. Less effective in UK climate." },
            { icon:"💧", head:"Hydroelectric",how:"Water behind a dam falls through turbines.",                               pros:"✓ Very reliable, responds to demand instantly",                      cons:"✗ Flooding valleys destroys habitats. High build cost." },
            { icon:"🌊", head:"Tidal",        how:"Tidal barrages harness the movement of tides.",                           pros:"✓ Most predictable renewable — tides guaranteed twice daily",         cons:"✗ Very expensive. Limited suitable locations." },
            { icon:"🌿", head:"Biofuels",     how:"Fuels made from plants or organic waste, burned for energy.",             pros:"✓ Carbon neutral — CO₂ released ≈ CO₂ absorbed while growing",       cons:"✗ Uses farmland. Still releases CO₂ when burned." },
            { icon:"🌋", head:"Geothermal",   how:"Heat from deep inside the Earth turns water to steam.",                   pros:"✓ Reliable, low emissions, constant heat source",                    cons:"✗ Only works near tectonic plate boundaries (e.g. Iceland)." },
          ].map(({ icon, head, how, pros, cons }) => (
            <div className="renew-card" key={head}>
              <div className="renew-head">{icon} {head}</div>
              <p className="renew-how">{how}</p>
              <div className="renew-pros">{pros}</div>
              <div className="renew-cons">{cons}</div>
            </div>
          ))}
        </div>
        <div className="callout">
          <div className="callout-title">Reliability Ranking</div>
          <div className="reliability-bar">
            <span className="rel-label">Most reliable</span>
            <div className="rel-items">
              {[["Hydroelectric","high"],["Tidal","high"],["Nuclear","mid"],["Fossil Fuels","mid"],["Wind ≈ Solar ≈ Wave","low"]].map(([label,cls],i,arr) => (
                <span key={label}>
                  <span className={`rel-item ${cls}`}>{label}</span>
                  {i < arr.length-1 && <span className="rel-arrow">›</span>}
                </span>
              ))}
            </div>
            <span className="rel-label">Least reliable</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 05 EFFICIENCY */}
      <section className="section reveal scroll-mt-32" id="efficiency">
        <div className="section-header">
          <div className="section-num">05</div>
          <h2>Efficiency &amp; Dissipation</h2>
        </div>
        <div className="intro">
          In every real energy transfer, some energy is <strong>wasted</strong> — usually as thermal energy spreading into the surroundings. This is called <strong>dissipation</strong>. The energy isn't destroyed (conservation of energy still holds) — it just becomes too spread out to be useful.
        </div>
        <h3>Examples of Wasted Energy</h3>
        <div className="waste-list">
          {[
            { icon:"🚗", text:<><strong>Car engine</strong> — most of the chemical energy in petrol is wasted as heat and sound, not useful kinetic energy.</> },
            { icon:"💡", text:<><strong>Filament bulb</strong> — far more energy is transferred as heat than as light. LEDs are much more efficient.</> },
            { icon:"🔌", text:<><strong>Phone charger left plugged in</strong> — continuously converts electrical energy to thermal energy even when not charging anything.</> },
            { icon:"🛑", text:<><strong>Car brakes</strong> — kinetic energy is transferred to thermal energy in the brakes and surrounding air. That energy is gone.</> },
          ].map(({ icon, text }, i) => (
            <div className="waste-item" key={i}><span className="waste-icon">{icon}</span><div>{text}</div></div>
          ))}
        </div>
        <h3>How to Reduce Wasted Energy</h3>
        <div className="two-col">
          {[
            { icon:"🛢️", head:"Lubrication",         body:"Oil or grease between moving surfaces reduces friction. Less friction = less heat wasted." },
            { icon:"🏠", head:"Insulation",           body:"Roof insulation, double glazing, and draught excluders slow heat transfer from buildings, reducing energy wasted on heating." },
            { icon:"🏎️", head:"Streamlining",        body:"Aerodynamic shapes reduce air resistance. Less air resistance = less energy wasted as heat and sound." },
            { icon:"🔁", head:"Regenerative Braking", body:"Used in electric cars — captures kinetic energy during braking and converts it back to electrical energy instead of wasting it as heat." },
          ].map(({ icon, head, body }) => (
            <div className="info-card" key={head}><div className="info-head">{icon} {head}</div><p>{body}</p></div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* 06 GENERATION */}
      <section className="section reveal scroll-mt-32" id="generation">
        <div className="section-header">
          <div className="section-num">06</div>
          <h2>Electricity Generation</h2>
        </div>
        <div className="intro">
          Most power stations follow the same basic four-step process to generate electricity. The difference between them is just <strong>what provides the heat</strong>.
        </div>
        <h3>How Most Power Stations Work</h3>
        <div className="steps-list">
          {[
            <><strong>Fuel heats water</strong> — whatever the energy source (burning coal, nuclear fission, geothermal heat), it heats water in a boiler.</>,
            <><strong>Steam is produced</strong> — the water becomes high-pressure steam.</>,
            <><strong>Steam spins a turbine</strong> — the steam drives a large set of blades on a shaft.</>,
            <><strong>Generator produces electricity</strong> — the spinning turbine turns a coil of wire inside a magnetic field. This is <em>electromagnetic induction</em>.</>,
          ].map((text, i) => (
            <div className="step" key={i}>
              <span className="step-num">{i+1}</span>
              <div>{text}</div>
            </div>
          ))}
        </div>
        <div className="callout">
          <div className="callout-title">What is Electromagnetic Induction?</div>
          Moving a wire through a magnetic field (or moving a magnet near a wire) causes a current to flow. The faster the rotation, the stronger the magnetic field, the more turns on the coil → the greater the voltage produced. This is how every generator works.
        </div>
        <h3>Exceptions to the Steam Process</h3>
        <div className="two-col">
          <div className="info-card accent-border">
            <div className="info-head">💨 Wind &amp; 💧 Hydroelectric</div>
            <p>Skip the steam step entirely. Moving air or falling water spins the turbine <strong>directly</strong>.</p>
          </div>
          <div className="info-card accent-border">
            <div className="info-head">☀️ Solar PV</div>
            <p>Completely different — photovoltaic cells convert light directly into electricity using the <strong>photoelectric effect</strong>. No turbine, no steam.</p>
          </div>
        </div>
        <h3>The National Grid</h3>
        <div className="grid-explainer">
          {[
            { icon:"🏭", label:"Power Station",         sub:"Generates electricity" },
            { icon:"⬆️", label:"Step-Up Transformer",   sub:"Increases voltage to ~400,000 V" },
            { icon:"🔌", label:"Transmission Cables",   sub:"High voltage = low current = less heat lost" },
            { icon:"⬇️", label:"Step-Down Transformer", sub:"Reduces to 230 V for homes" },
            { icon:"🏠", label:"Your Home",             sub:"Safe to use" },
          ].map(({ icon, label, sub }, i, arr) => (
            <span key={label} style={{display:"flex",alignItems:"center",gap:8}}>
              <div className="grid-step">
                <div className="grid-icon">{icon}</div>
                <div className="grid-label">{label}</div>
                <div className="grid-sub">{sub}</div>
              </div>
              {i < arr.length-1 && <div className="grid-arrow">→</div>}
            </span>
          ))}
        </div>
        <p className="grid-note">Electricity is transmitted at <strong>very high voltage</strong> because high voltage means lower current, and lower current means less energy wasted as heat in the cables.</p>
      </section>

      <div className="divider" />

      {/* 07 FORMULAS */}
      <section className="section reveal scroll-mt-32" id="formulas">
        <div className="section-header">
          <div className="section-num">07</div>
          <h2>Key Formulas</h2>
        </div>
        <div className="intro">Learn these — you will need them in the exam. Make sure you know what each symbol stands for and what unit the answer comes out in.</div>
        <table className="formula-table">
          <thead><tr><th>Formula</th><th>What it calculates</th><th>Units</th></tr></thead>
          <tbody>
            {[
              ["Ek = ½mv²",                         "Kinetic energy",                 "Joules (J)"],
              ["GPE = mgh",                         "Gravitational potential energy",  "Joules (J)"],
              ["Ee = ½ke²",                         "Elastic potential energy",        "Joules (J)"],
              ["ΔE = mcΔθ",                         "Thermal energy change",           "Joules (J)"],
              ["W = F × d",                         "Work done",                       "Joules (J)"],
              ["P = E ÷ t",                         "Power",                           "Watts (W)"],
              ["η = (useful out ÷ total in) × 100%","Efficiency",                      "% or decimal"],
              ["E = P(kW) × t(hours)",              "Energy in kilowatt-hours",        "kWh"],
            ].map(([f,w,u]) => (
              <tr key={f}><td className="f-formula">{f}</td><td>{w}</td><td>{u}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="divider" />

      {/* 08 MISTAKES */}
      <section className="section reveal scroll-mt-32" id="mistakes">
        <div className="section-header">
          <div className="section-num">08</div>
          <h2>Common Exam Mistakes</h2>
        </div>
        <div className="intro">These are the mistakes that come up most often. Know them before you sit the exam.</div>
        <div className="mistake-list">
          {[
            <><strong>Saying energy is "used up" or "destroyed."</strong> Energy is always conserved — it is transferred or dissipated, never destroyed.</>,
            <><strong>Confusing power with energy.</strong> Power is the <em>rate</em> of energy transfer (how quickly). Energy is the total amount. Different things.</>,
            <><strong>Forgetting to square the speed in Ek = ½mv².</strong> This is the most common calculation error in this topic. If speed doubles, Ek quadruples.</>,
            <><strong>Saying nuclear is renewable.</strong> It is NOT. Uranium supplies are finite and will eventually run out.</>,
            <><strong>Calling biofuels "zero carbon" or "carbon free."</strong> They are <em>carbon neutral</em> — CO₂ is still released when burned, it's just (roughly) balanced by what the plant absorbed.</>,
            <><strong>Saying solar and wind are "always unreliable."</strong> The correct term is <em>intermittent</em> or <em>weather-dependent</em>. "Unreliable" is too vague for exam marks.</>,
            <><strong>Not converting units before calculating.</strong> Time must be in seconds. Distance in metres. Mass in kg. Always check before substituting.</>,
            <><strong>Thinking efficiency can exceed 100%.</strong> It cannot. That would mean creating energy from nothing.</>,
          ].map((text, i) => (
            <div className="mistake" key={i}><span className="mistake-x">✗</span><div>{text}</div></div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* 09 GLOSSARY */}
      <section className="section reveal scroll-mt-32" id="glossary">
        <div className="section-header">
          <div className="section-num">09</div>
          <h2>Glossary</h2>
        </div>
        <div className="intro">Key words you need to know. If any of these come up in an exam question, use the exact definition.</div>
        <table className="def-table">
          <thead><tr><th>Word</th><th>Simple definition</th></tr></thead>
          <tbody>
            {[
              ["Conservation of energy","Energy cannot be created or destroyed — only transferred or dissipated."],
              ["Energy store","A place where energy is held — e.g. kinetic, thermal, chemical."],
              ["Energy pathway","The route by which energy is transferred — mechanical, electrical, heating, or radiation."],
              ["Work done","The energy transferred when a force moves an object. W = F × d."],
              ["Power","The rate of energy transfer. How quickly energy is used or transferred. Measured in Watts."],
              ["Watt","The unit of power. 1 W = 1 Joule per second."],
              ["Efficiency","The fraction of input energy that is usefully transferred. Can never exceed 100%."],
              ["Dissipation","When energy spreads out into the surroundings as thermal energy, becoming too spread out to use."],
              ["Non-renewable","An energy source that will eventually run out — fossil fuels and nuclear."],
              ["Renewable","An energy source that is naturally replenished and will not run out."],
              ["Carbon neutral","When the CO₂ released roughly equals the CO₂ absorbed — net CO₂ ≈ 0. Biofuels are carbon neutral."],
              ["Intermittent","Not always available — solar and wind are intermittent because they depend on weather."],
              ["National Grid","The UK network of cables and transformers that delivers electricity from power stations to homes."],
              ["Electromagnetic induction","The process by which moving a wire through a magnetic field causes a current to flow. How generators work."],
              ["Nuclear fission","Splitting a large nucleus (e.g. uranium) into smaller ones, releasing huge amounts of energy."],
              ["Nuclear fusion","Joining two small nuclei (e.g. hydrogen) together. How stars produce energy."],
              ["Specific heat capacity","The energy needed to raise 1 kg of a substance by 1°C. Water = 4,200 J/kg°C."],
              ["Elastic limit","The point beyond which a stretched object permanently deforms and won't return to its original shape."],
              ["kWh","Kilowatt-hour — the unit of energy used on electricity bills. 1 kWh = 3,600,000 J."],
            ].map(([word,def]) => (
              <tr key={word}><td>{word}</td><td>{def}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

    </NotesLayout>
  )
}
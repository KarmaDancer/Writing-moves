import { useMemo, useState } from "react";
import "./App.css";

const techniqueGroups = {
  "Figurative Language": [
    "metaphor",
    "simile",
    "personification",
    "symbolism",
    "analogy",
    "allusion"
  ],
  "Sound Techniques": [
    "alliteration",
    "assonance",
    "sibilance",
    "onomatopoeia"
  ],
  "Emphasis": [
    "repetition",
    "hyperbole",
    "contrast"
  ],
  "Tone & Meaning": [
    "irony",
    "satire",
    "tone"
  ]
};

const verbs = [
  "suggests",
  "reveals",
  "emphasises",
  "highlights",
  "demonstrates",
  "constructs",
  "examines",
  "explores"
];

const concepts = [
  "power",
  "identity",
  "control",
  "transformation",
  "conflict",
  "isolation",
  "memory",
  "love",
  "freedom"
];

const ingOptions = [
  "highlighting deeper meaning",
  "reinforcing the central idea",
  "intensifying the emotional impact",
  "revealing the significance of the moment",
  "suggesting a deeper implication",
  "foregrounding the power of language"
];

function buildSentence({
  author,
  sentenceStarter,
  technique,
  quote,
  verb,
  effect,
  concept,
  ingClause
}) {
  if (!technique || !verb) return "";

  let sentence = "";

  if (author) {
    sentence += `${sentenceStarter} ${technique}`;
  } else {
    sentence += `The use of ${technique}`;
  }

  if (quote) {
    sentence += ` in "${quote}"`;
  }

  sentence += ` ${verb}`;

  if (effect) {
    sentence += ` ${effect}`;
  }

  if (concept) {
    sentence += `, highlighting ${concept}`;
  }

  if (ingClause) {
    sentence += `, ${ingClause}`;
  }

  if (!sentence.endsWith(".")) sentence += ".";
  return sentence;
}

export default function AnalyticalWritingLab() {
  const [author] = useState("");
  const [technique, setTechnique] = useState("");
  const [sentenceStarter, setSentenceStarter] = useState("");
  const [quote, setQuote] = useState("");
  const [verb, setVerb] = useState("");
  const [effect, setEffect] = useState("");
  const [concept, setConcept] = useState("");
  const [ingClause, setIngClause] = useState("");

  const [analysisSentences, setAnalysisSentences] = useState([]);
  const [opening, setOpening] = useState("");
  const [textLink, setTextLink] = useState("");
  const [wrapUp, setWrapUp] = useState("");

  const sentence = useMemo(() => {
    return buildSentence({
      author,
      sentenceStarter,
      technique,
      quote,
      verb,
      effect,
      concept,
      ingClause
    });
  }, [author, sentenceStarter, technique, quote, verb, effect, concept, ingClause]);

  function addSentence() {
    if (!sentence) return;
    setAnalysisSentences((prev) => [...prev, sentence]);
  }

  const paragraph = [opening, textLink, ...analysisSentences, wrapUp]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="app-shell">
      <header className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">Mind Moves</span>
          <h1>Writing Scaffold</h1>
          <p>Not sure what to write?</p>
        </div>
        
      </header>

      <div className="mindmoves-guide">
        <div className="move">
          <div className="move-step">Mind Move 1</div>
          <div className="move-title">THIS</div>
          <div className="move-label">Technique</div>
        </div>

        <div className="arrow">→</div>

        <div className="move">
          <div className="move-step">Mind Move 2</div>
          <div className="move-title">DOES</div>
          <div className="move-label">Verb</div>
        </div>

        <div className="arrow">→</div>

        <div className="move">
          <div className="move-step">Mind Move 3</div>
          <div className="move-title">THAT</div>
          <div className="move-label">Effect</div>
        </div>

        <div className="arrow">→</div>

        <div className="move">
          <div className="move-step">Mind Move 4</div>
          <div className="move-title">DOING</div>
          <div className="move-label">Extension</div>
        </div>

        <div className="arrow">→</div>

        <div className="move">
          <div className="move-step">Mind Move 5</div>
          <div className="move-title">THAT</div>
          <div className="move-label">Concept</div>
        </div>
      </div>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Step 1</span>
            <h2>MIND MOVES</h2>
          </div>
          <p>Collect your ideas in simple parts before turning them into analysis.</p>
        </div>

        <div className="builder-grid">
          <div className="input-card quote-card">
            <label className="field-label">Text to analyse </label>
            <div className="field-help">What do you notice in the text?</div>
            <textarea
              placeholder="Paste the quote"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="text-area"
            />
          </div>

          <div className="input-card technique-card">
            <label className="field-label">Mind Move 1- THIS</label>
            <div className="field-help">What technique is the author using here?</div>
            <select
              value={technique}
              onChange={(e) => setTechnique(e.target.value)}
              className="field-control"
            >
              <option value="">Select technique</option>
              {Object.entries(techniqueGroups).map(([group, items]) => (
                <optgroup key={group} label={group}>
                  {items.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div className="input-card starter-card">
            <label className="field-label">Sentence starter</label>
            <div className="field-help">Choose a frame to begin your analytical sentence.</div>
            <select
              value={sentenceStarter}
              onChange={(e) => setSentenceStarter(e.target.value)}
              className="field-control"
            >
              <option value="">Select sentence starter</option>
              <option>The author's use of</option>
              <option>The metaphor</option>
              <option>The simile</option>
              <option>The imagery</option>
              <option>The symbol</option>
              <option>The image of</option>
              <option>Through metaphor</option>
              <option>Through imagery</option>
              <option>This technique</option>
            </select>
          </div>

          <div className="input-card effect-card">
            <label className="field-label">Mind Move 3 - THAT (effect)</label>
            <div className="field-help">
              What does this technique do to the writing or the reader?
            </div>
            <input
              placeholder="What does this reveal, emphasise, or suggest?"
              value={effect}
              onChange={(e) => setEffect(e.target.value)}
              className="field-control"
            />
          </div>

          <div className="input-card verb-card">
            <label className="field-label">Mind Move 2 - DOES</label>
            <div className="field-help">Pick a strong verb to explain the writer’s purpose.</div>
            <select
              value={verb}
              onChange={(e) => setVerb(e.target.value)}
              className="field-control"
            >
              <option value="">Analytical verb</option>
              {verbs.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div className="input-card extension-card">
            <label className="field-label">Mind Move 4 - DOING</label>
            <div className="field-help">
              Add a sentence extension that continues the analysis.
            </div>
            <select
              value={ingClause}
              onChange={(e) => setIngClause(e.target.value)}
              className="field-control"
            >
              <option value="">Select an -ing clause</option>
              {ingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="input-card concept-card">
            <label className="field-label">Mind Move 5 - THAT</label>
            <div className="field-help">What bigger idea does this connect to?</div>
            <select
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
              className="field-control"
            >
              <option value="">Select concept</option>
              {concepts.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Step 3</span>
            <h2>Sentence Builder</h2>
          </div>
          <p>Your analytical sentence updates automatically as you build.</p>
        </div>

        <div className="preview-card sentence-preview">
          {sentence || "Your analytical sentence will appear here."}
        </div>

        <button onClick={addSentence} className="primary-button">
          Add sentence to paragraph
        </button>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Step 4</span>
            <h2>Paragraph Builder</h2>
          </div>
          <p>Combine your opening, analysis, and wrap-up into one polished response.</p>
        </div>

        <div className="paragraph-grid">
          <input
            placeholder="Conceptual opening sentence"
            value={opening}
            onChange={(e) => setOpening(e.target.value)}
            className="field-control"
          />

          <input
            placeholder="Link the idea to the text"
            value={textLink}
            onChange={(e) => setTextLink(e.target.value)}
            className="field-control"
          />

          <div className="analysis-list">
            {analysisSentences.length ? (
              analysisSentences.map((s, i) => (
                <div key={i} className="analysis-chip">
                  <span className="chip-number">{i + 1}</span>
                  <span>{s}</span>
                </div>
              ))
            ) : (
              <div className="empty-state">Saved analysis sentences will appear here.</div>
            )}
          </div>

          <input
            placeholder="Paragraph wrap-up"
            value={wrapUp}
            onChange={(e) => setWrapUp(e.target.value)}
            className="field-control"
          />
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Step 5</span>
            <h2>Paragraph Preview</h2>
          </div>
          <p>Read the full paragraph together before refining your final response.</p>
        </div>

        <div className="preview-card paragraph-preview">
          {paragraph || "Your paragraph will appear here."}
        </div>
      </section>
    </div>
  );
}

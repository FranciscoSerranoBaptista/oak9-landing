/**
 * Server-rendered semantic HTML for SEO/GEO.
 *
 * Renders all landing section content as static HTML. Designed to be used
 * inside <noscript> so crawlers and LLMs that don't execute JavaScript
 * see the full content without hidden-text SEO risk.
 *
 * This file has NO "use client" directive — it is a React Server Component.
 */

export interface SectionData {
  sectionType: string;
  config: Record<string, unknown>;
  sortOrder: number;
}

export function ServerSections({ sections, networkName }: { sections: SectionData[]; networkName: string }) {
  return (
    <article aria-label={`${networkName} landing page`}>
      {sections.map((section, i) => (
        <ServerSection key={i} section={section} />
      ))}
    </article>
  );
}

/** Safely extract a string from JSONB config */
function str(config: Record<string, unknown>, key: string): string | null {
  const v = config[key];
  return typeof v === "string" && v.length > 0 ? v : null;
}

/** Safely extract an array from JSONB config */
function arr<T>(config: Record<string, unknown>, key: string): T[] {
  const v = config[key];
  return Array.isArray(v) ? (v as T[]) : [];
}

export function ServerSection({ section }: { section: SectionData }) {
  const c = section.config as Record<string, unknown>;

  switch (section.sectionType) {
    case "hero_statement":
      return (
        <header>
          <h1>{str(c, "headline")}</h1>
          {str(c, "subtitle") && <p>{str(c, "subtitle")}</p>}
          {str(c, "body_text") && <ServerParagraphs text={str(c, "body_text")!} />}
        </header>
      );

    case "pattern_recognition":
      return (
        <section aria-label={str(c, "headline") ?? "Pattern recognition"}>
          {str(c, "section_label") && <p><strong>{str(c, "section_label")}</strong></p>}
          <h2>{str(c, "headline")}</h2>
          {str(c, "body_text") && <ServerParagraphs text={str(c, "body_text")!} />}
          {arr<{ statement: string }>(c, "recognition_items").length > 0 && (
            <ul>
              {arr<{ statement: string }>(c, "recognition_items").map((item, i) => (
                <li key={i}>{item.statement}</li>
              ))}
            </ul>
          )}
          {str(c, "closing_line") && <p><em>{str(c, "closing_line")}</em></p>}
        </section>
      );

    case "sacred_cow_challenge":
      return (
        <section aria-label="Challenge the belief">
          <blockquote>{str(c, "sacred_cow")}</blockquote>
          {str(c, "sour_milk") && <ServerParagraphs text={str(c, "sour_milk")!} />}
          {str(c, "reframe") && <ServerParagraphs text={str(c, "reframe")!} />}
          {str(c, "transition_text") && <p><em>{str(c, "transition_text")}</em></p>}
        </section>
      );

    case "rome_is_burning":
      return (
        <section aria-label={str(c, "headline") ?? "Urgency"}>
          <h2>{str(c, "headline")}</h2>
          {str(c, "body_text") && <ServerParagraphs text={str(c, "body_text")!} />}
          {arr<{ timeframe: string; consequence: string }>(c, "time_markers").length > 0 && (
            <dl>
              {arr<{ timeframe: string; consequence: string }>(c, "time_markers").map((m, i) => (
                <div key={i}><dt><strong>{m.timeframe}</strong></dt><dd>{m.consequence}</dd></div>
              ))}
            </dl>
          )}
          {str(c, "closing_line") && <p><em>{str(c, "closing_line")}</em></p>}
        </section>
      );

    case "programme_overview":
      return (
        <section aria-label={str(c, "headline") ?? "Programme"}>
          {str(c, "section_label") && <p><strong>{str(c, "section_label")}</strong></p>}
          <h2>{str(c, "headline")}</h2>
          {str(c, "subtitle") && <p>{str(c, "subtitle")}</p>}
          {str(c, "body_text") && <ServerParagraphs text={str(c, "body_text")!} />}
          {arr<{ label: string; value: string }>(c, "key_details").length > 0 && (
            <dl>
              {arr<{ label: string; value: string }>(c, "key_details").map((d, i) => (
                <div key={i}><dt>{d.label}</dt><dd>{d.value}</dd></div>
              ))}
            </dl>
          )}
        </section>
      );

    case "programme_arc":
      return (
        <section aria-label={str(c, "headline") ?? "Programme journey"}>
          <h2>{str(c, "headline")}</h2>
          {str(c, "introduction") && <p>{str(c, "introduction")}</p>}
          {arr<{ phase_name: string; phase_description: string }>(c, "phases").length > 0 && (
            <ol>
              {arr<{ phase_name: string; phase_description: string }>(c, "phases").map((p, i) => (
                <li key={i}><h3>{p.phase_name}</h3><p>{p.phase_description}</p></li>
              ))}
            </ol>
          )}
          {str(c, "closing_text") && <p><em>{str(c, "closing_text")}</em></p>}
        </section>
      );

    case "what_youll_experience":
      return (
        <section aria-label="What shifts">
          {arr<{ title: string; description: string }>(c, "experience_items").length > 0 && (
            <dl>
              {arr<{ title: string; description: string }>(c, "experience_items").map((item, i) => (
                <div key={i}><dt><strong>{item.title}</strong></dt><dd>{item.description}</dd></div>
              ))}
            </dl>
          )}
        </section>
      );

    case "what_this_is_isnt":
      return (
        <section aria-label={str(c, "headline") ?? "What this is and isn't"}>
          <h2>{str(c, "headline")}</h2>
          {arr<{ statement: string }>(c, "is_items").length > 0 && (
            <><h3>What this is</h3><ul>{arr<{ statement: string }>(c, "is_items").map((item, i) => <li key={i}>{item.statement}</li>)}</ul></>
          )}
          {arr<{ statement: string }>(c, "is_not_items").length > 0 && (
            <><h3>What this is not</h3><ul>{arr<{ statement: string }>(c, "is_not_items").map((item, i) => <li key={i}>{item.statement}</li>)}</ul></>
          )}
          {str(c, "closing_text") && <p>{str(c, "closing_text")}</p>}
        </section>
      );

    case "testimonials":
      return (
        <section aria-label="Testimonials">
          {arr<{ quote: string; attribution: string; context?: string }>(c, "testimonials").map((t, i) => (
            <blockquote key={i}>
              <p>{t.quote}</p>
              <footer><cite>{t.attribution}</cite>{t.context && <span> — {t.context}</span>}</footer>
            </blockquote>
          ))}
        </section>
      );

    case "case_study":
      return (
        <section aria-label={str(c, "headline") ?? "Case study"}>
          <h2>{str(c, "headline")}</h2>
          {str(c, "before_state") && <ServerParagraphs text={str(c, "before_state")!} />}
          {str(c, "turning_point") && <ServerParagraphs text={str(c, "turning_point")!} />}
          {str(c, "after_state") && <ServerParagraphs text={str(c, "after_state")!} />}
          {str(c, "client_words") && <blockquote>{str(c, "client_words")}</blockquote>}
        </section>
      );

    case "perfect_for_you":
      return (
        <section aria-label={str(c, "headline") ?? "Is this for you?"}>
          <h2>{str(c, "headline")}</h2>
          {arr<{ statement: string }>(c, "for_items").length > 0 && (
            <ul>{arr<{ statement: string }>(c, "for_items").map((item, i) => <li key={i}>{item.statement}</li>)}</ul>
          )}
          {arr<{ statement: string }>(c, "not_for_items").length > 0 && (
            <ul>{arr<{ statement: string }>(c, "not_for_items").map((item, i) => <li key={i}>{item.statement}</li>)}</ul>
          )}
          {str(c, "closing_text") && <p>{str(c, "closing_text")}</p>}
        </section>
      );

    case "coach_bio":
      return (
        <section aria-label="About the coach">
          {str(c, "bio_text") && <ServerParagraphs text={str(c, "bio_text")!} />}
          {arr<{ credential: string }>(c, "credentials").length > 0 && (
            <ul>{arr<{ credential: string }>(c, "credentials").map((cred, i) => <li key={i}>{cred.credential}</li>)}</ul>
          )}
          {str(c, "personal_line") && <p><em>{str(c, "personal_line")}</em></p>}
        </section>
      );

    case "faq":
      return (
        <section aria-label="Frequently Asked Questions">
          {str(c, "introduction") && <p>{str(c, "introduction")}</p>}
          {arr<{ question: string; answer: string }>(c, "faq_items").length > 0 && (
            <dl>
              {arr<{ question: string; answer: string }>(c, "faq_items").map((faq, i) => (
                <div key={i}><dt><strong>{faq.question}</strong></dt><dd>{faq.answer}</dd></div>
              ))}
            </dl>
          )}
        </section>
      );

    case "objection_block":
      return (
        <section aria-label="Addressing concerns">
          <blockquote>{str(c, "objection")}</blockquote>
          {str(c, "response") && <ServerParagraphs text={str(c, "response")!} />}
          {str(c, "reframe") && <p><strong>{str(c, "reframe")}</strong></p>}
        </section>
      );

    case "guarantee":
      return (
        <section aria-label="Guarantee">
          {str(c, "guarantee_text") && <ServerParagraphs text={str(c, "guarantee_text")!} />}
        </section>
      );

    case "investment_pricing":
      return (
        <section aria-label="Pricing">
          {str(c, "introduction") && <ServerParagraphs text={str(c, "introduction")!} />}
          {arr<{ tier_name: string; price: string; currency?: string; tier_description?: string; included_items?: string[] }>(c, "pricing_tiers").map((tier, i) => (
            <article key={i}>
              <h3>{tier.tier_name}</h3>
              <p>{tier.currency ?? "EUR"} {tier.price}</p>
              {tier.tier_description && <p>{tier.tier_description}</p>}
              {tier.included_items && <ul>{tier.included_items.map((item, j) => <li key={j}>{item}</li>)}</ul>}
            </article>
          ))}
        </section>
      );

    case "urgency_closing":
      return (
        <section aria-label="Limited availability">
          {str(c, "headline") && <h2>{str(c, "headline")}</h2>}
          {str(c, "body_text") && <ServerParagraphs text={str(c, "body_text")!} />}
        </section>
      );

    case "pullquote":
      return (
        <figure>
          <blockquote>{str(c, "quote_text")}</blockquote>
          {str(c, "attribution") && <figcaption>— {str(c, "attribution")}</figcaption>}
        </figure>
      );

    case "inline_cta":
      return (
        <section aria-label="Call to action">
          {str(c, "headline") && <h2>{str(c, "headline")}</h2>}
          {str(c, "body_text") && <p>{str(c, "body_text")}</p>}
        </section>
      );

    case "social_proof_bar":
      return (
        <section aria-label="Social proof">
          {arr<{ metric: string; label: string }>(c, "proof_items").length > 0 && (
            <dl>
              {arr<{ metric: string; label: string }>(c, "proof_items").map((item, i) => (
                <div key={i}><dt>{item.metric}</dt><dd>{item.label}</dd></div>
              ))}
            </dl>
          )}
          {str(c, "proof_line") && <p>{str(c, "proof_line")}</p>}
        </section>
      );

    default:
      return null;
  }
}

export function ServerParagraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  );
}

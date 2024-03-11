const LANGUAGES = {
  Spanish: "spa_Latn",
  Russian: "rus_Cyrl",
  English: "eng_Latn",
  "Chinese (Simplified)": "zho_Hans",
  "Chinese (Traditional)": "zho_Hant",
  French: "fra_Latn",
};

export default function LanguageSelector({ type, onChange, defaultLanguage }) {
  return (
    <div className="language-selector">
      <label>{type}: </label>
      <select onChange={onChange} defaultValue={defaultLanguage}>
        {Object.entries(LANGUAGES).map(([key, value]) => {
          return (
            <option key={key} value={value}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
}

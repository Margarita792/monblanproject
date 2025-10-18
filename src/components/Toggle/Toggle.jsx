import style from "./Toggle.module.css";

function Toggle({ value, onChange }) {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrap} aria-label="Change view">
          <button
            type="button"
            className={`${style.btn} ${value === "tiles" ? style.active : ""}`}
            onClick={() => onChange("tiles")}
            aria-pressed={value === "tiles"}
            title="Tiles"
          >
            <svg viewBox="0 0 24 24" className={style.icon} aria-hidden="true">
              <rect x="3" y="3" width="4" height="4" rx="0.8" />
              <rect x="9" y="3" width="4" height="4" rx="0.8" />
              <rect x="15" y="3" width="4" height="4" rx="0.8" />
              <rect x="3" y="9" width="4" height="4" rx="0.8" />
              <rect x="9" y="9" width="4" height="4" rx="0.8" />
              <rect x="15" y="9" width="4" height="4" rx="0.8" />
              <rect x="3" y="15" width="4" height="4" rx="0.8" />
              <rect x="9" y="15" width="4" height="4" rx="0.8" />
              <rect x="15" y="15" width="4" height="4" rx="0.8" />
            </svg>
          </button>

          <button
            type="button"
            className={`${style.btn} ${value === "rows" ? style.active : ""}`}
            onClick={() => onChange("rows")}
            aria-pressed={value === "rows"}
            title="Rows"
          >
            <svg viewBox="0 0 24 24" className={style.icon} aria-hidden="true">
              <rect x="3" y="4" width="4" height="4" rx="0.8" />
              <rect x="9" y="4.5" width="12" height="3" rx="1.5" />
              <rect x="3" y="10" width="4" height="4" rx="0.8" />
              <rect x="9" y="10.5" width="12" height="3" rx="1.5" />
              <rect x="3" y="16" width="4" height="4" rx="0.8" />
              <rect x="9" y="16.5" width="12" height="3" rx="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Toggle;

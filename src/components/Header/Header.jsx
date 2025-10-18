import style from "./Header.module.css";
import logo from "../../assets/logo.svg";
import icon from "../../assets/bx_bx-calendar.svg";
import ReactFlatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useState, useRef } from "react";

function Header() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const commonOptions = {
    dateFormat: "d_m_Y",
    allowInput: true,
    clickOpens: true,
  };
  return (
    <main className={style.mainContainer}>
      <img className={style.imgLogo} src={logo} alt="logo" />
      <section className={style.sectionHeaderDate}>
        <header className={style.header}>
          <h1 className={style.title}>monblanproject</h1>
          <button className={style.badgeStart} type="button">
            Start on 17-02-2016
          </button>
        </header>
        <section className={style.sectionPosts}>
          <p className={style.textPosts}>
            <strong>870</strong> posts
          </p>
          <p className={style.textPosts}>
            <strong>11,787</strong> followers
          </p>
          <p className={style.textPosts}>
            <strong>112112</strong> following
          </p>
        </section>

        <section className={style.sectionForDate}>
          <label className={style.dateLabel}> Date</label>
          <div className={style.dateField}>
            <ReactFlatpickr
              ref={fromRef}
              value={from}
              options={commonOptions}
              onChange={([d]) => setFrom(d || null)}
              className={style.input}
              placeholder="from"
            />
            <button
              className={style.btnIcon}
              aria-label="Open from calendar"
              onClick={() => {
                setFrom(null);
                fromRef.current?.flatpickr?.clear();
              }}
              type="button"
            >
              ✕
            </button>
            <button
              className={style.btnIcon}
              aria-label="Open from calendar"
              onClick={() => fromRef.current?.flatpickr?.open()}
              type="button"
            >
              <img src ={icon} alt="calendar"/>
            </button>
          </div>
          
          <div className={style.dateField}>
            <ReactFlatpickr
              ref={toRef}
              value={to}
              options={commonOptions}
              onChange={([d]) => setTo(d || null)}
              className={style.input}
              placeholder="09_08_2016"
            />
            <button
              className={style.btnIcon}
              aria-label="Open to calendar"
              onClick={() => {
                setTo(null);
                toRef.current?.flatpickr?.clear();
              }}
              type="button"
            >
              ✕
            </button>
            <button
              className={style.btnIcon}
              aria-label="Open to calendar"
              onClick={() => toRef.current?.flatpickr?.open()}
              type="button"
            >
              <img src ={icon} alt="calendar"/>
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Header;

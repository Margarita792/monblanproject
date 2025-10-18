import style from "./Cards.module.css";
import likes from "../../assets/cardsIcons/ci_heart-fill.svg";
import comments from "../../assets/cardsIcons/Vector.svg";
function Cards({ items, view }) {
  if (view === "tiles") {
    return (
      <div className={style.tiles}>
        {items.slice(0,8)
        .map((card) => (
          <article key={card.id} className={style.tile}>
            <div
              className={style.thumb}
              style={{ backgroundImage: `url(${card.img})` }}
            />
            <div className={style.meta}>
              <div className={style.tile}>
                <b className={style.titleTile}>Today</b>
                <div className={style.statTile}>
                  <img className={style.icoTile} src={likes} alt="" />
                  <span className={style.numTile}>128</span>
                </div>
                <div className={style.statTile}>
                  <img className={style.icoTile} src={comments} alt="" />
                  <span className={style.numTile}>31</span>
                </div>
              </div>

              <div className={style.tile}>
                <b className={style.titleTile}>9-08-2016</b>
                <div className={style.statTile}>
                  <img className={style.icoTile} src={likes} alt="" />
                  <span className={style.numTile}>67</span>
                </div>
                <div className={style.statTile}>
                  <img className={style.icoTile} src={comments} alt="" />
                  <span>22</span>
                </div>
              </div>

              <div className={style.footer}>
                <b className={style.titleTilefooter}>Image upload</b>
                <span className={style.numTile}>{card.uploaded}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className={style.rows}>
        {items.map((card) => (
          <article key={card.id} className={style.rowCard}>
            <img className={style.rowImg} src={card.img} alt="" />
            <div className={style.col}>
              <b className={style.heading}>Today</b>
              <div className={style.stats}>
                <img className={style.ico} src={likes} alt="likes" />
                <span className={style.num}>{card.likes}</span>
                <img className={style.ico} src={comments} alt="comments" />
                <span className={style.num}>{card.comments}</span>
              </div>
            </div>

            <div className={style.col}>
              <b className={style.heading}>9-08-2016</b>
              <div className={style.stats}>
                <img className={style.ico} src={likes} alt="likes" />
                <span className={style.num}>{card.likes}</span>
                <img className={style.ico} src={comments} alt="comments" />
                <span className={style.num}>{card.comments}</span>
              </div>
            </div>

            <div className={style.col}>
              <b className={style.heading}>Image upload</b>
              <div className={style.stats}>
              <span className={style.num}>{card.uploaded}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Cards;

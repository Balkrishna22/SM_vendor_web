export default function Card(props) {
  const CARDSIZE = 150;
  const CARDWIDTH = CARDSIZE * 2;
  const CARDBORDERRADIUS = CARDSIZE * 0.1;
  //TITLE
  const CARDTITLEPOS = CARDWIDTH * 0.21;
  //IMG
  const CARDIMGHEIGHT = CARDSIZE * 0.5;
  const CARDIMGWIDTH = CARDWIDTH * 0.9;
  const CARDIMGMARGINTOP = CARDSIZE * 0.02;
  //TEXT
  const CARDTXTHEIGHT = CARDSIZE * 0.4;
  const CARDTXTWIDTH = CARDWIDTH * 0.9;
  const CARDTXTMARGIN = CARDSIZE * 0.05;

  // const getStars = (number) => {
  //   let stars = [];
  //   const limit = number ? number : 4;
  //   for (let i = 0; i < limit; ++i) {
  //     stars.push(<Star />);
  //   }
  //   return stars;
  // };

  return (
    <>
      {/* <div className="col-lg-4 col-md-4 col-sm-12">
            <button className="Card-3d-btn" type="button">
              Vandor Branding
            </button>

            <button className="Card-3d-btn" type="button">
              Personalize Website
            </button>

            <button className="Card-3d-btn" type="button">
              Management Tool
            </button>

            <button className="Card-3d-btn" type="button">
              Reviews
            </button>

            <button className="Card-3d-btn" type="button">
              Free Customer Contacts
            </button>

            <button className="Card-3d-btn" type="button">
              Growth Analyties
            </button>
          </div> */}
      {[1, 2, 3, 4, 5, 6].map((item, key) => {
        <div
          className="col-lg-8 col-md-8 col-sm-12 cardContainer"
          style={{
            height: CARDSIZE,
            width: CARDWIDTH,
            borderRadius: CARDBORDERRADIUS,
          }}
        >
          <div className="titleContainer">
            <div id="title" style={{ right: CARDTITLEPOS }}>
              TITLE
            </div>
          </div>
          <div
            className="cardImgContainer"
            style={{
              height: CARDIMGHEIGHT,
              width: CARDIMGWIDTH,
              borderRadius: CARDBORDERRADIUS,
              marginTop: CARDIMGMARGINTOP,
            }}
          >
            <img
              src="https://picsum.photos/800/200/?random"
              alt="1"
              style={{
                height: CARDIMGHEIGHT,
                width: CARDIMGWIDTH,
                borderRadius: CARDBORDERRADIUS,
              }}
            />
          </div>

          <div
            className="cardTextContainer"
            style={{
              height: CARDTXTHEIGHT,
              width: CARDTXTWIDTH,
              borderRadius: CARDBORDERRADIUS,
              marginTop: CARDTXTMARGIN,
              marginBottom: CARDTXTMARGIN,
            }}
          ></div>
        </div>;
      })}
    </>
  );
}

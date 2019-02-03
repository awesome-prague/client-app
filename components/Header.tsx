import * as React from 'react'

const Header = () => {
  return (
    <div>
      <style jsx global>{`
        @font-face {
          font-family: opensans;
          src: url('../static/OpenSans-Regular.ttf');
        }
        html,
        body {
          margin: 0;
          font-family: opensans;
        }
      `}</style>
      <style jsx>{`
        h1 {
          margin: 0;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
        }

        h1 span {
          margin-left: 8px;
        }

        .searchBox {
          display: flex;
          align-items: center;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
          border-top: 1px solid rgb(0, 0, 0, 0.08);
        }

        .map {
          text-align: center;
          flex-grow: 1.5;
        }

        .map p {
          margin: 0;
          margin-top: -5px;
          color: #ff6cab;
          font-size: 12px;
          font-weight: 600;
          line-height: 22px;
        }

        .searchBox input {
          height: 22px;
          flex-grow: 2;
          border: none;
          outline: none;
          padding: 4px;
          margin: 8px 0px 7px 10px;
          background: rgba(255, 108, 171, 0.23) url('../static/search.svg')
            no-repeat 12px center;
          border-radius: 5px;
          padding-left: 36px;
          font-size: 12px;
          font-weight: 600;
          line-height: 3px;
        }
      `}</style>
      <h1>
        <img src={'../static/logo.svg'} alt="logo" />
        <span>Awesome prague</span>
      </h1>
      <div className="searchBox">
        <input type="text" placeholder="Top picks" />
        <div className="map">
          <img src="../static/globe.svg" alt="globe" />
          <p>Map</p>
        </div>
      </div>
    </div>
  )
}

export default Header

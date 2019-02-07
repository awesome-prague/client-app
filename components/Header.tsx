import * as React from 'react'
import {
  searchBox_BOXSHADOW,
  searchBox_TOPBORDER_COLOR,
  searchBox__input_COLOR,
  map__text_COLOR,
} from '../lib/css-constants'

const Header = () => {
  return (
    <div className="header">
      <style jsx>{`
        .header__headline {
          margin: 0;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
        }

        .header__title {
          margin-left: 8px;
        }

        .searchBox {
          display: flex;
          align-items: center;
          box-shadow: ${searchBox_BOXSHADOW};
          border-top: 1px solid ${searchBox_TOPBORDER_COLOR};
        }

        .searchBox__input {
          height: 22px;
          flex-grow: 2;
          border: none;
          outline: none;
          padding: 4px;
          margin: 8px 0px 7px 10px;
          background: ${searchBox__input_COLOR} url('../static/search.svg')
            no-repeat 12px center;
          border-radius: 5px;
          padding-left: 36px;
          font-size: 12px;
          font-weight: 600;
          line-height: 3px;
        }

        .map {
          text-align: center;
          flex-grow: 1.5;
        }

        .map__text {
          margin: 0;
          margin-top: -5px;
          color: ${map__text_COLOR};
          font-size: 12px;
          font-weight: 600;
          line-height: 22px;
        }
      `}</style>
      <h1 className="header__headline">
        <img src={'../static/logo.svg'} alt="logo" />
        <span className="header__title">Awesome prague</span>
      </h1>
      <div className="searchBox">
        <input
          className="searchBox__input"
          type="text"
          placeholder="Top picks"
        />
        <div className="map">
          <img src="../static/globe.svg" alt="globe" />
          <p className="map__text">Map</p>
        </div>
      </div>
    </div>
  )
}

export default Header

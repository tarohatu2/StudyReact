import { React } from "react";
import PropTypes from "prop-types";
import style from "./AppHeader.module.css";

export const AppHeader = (props) => {
  return (
    <header>
      <div className={style.hwrapper}>
        <div className={style.header}>
          <h1 className={style.title}>{props.title}</h1>
          <nav>
            <ul>
              <li>設定</li>
              <li>ログアウト</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

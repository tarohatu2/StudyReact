import { React } from "react";
import PropTypes from "prop-types";
import style from "./AppHeader.module.css";
import { Link } from "react-router-dom";
import { MdOutlineSettings, MdLogout, MdOutlineFormatListBulleted } from "react-icons/md";
import { IconButton } from '../IconButton'
export const AppHeader = (props) => {
  return (
	<header>
	  <div className={style.hwrapper}>
			<div className={style.header}>
				<div className={style.leftcontainer}>
					<IconButton>
						<MdOutlineFormatListBulleted />
					</IconButton>
					<h1 className={style.title}>
						<Link to='/'>
							{props.title}
						</Link>
					</h1>
				</div>
				<nav>
					<ul>
						<li><Link to='settings' className={style.link}><MdOutlineSettings />設定</Link></li>
						<li><Link to='/login' className={style.link}><MdLogout />ログアウト</Link></li>
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

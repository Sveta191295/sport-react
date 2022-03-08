import "./styles.css";
import { NavLink } from "react-router-dom";

const ForWomen = () => {
    const classnames = ({ isActive }) => isActive ? "women-link-style active" : "women-link-style";
    return (
 
        <div className="women-category-section">
            <div className="women-img-bg"></div>
            <div className="women-text">
                <h2>everything for women </h2>
              <div className="women-link-style">
                  <div className="women-style-link">
                  <NavLink className={classnames} to="/women-clothing">Clothing</NavLink>
                  </div>
                  <div className="women-style-link">
                <NavLink className={classnames} to="/women-shoes">Shoes</NavLink>
                </div>
              </div>
            </div>
          
        </div>

    )
}

export default ForWomen;
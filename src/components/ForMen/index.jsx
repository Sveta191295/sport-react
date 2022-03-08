import "./styles.css";
import { NavLink } from "react-router-dom";

const ForMen = () => {
    const classnames = ({ isActive }) => isActive ? "men-link-style active" : "men-link-style";
    return (
        <div className="men-category-section">
            <div className="men-text">
                <h2>everything for men</h2>
              <div className="men-link-style">
                  <div className="men-style-link">
                  <NavLink className={classnames} to="/men-clothing">Clothing</NavLink>
                  </div>
                  <div className="men-style-link">
                <NavLink className={classnames} to="/men-shoes">Shoes</NavLink>
                </div>
              </div>
            </div>
            <div className="men-img-bg"></div>
        </div>

    )
}

export default ForMen;
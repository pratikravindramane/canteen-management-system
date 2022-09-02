import classes from "./Dashboard.module.css";
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section className={classes.dashboard}>
      <div className={classes["dash-info"]}>
        <h3>Dashboard</h3>
        <hr />
        <div className={classes["d-grid"]}>
          <Link className="btn btn-primary" to="/add-product">
            Add Product
          </Link>
          <Link className="btn btn-primary" to="/product-list">
            Product List
          </Link>
          {/* <Link className="btn btn-primary" to="/add-sales">
            Add Sales
          </Link> */}
          <Link className="btn btn-primary" to="/sales-list">
            Sales List
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;

import { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "./../../components/ProductList/ProductList";
import { connect } from "react-redux";

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ProductListPage extends Component {
  render() {
    // var products = [];
    var { products } = this.props;

    return (
      <div>
        <div className="row my-3 py-2">
          <div className="col-6">
            <button
              type="button"
              className="btn btn-danger btn-sm float-start fw-bold"
              style={{ width: "160px" }}
            >
              <i className="far fa-user-plus"></i> Add product
            </button>
          </div>
          <div className="col-6"></div>
        </div>
        <div className="row my-2 py-2">
          <div className="col-12">
            {/* PRODUCT LIST */}
            <ProductList>
              {/* Take ProductItem */}
              {this.showProductItems(products)}
            </ProductList>
          </div>
        </div>
      </div>
    );
  }
  showProductItems = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            index={index}
            key={index}
            product={product}
          ></ProductItem>
        );
      });
    }
    return result;
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(ProductListPage);

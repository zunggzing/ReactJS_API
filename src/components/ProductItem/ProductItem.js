import { Component } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ProductItem extends Component {
  onHandleDelete = (id) => {
    var { onHandleDelete } = this.props;

    if (window.confirm("Delete the item?")) {
      onHandleDelete(id);
    }
  };
  fetchUpdateStatus = () => {
    var { fetchUpdateStatus } = this.props;
    fetchUpdateStatus();
  };
  render() {
    var { product, index } = this.props;
    console.log(product);
    // console.log(product.status);
    var statusName = product.status === true ? "stocking" : "out of stocking";
    var statusClass =
      product.status === true ? "badge bg-success" : "badge bg-dark";
    // console.log(statusClass);

    return (
      <tr>
        <th>{index + 1}</th>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={statusClass} onClick={this.onSetUpdateStatus}>
            {statusName}
          </span>
        </td>
        <td>
          {" "}
          <Link
            to={`/product/${product.id}/update`}
            className="btn btn-sm btn-outline-danger"
          >
            <i className="far fa-user-edit me-2"></i>Update
          </Link>
          &nbsp;
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={() => this.onHandleDelete(product.id)}
          >
            <i className="far fa-trash me-2"></i>Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductItem({ name }) {
  return (
    <Link to={`/products/${name}`}>
      <button
        type="button"
        className="list-group-item list-group-item-action text-center"
      >
        {name}
      </button>
    </Link>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItem;
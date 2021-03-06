import React from 'react';
import './Succs.scss';
import { addToCart } from '../../ducks/cartReducer';
import { connect } from 'react-redux';

const SuccsList = (props) => {
  return (
    <div className="succs-list-container">
      <div className="item-list">
        <div className="img-container">
          <img
            className="succs-img"
            src={props.image}
            alt="A Succulent in a pot"
          />
        </div>
        <p className="name-p">{props.name}</p>

        <p className="price-p">{props.price}</p>
        <button
          className="cart-button"
          onClick={(e) => {
            props.addToCart(props.succsListing);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { addToCart })(SuccsList);

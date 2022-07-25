import './ShopPopularOptions.css';

import { connect } from 'react-redux';

import { updatePopularModeShop } from '../../actions/shopProducts';
import ShopPopularOptionItem from '../ShopPopularOptionItem/ShopPopularOptionItem';

const ShopPopularOptions = ({ popularOptions, popular, updatePopular }) => {
  return (
    <ul className="shop-popular-options">
      {popularOptions.map(({ name, className }, key) => (
        <ShopPopularOptionItem
          className={className}
          index={key}
          key={key}
          name={name}
          popular={popular}
          updatePopular={updatePopular}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  popular: state.productsShop.popular,
});

const mapDispatchToProps = (dispatch) => ({
  updatePopular: (popular) => dispatch(updatePopularModeShop(popular)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPopularOptions);

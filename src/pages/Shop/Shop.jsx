import './Shop.css';

import Banner from '../../components/Banner/Banner';
import ShopFilter from '../../components/ShopFilter/ShopFilter';
import ShopProducts from '../../components/ShopProducts/ShopProducts';

const Shop = () => {
  window.scroll({ top: 0 });
  return (  
    <div>
      <Banner url={window.location.href} />
      <section className="section-products-shop">
        <ShopFilter />
        <ShopProducts />
      </section>
    </div>
  );
};

export default Shop;
import "./NavBar.css";

import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { NavLink as Link, useHistory } from "react-router-dom";
import { fromEvent } from "rxjs";

import { initCart } from "../../actions/shopCart";
import HoverCart from "../../HoverCart/HoverCart";
import { mobileAndTabletCheck } from "../../util/checkMobileDevice";

const NavBar = ({ cart, initCartDispatch }) => {
  const headerRef = useRef();
  const hoverCartContainerRef = useRef();
  const linkCartShoppingRef = useRef();
  const [isHide, setIsHide] = useState(false);
  const [isShowSideNavBar, setIsShowSideNavBar] = useState(false);
  const isMobileRef = useRef(mobileAndTabletCheck());
  const history = useHistory();
  const menuSymbolContainerRef = useRef();
  useEffect(() => {
    if (cart.length > 0)
      window.localStorage.setItem("shopCart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    initCartDispatch();
    if (window.innerWidth < 646) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
    const subscription2 = fromEvent(
      linkCartShoppingRef.current,
      "mousemove"
    ).subscribe(() => {
      if (hoverCartContainerRef.current)
        hoverCartContainerRef.current.style.display = "flex";
    });
    const subscription3 = fromEvent(
      hoverCartContainerRef.current,
      "mouseleave"
    ).subscribe(() => {
      if (hoverCartContainerRef.current)
        hoverCartContainerRef.current.style.display = "none";
    });
    const subscription = fromEvent(window, "scroll").subscribe(() => {
      if (window.scrollY === 0) {
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.paddingTop = "10px";
      } else {
        headerRef.current.style.backgroundColor = "black";
        headerRef.current.style.paddingTop = "0";
      }
    });
    const subscription4 = fromEvent(window, "resize").subscribe((v) => {
      if (window.innerWidth < 646) {
        setIsHide(true);
      } else {
        setIsHide(false);
      }
    });
    return () => {
      subscription.unsubscribe();
      subscription2.unsubscribe();
      subscription3.unsubscribe();
      subscription4.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header ref={headerRef}>
      <nav className="nav-bar-container">
        <div className="nav-bar-wrapper">
          <div>
            <Link className="nav-bar-logo" to="/">
              <img
                src="https://food-g-app.web.app/static/media/logo.59e734ae.svg"
                alt="G"
              />
            </Link>
          </div>
          {!isHide && (
            <div>
              <Link to="/" activeClassName="active" exact>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
              <Link to="/shop">
                <i className="fas fa-utensils"></i>
                <span>Order online</span>
              </Link>
              <span
                className="link-cart-shopping"
                ref={linkCartShoppingRef}
                onClick={() => {
                  if (isMobileRef.current) history.push("/shop/cart");
                }}
              >
                <i className="fas fa-shopping-cart"></i>
                <span>
                  {cart.reduce((ans, curr) => {
                    ans += curr.amount;
                    return ans;
                  }, 0)}
                </span>
                <HoverCart
                  hoverCartContainerRef={hoverCartContainerRef}
                  isMobile={isMobileRef.current || isHide}
                />
              </span>
              <Link
                style={{
                  zIndex: 30,
                }}
                to="/login"
              >
                Sign In
              </Link>
            </div>
          )}
          {isHide && (
            <div
              ref={menuSymbolContainerRef}
              className={`menu-symbol-container${
                isShowSideNavBar ? " active" : ""
              }`}
              style={{
                right: isShowSideNavBar
                  ? window.innerWidth -
                    (menuSymbolContainerRef.current.offsetLeft +
                      menuSymbolContainerRef.current.offsetWidth)
                  : null,
              }}
              onClick={() => {
                setIsShowSideNavBar(!isShowSideNavBar);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </nav>
      <nav className={`side-nav-bar${isShowSideNavBar ? " active" : ""}`}>
        <div className="side-nav-bar-wrapper">
          <Link
            to="/"
            activeClassName="active"
            exact
            onClick={() => {
              setIsShowSideNavBar(!isShowSideNavBar);
            }}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          <Link
            to="/shop"
            onClick={() => {
              setIsShowSideNavBar(!isShowSideNavBar);
            }}
          >
            <i className="fas fa-utensils"></i>
            <span>Order online</span>
          </Link>
          <span
            className="link-cart-shopping"
            ref={linkCartShoppingRef}
            onClick={() => {
              if (isMobileRef.current || isHide) {
                history.push("/shop/cart");
                setIsShowSideNavBar(!isShowSideNavBar);
              }
            }}
          >
            <i className="fas fa-shopping-cart"></i>
            <div>Cart</div>
            <span>
              {cart.reduce((ans, curr) => {
                ans += curr.amount;
                return ans;
              }, 0)}
            </span>
            <HoverCart
              hoverCartContainerRef={hoverCartContainerRef}
              isMobile={isMobileRef.current || isHide}
            />
          </span>
          <Link
            style={{
              marginLeft: "5rem",
            }}
            to="/login"
            onClick={() => {
              setIsShowSideNavBar(!isShowSideNavBar);
            }}
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cart: state.shopCart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initCartDispatch: () => dispatch(initCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

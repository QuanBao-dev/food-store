import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = ({ url }) => {
  const arrayTreeLinks = useMemo(() => {
    const list = url.replace(window.location.origin, "").split("/");
    list[0] = "home";
    return list;
  }, [url]);
  return (
    <div className="banner-container">
      <h1>{arrayTreeLinks[arrayTreeLinks.length - 1].replace(/-/g," ")}</h1>
      <ul>
        {arrayTreeLinks.map((link, key) => (
          <Link key={key} to={"/" + arrayTreeLinks.slice(1, key + 1).join("/")}>
            <li
              style={{
                color: key === arrayTreeLinks.length - 1 && "red",
              }}
            >
              {link.replace(/-/g," ")}
              <span style={{
                margin: "0 0.5rem"
              }}>{key !== arrayTreeLinks.length - 1 && "\\"}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Banner;

import "./Ingredients.css";
import IngredientCard from "../IngredientCard/IngredientCard";
const ingredientsData = [
  {
    title: "Mild Butter",
    description:
      "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce",
  },
  {
    title: "Slices Beef",
    description: "Get quality Beef Slices at Tesco. Shop in store or online",
  },
  {
    title: "Sleek Onion",
    description:
      "Green onions have a sleek linear shape with white or pale-green bulbs and long green tops",
  },
  {
    title: "Fresh Bread",
    description:
      "Homemade bread is more nutritious than your store-bought variety",
  },
  {
    title: "Lettuce Leaf",
    description:
      "It is most often grown as a leaf vegetable, but sometimes for its stem and seeds",
  },
  {
    title: "Glow Cheese",
    description: "Glowfood. Cheese. Is. Unreal! As a cheese fanatic",
  },
];
const Ingredients = () => {
  return (
    <div className="ingredients-container">
      <div className="ingredients-column-section-container left">
        <div className="ingredients-column-section left">
          {ingredientsData.slice(0, 3).map(({ description, title }, key) => (
            <IngredientCard
              description={description}
              title={title}
              number={"0" + (key + 1)}
              key={key}
            />
          ))}
        </div>
        <div className="ingredients-ribbon">
          <img
            src={`https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.15752-9/233132896_892538464977907_8020413888161357172_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xN3MMNVvO4MAX9hnRhh&_nc_ht=scontent.fsgn8-1.fna&oh=f8d1d1f754c9450af43282893da42da8&oe=61403B18`}
            alt=""
          />
        </div>
      </div>
      <div className="ingredients-column-section-container right">
        <div className="ingredients-ribbon">
          <img
            src={`https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/235810600_989874141575907_3814421460509292061_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=lykdylqesgYAX83t-Zb&_nc_ht=scontent.fsgn3-1.fna&oh=e969ab2c33ec823d4b9eda5643272c18&oe=614197E9`}
            alt=""
          />
        </div>
        <div className="ingredients-column-section right">
          {ingredientsData.slice(3).map(({ description, title }, key) => (
            <IngredientCard
              description={description}
              title={title}
              number={"0" + (key + 4)}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;

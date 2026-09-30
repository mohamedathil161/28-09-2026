import Burger from "../assets/Burger.jpeg";
import Pizza from "../assets/pizza.jpeg";
import Pasta from "../assets/pasta.jpeg";
import FriedRice from "../assets/rice.jpeg";
import Icecream from "../assets/icecream.jpeg";
function RestaurantMenu() {
  return (
    <div className="restaurant">
      <h1>TastyBites</h1>
      <ul>
        <li>
          Burger ₹150
          <img src={Burger}></img>
        </li>
        <li>
          Pizza ₹250
          <img src={Pizza}></img>
        </li>

        <li>
          Pasta ₹200
          <img src={Pasta}></img>
        </li>
        <li>
          FriedRice ₹180
          <img src={FriedRice}></img>
        </li>
        <li>
          Icecream ₹100
          <img src={Icecream}></img>
        </li>
      </ul>
    </div>
  );
}
export default RestaurantMenu;

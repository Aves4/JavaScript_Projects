import "./App.css";

function App() {
  return (
    <div>
      <nav className="container">
        <img src="images/brand_logo.png" alt="logo" className="logo" />
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button>LOGIN</button>
      </nav>
      <div className="hero-section-container container">
        <div>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <button className="shop-now-button">Shop Now</button>
          <button className="category-button">Category</button>
          <p>Also Available on</p>
          <img src="images/shops.png" alt="shops_logo" />
        </div>
        <img src="images/shoe_image.png" alt="shoes_img" />
      </div>
    </div>
  );
}

export default App;

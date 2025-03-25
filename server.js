import express from "express";
import logger from "morgan";

const app = express();

// Middleware
app.use(logger("dev"));

// Set EJS as the view engine
app.set("view engine", "ejs");

//  Defined  RESTAURANT 
const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
};

//  Modify the homepage route to render home.ejs and pass RESTAURANT data
app.get("/", (req, res) => {
  res.render("home", { restaurant: RESTAURANT });
});


// Exercise 3 new route for menu

app.get("/menu", (req, res) => {
    res.render("menu", { restaurant: RESTAURANT });
  });



// category 

app.get('/menu/:category', (req, res) => {
  const { category } = req.params; // Grab the category from the URL



const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1); // Make it look nice (Ui)
  
  // Filter the menu to get only items from this category (e.g., only drinks)
  const menuItems = RESTAURANT.menu.filter(item => item.category.toLowerCase() === category.toLowerCase());
  
  // Send the filtered menu and the capitalized category name to the view
  res.render('category', { menuItems, category: capitalizedCategory,restaurant:RESTAURANT });

});

// Start the server
app.listen(3000, () => {
  console.clear();
  console.log("Running on port 3000");
});


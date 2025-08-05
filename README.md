# 🍽️ Meal Project – React

This is a simple and elegant React-based Meal Ordering App that uses **React Context API** for global state management. The UI is smooth, responsive, and simulates a meal ordering flow with cart functionality.

---

## 🚀 Features

- ✅ Meals are fetched from Firebase Realtime Database (previously static dummy data).
- ✅ Add meals to cart with image, description, and price.
- ✅ Live cart badge updates with selected quantity.
- ✅ Modify quantity using `+` and `–` buttons in the cart modal.
- ✅ Form integrated inside cart modal to place an order:
  - Address
  - City
  - Phone number
  - Pincode
- ✅ On clicking **Order**:
  - Form + cart data is submitted to Firebase.
  - Cart is cleared automatically.
  - A modal is shown with: **"Your order is submitted!"**
- ✅ On clicking **OK** in that modal → user is navigated back to home screen.
- ✅ On clicking **Cancel** → cart modal closes without submitting.
- ✅ Uses **React Context API** + `useReducer` for state management.
- ✅ Clean and modern UI using plain CSS.

---

## 📸 Screenshots

### 🖼️ 1. Meal List Display  
List of meals (with images) displayed with title, description, and price.

![Meal List](/meal_project/src/assets/image1.png)

---

### 🖼️ 2. Add Item with Notification  
On clicking **Add**, the cart badge updates and a notification is shown.

![Add to Cart](/meal_project/src/assets/image2.png)

---

### 🖼️ 3. Cart View with Quantity Controls & Form  
The cart view shows selected meals, image thumbnails, quantity controls, and an order form.

![Cart Popup](/meal_project/src/assets/image3.png)

---

### 🖼️ 4. Order Submitted Modal  
After successful order, this modal appears with confirmation and OK button.

> 🛒 Your order is submitted!
![Submit Popup](/meal_project/src/assets/image4.png)

---
### 🖼️ 5. Cart is Empty Alert  
If cart is empty and user clicks cart button, an alert modal appears:

> 🛒 Please add some item in cart|
![Empty Cart Popup](/meal_project/src/assets/image5.png)

---

## 🔥 Firebase Integration

- 🔽 Meals fetched from:
https://meal-project-db-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json


- 🔼 Orders (form + cart) submitted to:
https://meal-project-db-default-rtdb.asia-southeast1.firebasedatabase.app/orderAdress.json


---

## 🧠 Tech Stack

- **React**
- **Context API**
- **useReducer**
- **useEffect**
- **useRef**
- **Firebase Realtime Database**
- **CSS** (no UI libraries used)

---

## ▶️ Run Locally

```bash
npm install
npm start

---
## 📂 Folder Structure

meal_project/
├── public/
├── src/
│   ├── assets/                        # Static images (used for README and Background cover)
│   ├── components/
│   │   ├── Cart/                      # Cart icon and cart button
│   │   │   └── CartIcon.js
│   │   ├── Layout/                    # Header & HeaderCartButton components
│   │   │   ├── Header.js
│   │   │   ├── HeaderCartButton.js
│   │   │   ├── Header.module.css
│   │   │   └── HeaderCartButton.module.css
│   │   ├── Meals/                     # Meal list, item, and summary
│   │   │   ├── Meals.js
│   │   │   ├── MealsSummary.js
│   │   │   ├── MealsSummary.module.css
│   │   │   ├── AvailableMeals.js
│   │   │   ├── AvailableMeals.module.css
│   │   │   └── MealItem/
│   │   │       ├── MealItem.js
│   │   │       └── MealItem.module.css
│   │   ├── Modal/                     # Cart modal, Order form, and Order confirmation
│   │   │   ├── CartModal.js
│   │   │   ├── OrderSubmittedModel.js
│   │   │   ├── CartModal.module.css
│   │   │   └── OrderModel.module.css
│   │   └── UI/                        # Reusable UI components
│   │       ├── Card.js
│   │       └── Card.module.css
│   ├── context/                       # React Context and Provider for cart
│   │   ├── CartContext.js
│   │   └── CartProvider.js
│   ├── App.js                         # Root component
│   └── index.js                       # Entry point of the React app
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

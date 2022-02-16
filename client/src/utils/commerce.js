// Import the Commerce module
import Commerce from "@chec/commerce.js";

// Create a Commerce instance
const commerce = new Commerce(
  process.env.REACT_APP_COMMERCEJS_SANDBOX_PUBLIC_KEY
);

export default commerce;

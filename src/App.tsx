import { Toaster } from "sonner";
import CartDrawer from "./components/cart/CartDrawer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Toaster position="bottom-left" richColors />
      <AppRoutes />
      <CartDrawer />
    </>
  );
}

export default App;

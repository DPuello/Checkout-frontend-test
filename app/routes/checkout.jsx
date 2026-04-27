import { Layout } from "~/root";
import NavBar from "~/components/navbar";
import { CreditCard, Lock, Package, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { getProducts } from "~/services/products";


export default function Checkout() {

  const [subtotal, setSubtotal] = useState(0);
  const [products, setProducts] = useState([]);
  const IVA = 0.16;

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      console.log(fetchedProducts);
      const calculatedSubtotal = fetchedProducts.reduce((total, product) => total + product.price, 0);
      setSubtotal(calculatedSubtotal);
    }
    fetchProducts();
  }, []);

  const handleCheckout = () => {
    // Aquí iría la lógica para procesar el pago, como enviar los datos a un servidor o integrar con una pasarela de pago.
    alert("Pago realizado");
  }

  return (
    <div>
      <NavBar />
      <main>
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <span>Completa tu checkout de forma segura</span>
        <div className="flex">
          <section className="flex-1 m-4 p-4 rounded-lg border-1 border-gray-300">
            <div className="flex gap-4">
              <CreditCard />
            <h2>Información de pago</h2>
            </div>
            <form className="flex flex-col gap-4 mt-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Número de tarjeta
                </label>
                <div className="relative flex h-10 bg-gray-100 rounded-xl border-1 border-gray-300 pr-6 items-center">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="block w-full h-full rounded-md sm:text-sm pl-6"
                  placeholder="1234 5678 9012 3456"
                  />
                  <CreditCard />
                  </div>
              </div>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Nombre del titular
                </label>
                <div className="relative flex h-10 bg-gray-100 rounded-xl border-1 border-gray-300 pr-6 items-center">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="block w-full h-full rounded-md sm:text-sm pl-6"
                  placeholder="NOMBRE COMO APARECE EN LA TARJETA  "
                  />
                  </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-1">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Vencimiento
                </label>
                <div className="relative flex h-10 bg-gray-100 rounded-xl border-1 border-gray-300 pr-6 items-center">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="block w-full h-full rounded-md sm:text-sm pl-6"
                  placeholder="MM/AA"
                  />
                  </div>
                  </div>
                <div className="flex-1">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <div className="relative flex h-10 bg-gray-100 rounded-xl border-1 border-gray-300 pr-6 items-center">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="block w-full h-full rounded-md sm:text-sm pl-6"
                  placeholder="123"
                  />
                  </div>
                  </div>
              </div>

              <div className="bg-gray-100 rounded-2xl">
                <div className="border-b-1 border-gray-300">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>IVA</p>
                    <p>${(subtotal * 0.16).toFixed(2)}</p>
                  </div>

                </div>
                  <div className="flex justify-between">
                    <p>Total</p>
                    <p>${(subtotal + subtotal * 0.16).toFixed(2)}</p>
                  </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="flex gap-6 justify-center w-full bg-black text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Lock />
                Pagar
              </button>
              <div className="flex gap-4 justify-center">
                <Lock width={16} />
                <span className="text-sm text-gray-400">Pago seguro encriptado</span>
              </div>
            </form>
          </section>
          <section className="flex-1 m-4 p-4 rounded-lg border-1 border-gray-300">
            <div className="flex gap-4">
              <div className="bg-gray-300 rounded-2xl aspect-square w-10 h-10 flex justify-center items-center"><ShoppingCart className="m-auto" /></div>
              <div>
            <h2 className="text-xl font-bold mb-4">Resumen de pedido</h2>
            <span>{3} productos</span>
              </div>
            </div>

{
              products.map((product) => (
            <article className="flex gap-2 justify-between">
              <div className="flex gap-2 items-center">

              <div className="h-10 w-10 bg-gray-200 rounded-lg aspect-square flex justify-center items-center"><Package /></div>
              <div>
                <h3 className="text-md">{product.title}</h3>
                <p className="text-sm text-gray-500">Cantidad: 1</p>
              </div>
              </div>
              <div>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>
            </article>
              ))
}

            <div className="border-t-1 border-gray-300 mt-4 pt-4 flex flex-col gap-2">
              <div className="flex justify-between text-gray-400">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>IVA</p>
                <p>${(subtotal * 0.16).toFixed(2)}</p>
              </div>

              <div className="h-[1px] bg-gray-300 w-full"/>

                <div className="flex justify-between">
                  <p>Total</p>
                  <p>${(subtotal + subtotal * 0.16).toFixed(2)}</p>
                </div>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}

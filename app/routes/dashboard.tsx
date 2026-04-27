import NavBar from "~/components/navbar";
import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Wallet Dashboard" },
  ];
}

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Wallet Dashboard</h1>
        <span>Gestiona tus finanzas y transacciones</span>

        <div>
          <div>
          Balance Total
          </div>
            <span>USD</span>
            <span>180.00</span>
            <div>
              
            </div>
        </div>
      </main>
    </>
  );
}

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
    </>
  );
}

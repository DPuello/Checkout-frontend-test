import { Wallet } from "lucide-react";

const NavBar = () => {
    return (
        <nav className="navbar flex w-full h-16 flex items-center justify-between px-4">
            <ul className="nav-links flex gap-4 w-full">
                <li className="flex gap-4 items-center"><a href="/" className="flex gap-2"><Wallet /> <span>Dashboard</span>   </a></li>
                <li className="flex gap-4 items-center"><a href="/checkout" className="flex gap-2"><Wallet /> <span>Checkout</span>   </a></li>
            </ul>
        </nav>
    );
}   

export default NavBar;
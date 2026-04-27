import NavBar from "./components/navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
}

export default Layout;
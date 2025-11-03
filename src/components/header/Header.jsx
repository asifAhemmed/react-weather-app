import { useState } from "react";
import FavoriteList from "./FavoriteList";
import FavoriteListModal from "./FavoriteListModal";
import Logo from "./Logo";
import Search from "./Search";


const Header = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <header className="fixed w-full top-0 z-50 bg-linear-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <Logo />

                <div className="flex items-center gap-4 relative">
                    <Search />
                    <FavoriteList onShowModal={() => setShowModal(!showModal)} />
                    {
                        showModal && <FavoriteListModal />
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import bannerImg from "../../assets/Images/banner.jpg";

const Header = () => {
    return (
        <div className="bg-[#9538E2] mx-auto container mt-5 rounded-2xl flex flex-col items-center pb-10 p-5">
            <nav className="text-white navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Statistics</a>
                            </li>
                            <li>
                                <a>Dashboard</a>
                            </li>
                        </ul>
                    </div>
                    <a className="text-xl btn btn-ghost">Gadget Heaven</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Statistics</a>
                        </li>
                        <li>
                            <a>Dashboard</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-5 navbar-end">
                    <a className="bg-white rounded-full btn">
                        <FiShoppingCart />
                    </a>
                    <a className="bg-white rounded-full btn">
                        <CiHeart />
                    </a>
                </div>
            </nav>
            <div className="flex flex-col items-center mt-10 text-center text-white">
                <h1 className="text-5xl font-bold text-white w-[900px] mb-7">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="w-[700px] mb-5">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to the coolest
                    accessories, we have it all!
                </p>
                <button className="bg-white text-[#9538E2] px-5 py-3 font-bold rounded-full">
                    Shop Now
                </button>
            </div>
            <div>
                <img
                    className="w-[900px] rounded-2xl mb-[-300px] mt-10 h-[500px]"
                    src={bannerImg}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Header;

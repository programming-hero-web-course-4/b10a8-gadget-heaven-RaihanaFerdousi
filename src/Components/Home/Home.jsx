import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const products = useLoaderData();

    const [activeButton, setActiveButton] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const handleClick = (index, category) => {
        setActiveButton(index);
        setActiveCategory(category);
    };

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((product) => product.category === activeCategory);

    return (
        <div className="mt-[30rem]">
            <h1 className="text-4xl font-semibold text-center mb-14">
                Explore Cutting-Edge Gadgets
            </h1>
            <div className="flex justify-center gap-20 mx-10">
                <div className="flex flex-col items-center gap-4 border h-[480px] rounded-xl p-4">
                    <button
                        onClick={() => handleClick(0, "All")}
                        className={`px-5 py-3 font-semibold w-[160px] 
                            ${
                                activeButton === 0
                                    ? "rounded-full bg-[#9538e2] text-white"
                                    : "rounded-lg bg-transparent text-slate-500"
                            }`}
                    >
                        All Product
                    </button>
                    <button
                        onClick={() => handleClick(1, "Laptop")}
                        className={`px-5 py-3 font-semibold w-[160px] 
                            ${
                                activeButton === 1
                                    ? "rounded-full bg-[#9538e2] text-white"
                                    : "rounded-lg bg-transparent text-slate-500"
                            }`}
                    >
                        Laptops
                    </button>
                    <button
                        onClick={() => handleClick(2, "Phone")}
                        className={`px-5 py-3 font-semibold w-[160px] 
                            ${
                                activeButton === 2
                                    ? "rounded-full bg-[#9538e2] text-white"
                                    : "rounded-lg bg-transparent text-slate-500"
                            }`}
                    >
                        Phones
                    </button>
                    <button
                        onClick={() => handleClick(3, "Accessory")}
                        className={`px-5 py-3 font-semibold w-[160px] 
                            ${
                                activeButton === 3
                                    ? "rounded-full bg-[#9538e2] text-white"
                                    : "rounded-lg bg-transparent text-slate-500"
                            }`}
                    >
                        Accessories
                    </button>
                    <button
                        onClick={() => handleClick(4, "Smartwatch")}
                        className={`px-5 py-3 font-semibold w-[160px] 
                            ${
                                activeButton === 4
                                    ? "rounded-full bg-[#9538e2] text-white"
                                    : "rounded-lg bg-transparent text-slate-500"
                            }`}
                    >
                        Smart Watches
                    </button>
                    <button
                        onClick={() => handleClick(5, "MacBook")}
                        className={`px-5 py-3 font-semibold w-[160px] 
                            ${
                                activeButton === 5
                                    ? "rounded-full bg-[#9538e2] text-white"
                                    : "rounded-lg bg-transparent text-slate-500"
                            }`}
                    >
                        MacBook
                    </button>
                    <button
                        onClick={() => handleClick(6, "Iphone")}
                        className={`px-5 py-3 font-semibold w-[160px] 
                            ${
                                activeButton === 6
                                    ? "rounded-full bg-[#9538e2] text-white"
                                    : "rounded-lg bg-transparent text-slate-500"
                            }`}
                    >
                        iPhone
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            className="w-[300px] rounded-xl p-4"
                            key={product.product_id}
                        >
                            <div>
                                <img
                                    className="w-full h-[240px] rounded-xl mb-4"
                                    src={product.product_image}
                                    alt={product.product_title}
                                />
                            </div>
                            <div>
                                <h2 className="mb-2 text-xl font-bold">
                                    {product.product_title}
                                </h2>
                                <p className="mb-3">Price: {product.price}</p>
                                <button className="px-4 py-3 border-2 rounded-full text-[#9538E2] border-[#9538E2] font-semibold">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

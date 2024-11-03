import { useLoaderData } from "react-router-dom";

const Home = () => {
    const products = useLoaderData();

    
    return (
        <div className="mt-[30rem]">
            <h1 className="text-4xl font-semibold text-center mb-14">
                Explore Cutting-Edge Gadgets
            </h1>
            <div className="flex justify-between mx-10">
                <div className="flex flex-col items-center gap-2">
                    <button className="px-5 py-3 text-slate-200 rounded-full bg-[#9538e2] font-semibold">
                        All Product
                    </button>
                    <button className="px-5 py-3 text-slate-200 rounded-full bg-[#9538e2] font-semibold">
                        All Product
                    </button>
                    <button className="px-5 py-3 text-slate-200 rounded-full bg-[#9538e2] font-semibold">
                        All Product
                    </button>
                    <button className="px-5 py-3 text-slate-200 rounded-full bg-[#9538e2] font-semibold">
                        All Product
                    </button>
                    <button className="px-5 py-3 text-slate-200 rounded-full bg-[#9538e2] font-semibold">
                        All Product
                    </button>
                    <button className="px-5 py-3 text-slate-200 rounded-full bg-[#9538e2] font-semibold">
                        All Product
                    </button>
                    <button className="px-5 py-3 text-slate-200 rounded-full bg-[#9538e2] font-semibold">
                        All Product
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div className="border-4 w-[300px] rounded-xl p-4" key={product.product_id}>
                            <div>
                                <img
                                    className="w-[200px] h-[200px]  rounded-xl"
                                    src={product.product_image}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">
                                    {product.product_title}
                                </h2>
                                <p>Price: {product.price}</p>
                                <button className="px-4 py-2 border-2 rounded-full text-[#9538E2] border-[#9538E2]">
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
import React from "react";
import CardProduct from "./components/CardProduct";

const HomePage = () => {
	return (
		<section className="bg-[#9e9b98] w-full flex justify-between gap-2 min-h-screen">
			<div className=" bg-white w-[15%] rounded-xl px-4 py-6">
				<div className="flex flex-col justify-between gap-4">
					<h3 className="text-base">Katalog</h3>
				</div>
			</div>
			<div className="bg-white w-[60%] rounded-xl px-4 py-6">
				<div className="flex flex-col justify-between gap-4">
					<h3 className="text-base">Chart</h3>
					<div className="grid grid-cols-4 gap-4">
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
					</div>
				</div>
			</div>
			<div className="bg-white w-[25%] rounded-xl px-4 py-6">
				<div className="flex flex-col justify-between gap-4">
					<h3 className="text-base">Chart</h3>
				</div>
			</div>
		</section>
	);
};

export default HomePage;

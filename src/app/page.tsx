import React from "react";

const HomePage = () => {
	return (
		<section className="bg-[#9e9b98] w-full flex justify-between gap-2 min-h-screen paddingXShorter3 paddingYShorter3">
			<div className=" bg-white w-[15%] rounded-xl px-4 py-6">
				<div className="flex flex-col justify-between gap-4">
					<h3 className="text-base">Katalog</h3>
				</div>
			</div>
			<div className="bg-white w-[60%] rounded-xl px-4 py-6">
				<div className="flex flex-col justify-between gap-4">
					<h3 className="text-base">Chart</h3>
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

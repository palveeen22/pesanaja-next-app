"use client";
import React from "react";
import CardProduct from "./components/CardProduct";
import { Icon } from "@iconify/react";
const HomePage = () => {
	return (
		<section className="bg-[#009E60] w-full flex justify-between gap-2 min-h-screen px-6">
			{/* first layer */}
			<div className="w-[15%] flex flex-col gap-4">
				<div className="h-24 bg-white rounded-b-3xl p-6">
					<div className="flex justify-center gap-2 items-center">
						{/* <Icon icon="simple-icons:producthunt" width={40} color="#ff335f" /> */}
						<h3 className="text-[#009E60] font-semibold text-xl">Nyayur</h3>
					</div>
				</div>
				<div className="bg-white rounded-t-3xl min-h-screen">
					<div className="flex flex-col gap-4 justify-start  paddingXShorter3 paddingYShorter2">
						<div className="flex justify-start items-center gap-2 hover:filter hover:brightness-75 cursor-pointer">
							<img
								// src={e?.imageUrl}
								className="h-9 w-9 object-cover rounded-xl"
							/>
							{/* <p className="text-sm text-[#595959]">{e?.name}</p> */}
						</div>
					</div>
				</div>
			</div>
			{/* second layer */}
			<div className="flex flex-col gap-4 w-[60%] pt-20">
				<div className="bg-white rounded-3xl p-8">
					<div className="flex flex-col justify-between gap-4 px-4 py-6">
						<h3 className="text-base">Chart</h3>
						<div className="grid grid-cols-4 gap-4">
							<CardProduct />
							<CardProduct />
							<CardProduct />
							<CardProduct />
						</div>
					</div>
				</div>
			</div>

			{/* third layer */}
			<div className="flex flex-col w-[25%] gap-4">
				<div className="bg-white rounded-full py-2">
					<div
						className="flex justify-center items-center gap-2 p-2 cursor-pointer"
						// onClick={showDrawer}
					>
						<Icon icon="fluent:person-32-filled" width={25} color="#595959" />
						<p className="text-[#595959]">Masuk</p>
					</div>
				</div>
				<div className="bg-white rounded-3xl px-4 py-6">
					<div className="flex flex-col justify-between gap-4">
						<h3 className="text-base">Chart</h3>
						<div className="flex flex-col p-4 items-center min-h-screen justify-center gap-4">
							<img src="https://yastatic.net/s3/lavka-web/public/assets/images/emptyCart@2x.png" />
							<p className="text-[#A6A6A6] text-xl font-semibold text-center">
								Your cart is still empty
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomePage;

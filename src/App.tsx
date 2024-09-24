import "./styles.css";
import LogoIcon from "./assets/stair.svg?react";
import { Search } from "./Pages/search/Search";
import { useQuery } from "@tanstack/react-query";
import { RestaurantType } from "./API/api";
import { CardList } from "./Pages/CardList/CardList";
import { getRestaurants } from "./API/api";
import { useState } from "react";
import { queryClient } from "./API/queryClient";
import { Loading } from "./UI/Loading/Loading";
import { Refetch } from "./Pages/Refetch/Refetch";
import { Notfound } from "./Pages/Notfound/Notfound";
function App() {
	const [search, setSearch] = useState<string>("");

	/**
	 * Запрос на получение данных об ресторанах.
	 */
	const queryRestaurants = useQuery<RestaurantType[]>(
		{
			queryKey: ["restaurant"],
			queryFn: () => getRestaurants(),
		},
		queryClient,
	);

	/**
	 * Действия в разных сценариев.
	 */
	switch (queryRestaurants.status) {
		case "pending":
			return <Loading />;
		case "error":
			return <Refetch />;
	}

	/**
	 * Функция поиск.
	 */
	const filter = queryRestaurants.data?.filter((item) =>
		item.name.toLowerCase().startsWith(search?.toLowerCase()),
	);
	return (
		<>
			<header>
				<div className="logo">
					<LogoIcon width={16} height={16} className="logo__icon" />
					<span>Eats</span>
				</div>
				<div className="profile">
					<img alt="profile" src="/avatar.png" />
				</div>
			</header>
			<main>
				<section className="sections">
					<div className="container">
						<div className="app__content">
							{/* {queryRestaurants.isSuccess && ( */}
							<>
								<Search
									value={search}
									disabled={queryRestaurants.isPending}
									onChange={(e) => setSearch(e.target.value.trim())}
									placeholder={`Поиск...`}
								/>
								{filter?.length > 0 ? <CardList data={filter} /> : <Notfound />}
							</>
							{/* )} */}
						</div>
					</div>
				</section>
			</main>
			<footer>
				<p>Privacy Policy</p>
				<p className="corporation">{new Date().getFullYear()} Eats</p>
				<p>Terms Of Service</p>
			</footer>
		</>
	);
}
export default App;

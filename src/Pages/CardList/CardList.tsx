import "./CardList.css";
import { Card } from "../Card/Card";
import { queryClient } from "../../API/queryClient";
import { updateRestaurantRating, RestaurantType } from "../../API/api";
import { useMutation } from "@tanstack/react-query";

export const CardList: React.FC<{ data: RestaurantType[] }> = ({ data }) => {
	const rateMutate = useMutation(
		{
			mutationFn: (postData: { id: string; raiting: number }) =>
				updateRestaurantRating(postData),
			onSuccess: () =>
				queryClient.invalidateQueries({ queryKey: ["restaurant"] }),
		},
		queryClient,
	);

	/**
	 * Функция для обновление рейтинга
	 */
	const handleClick = (cardRaiting: { id: string; raiting: number }) => {
		rateMutate.mutate(cardRaiting);
	};

	return (
		<>
			<div className="cardList__content">
				<ul className="list">
					{data.map((item) => (
						<li key={item.id} className="list__item">
							<Card
								{...item}
								isLoading={rateMutate.isPending}
								onClick={handleClick}
							/>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

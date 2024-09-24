import { FC } from "react";
import "./Refetch.css";
import { Button } from "../../UI/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { getRestaurants } from "../../API/api";
import { queryClient } from "../../API/queryClient";
import { Loading } from "../../UI/Loading/Loading";

export const Refetch: FC = () => {
	const refetchMutate = useMutation(
		{
			mutationFn: () => getRestaurants(),
			onSuccess: () =>
				queryClient.invalidateQueries({ queryKey: ["restaurant"] }),
		},
		queryClient,
	);
	const handleClick = () => {
		refetchMutate.mutate();
	};
	return (
		<Button
			isLoading={refetchMutate.isPending}
			disabled={refetchMutate.isPending}
			onClick={handleClick}
		>
			Повторить запрос
		</Button>
	);
};

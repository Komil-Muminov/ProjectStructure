// import { useMutation } from "@tanstack/react-query";
// import { queryClient } from "../API/queryClient";
// export const useRaiting = () => {
// 	const raitingg = (updateFunc) => {
// 		const raitingMutate = useMutation({
// 			mutationFn: () => updateFunc(),
// 			onSuccess: () =>
// 				queryClient.invalidateQueries({ queryKey: ["restaurant"] }) &&
// 				console.log(`mutate success`),
// 			onError: () => `raitingMutate's error is : ...`,
// 		});
// 	};
// 	return {
// 		raitingg,
// 	};
// };

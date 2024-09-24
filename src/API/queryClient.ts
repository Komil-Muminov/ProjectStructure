import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 300000, //5мин
			retry: 0,
		},
	},
});

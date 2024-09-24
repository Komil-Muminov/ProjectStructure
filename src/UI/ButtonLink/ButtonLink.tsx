import React from "react";
import "./ButtonLink.css";
import { Loading } from "../Loading/Loading";
export type TProps = {
	isLoading: boolean;
	className?: string;
	href?: string;
	onClick?: (e: React.SyntheticEvent<HTMLAnchorElement>) => void;
	children: React.ReactNode;
};

export const ButtonLink: React.FC<TProps> = ({
	isLoading,
	className,
	href,
	onClick,
	children,
}) => {
	return (
		<a href={href} className={`${className}`} onClick={onClick}>
			{isLoading ? <Loading /> : children}
		</a>
	);
};

import { FC } from "react";
import "./Button.css";
import { Loading } from "../Loading/Loading";

interface TProps {
	isLoading?: boolean;
	children: React.ReactNode;
	kind?: string;
	disabled?: boolean;
	onClick: (e: React.SyntheticEvent<HTMLElement>) => void;
}

export const Button: FC<TProps> = ({
	isLoading,
	children,
	kind,
	disabled,
	onClick,
}) => {
	return (
		<>
			<div className="btn__content">
				<button
					isLoading={isLoading}
					onClick={onClick}
					className={`btn ${kind}`}
					disabled={disabled}
				>
					{isLoading ? <Loading /> : children}
				</button>
			</div>
		</>
	);
};

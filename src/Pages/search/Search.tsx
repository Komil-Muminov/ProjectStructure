import "./Search.css";
interface TProps {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	kind?: "search" | "input" | undefined;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Search = ({
	value,
	placeholder,
	disabled,
	kind,
	onChange,
}: TProps) => {
	return (
		<>
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				className={`input ${kind}`}
			/>
		</>
	);
};

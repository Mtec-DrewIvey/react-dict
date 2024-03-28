import { useState } from "react";

export default function ToggleType({
	leftText,
	rightText,
	onClick,
}: {
	leftText: string;
	rightText: string;
	onClick: (e: any) => void;
}) {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (button: any) => {
		if (
			(button === "dictionary" && !isActive) ||
			(button === "thesaurus" && isActive)
		) {
			setIsActive(!isActive);
		}
	};

	return (
		<>
			<button
				className={`border rounded-l-lg p-2 text-white text-sm transition duration-700 ease-in-out ${
					isActive ? "bg-blue-500" : "bg-gray-500 opacity-60"
				}`}
				onClick={() => handleClick("dictionary")}
			>
				{leftText}
			</button>
			<button
				className={`border rounded-r-lg p-2 text-white text-sm transition duration-700 ease-in-out ${
					isActive ? "bg-gray-500 opacity-60" : "bg-blue-500"
				}`}
				onClick={() => handleClick("thesaurus")}
			>
				{rightText}
			</button>
		</>
	);
}
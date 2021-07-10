import styled from "styled-components";
import { useState } from "react";

import { DebounceInput as DbInput } from "react-debounce-input";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";

import Suggestions from "./Suggestions";

export default function DebounceInput() {
	const [searchName, setSearchName] = useState(null);
	const [showingSuggestions, setShowingSuggestions] = useState(false);

	return (
		<DebounceInputContainer showing={showingSuggestions}>
			<DbInput
				placeholder="Quem você deseja encontrar?"
				minLength={3}
				debounceTimeout={500}
				onChange={(e) => setSearchName(e.target.value)}
				value={searchName}
				onBlur={() => {
					setTimeout(() => setShowingSuggestions(false), 150);
				}}
				onFocus={() => {
					setShowingSuggestions(true);
				}}
			/>
			<SearchIcon className="icon" />
			{showingSuggestions && <Suggestions searchName={searchName} />}
		</DebounceInputContainer>
	);
}

const DebounceInputContainer = styled.div`
	width: 35%;
	min-width: 220px;
	margin: 20px 0;
	position: relative;

	input {
		width: 100%;
		height: 30px;
		outline: none;
		border: 2px solid ${(props) => props?.theme?.colors?.second_color};
		padding-left: 10px;
		border-radius: 20px;

		::placeholder {
			color: gray;
		}
	}

	.icon {
		position: absolute;
		color: ${(props) => props?.theme?.colors?.second_color};
		right: 5px;
		top: 6px;
	}
`;

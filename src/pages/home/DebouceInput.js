import styled from "styled-components";
import { DebounceInput as DbInput } from "react-debounce-input";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";

export default function DebounceInput({ setValue }) {
	return (
		<DebounceInputContainer>
			<DbInput
				placeholder="Quem você deseja encontrar?"
				minLength={3}
				debounceTimeout={500}
				onChange={(e) => setValue(e.target.value)}
			/>
			<SearchIcon className="icon" />
		</DebounceInputContainer>
	);
}

const DebounceInputContainer = styled.div`
	width: 35%;
	min-width: 220px;
	margin-top: 15px;
	position: relative;
	input {
		width: 100%;
		height: 30px;
		outline: none;
		border: 2px solid rgba(0, 0, 150, 1);
		padding-left: 10px;
		border-radius: 20px;

		::placeholder {
			color: rgba(160, 160, 255, 1);
		}
	}

	.icon {
		position: absolute;
		color: rgba(0, 0, 150, 1);
		right: 5px;
		top: 6px;
	}
`;

import styled from "styled-components";

export default function MobileButton({ sideMenuClosed, setSideMenuClosed }) {
    return (
        <ButtonContainer sideMenuClosed={sideMenuClosed} onClick={() => setSideMenuClosed(!sideMenuClosed)} className={sideMenuClosed ? "is-closed" : "is-open"}>
            <div className="burger-icon">
                <div className="burger-container">
                    <span className="burger-bun-top"></span>
                    <span className="burger-filling"></span>
                    <span className="burger-bun-bot"></span>
                </div>
            </div>

            <svg width="0" height="0">
                <mask id="mask">
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#ff0000"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
                    />
                </mask>
            </svg>
            <div className="path-burger">
                <div className="animate-path">
                    <div className="path-rotation"></div>
                </div>
            </div>
        </ButtonContainer>
    );
}

const ButtonContainer = styled.div`
	--color: ${(props) => props.sideMenuClosed ? "black" : "white"};
	--blue: transparent; // background color
	--animation: 0.6s; // animation speed
	--scale: 1; // icon scale 68/68 default

	transform: scale(var(--scale));
	display: block;
	padding-top: 20px;
	width: 68px;
	height: 68px;
	background: var(--blue);
	user-select: none;
	cursor: pointer;

    position: fixed;
	z-index: 3;
    right: 0;
    top: 10px;

	.path-burger {
		position: absolute;
		top: 0;
		left: 0;
		height: 68px;
		width: 68px;
		mask: url(#mask);
	}

	.animate-path {
		position: absolute;
		top: 0;
		left: 0;
		width: 68px;
		height: 68px;
	}

	.path-rotation {
		height: 34px;
		width: 34px;
		margin: 34px 34px 0 0;
		transform: rotate(0deg);
		transform-origin: 100% 0;
		&:before {
			content: "";
			display: block;
			width: 30px;
			height: 34px;
			margin: 0 4px 0 0;
			background: var(--color);
		}
	}

	&.is-open {
		.path {
			animation: dash-in var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
		.animate-path {
			animation: rotate-in var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
	}

	&.is-closed {
		.path {
			animation: dash-out var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
		.animate-path {
			animation: rotate-out var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
	}

	.path {
		stroke-dasharray: 240;
		stroke-dashoffset: 240;
		stroke-linejoin: round;
	}

	.burger-icon {
		position: absolute;
		padding: 0 16px;
		height: 68px;
		width: 68px;
	}

	.burger-container {
		position: relative;
		height: 28px;
		width: 36px;
	}

	.burger-bun-top,
	.burger-bun-bot,
	.burger-filling {
		position: absolute;
		display: block;
		height: 4px;
		width: 36px;
		border-radius: 2px;
		background: var(--color);
	}

	.burger-bun-top {
		top: 0;
		transform-origin: 34px 2px;
	}

	.burger-bun-bot {
		bottom: 0;
		transform-origin: 34px 2px;
	}

	.burger-filling {
		top: 12px;
	}

	&.is-open {
		.burger-bun-top {
			animation: bun-top-out var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
		.burger-bun-bot {
			animation: bun-bot-out var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
	}
	&.is-closed {
		.burger-bun-top {
			animation: bun-top-in var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
		.burger-bun-bot {
			animation: bun-bot-in var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
	}

	&.is-open {
		.burger-filling {
			animation: burger-fill-out var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
	}

	&.is-closed {
		.burger-filling {
			animation: burger-fill-in var(--animation) linear normal;
			animation-fill-mode: forwards;
		}
	}
`;

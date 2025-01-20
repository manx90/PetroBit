import Header from "../src/components/header.jsx";
import TokenInfo from "../src/components/TokenInfo.jsx";
import TokenAllocation from "../src/components/TokenAllocation.jsx";
import Style from "./token.module.css";
export default function token() {
	return (
		<div className={Style.Token}>
			<Header />
			<TokenInfo />
			<TokenAllocation />
		</div>
	);
}

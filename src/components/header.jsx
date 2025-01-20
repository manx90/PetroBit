import Style from "./header.module.css";
export default function Header() {
	return (
		<div className={Style.header}>
			<div className={Style.headerLeft}>
				<a href="#">Home</a>
				<a href="#">Token</a>
			</div>

			<img src="logo.svg" alt="" />
			<div className={Style.headerRight}>
				<a href="#">Contact</a>
				<a href="#">About</a>
			</div>
		</div>
	);
}

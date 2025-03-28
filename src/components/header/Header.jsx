import { useState } from "react";
import "./Header.css";
import MobileMenu from "./MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faXmark,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Header() {
	const [visiable, setVisiable] = useState(false);

	const handleOnchangeMedia = (matches) => {
		if (!matches) {
			setVisiable(matches);
		}
	};

	const handleVisiable = () => {
		setVisiable(!visiable);
	};

	const isSmallerHeader = useMediaQuery(
		{ maxWidth: 996 },
		undefined,
		handleOnchangeMedia
	);

	return (
		<header>
			<nav className='shadow-sm nav-header'>
				<div className='header_container' style={{ height: 82.4 }}>
					<div className='main-area d-flex justify-content-between'>
						<div className='bar align-content-center'>
							<button className='p-3' onClick={handleVisiable}>
								{visiable ? (
									<FontAwesomeIcon icon={faXmark} />
								) : (
									<FontAwesomeIcon icon={faBars} />
								)}
							</button>
						</div>
						<div className='logo align-content-center'>
							<Link to='/'>
								<img
									src='/logo/logo.png'
									alt='MSI  Logo'
									width='98.8'
									height='65'
								/>
							</Link>
						</div>
						<div className='main-area-menu'>
							<div className='nav-item'>
								<Link to='products'>Sản phẩm</Link>
							</div>
							<div className='nav-item'>
								<Link to='introduction'>Giới thiệu</Link>
							</div>
							<div className='nav-item'>
								<Link to='community'>Cộng đồng</Link>
							</div>
							<div className='nav-item'>
								<Link to='questions'>Hỏi/đáp</Link>
							</div>
							<div className='nav-item'>
								<Link to='contact'>Liên hệ</Link>
							</div>
						</div>

						<div className='menu-area-icon d-flex align-items-center'>
							<div className='operation-icon px-3'>
								<button>
									<FontAwesomeIcon icon={faUser} />
								</button>
							</div>
							<div className='operation-icon px-3'>
								<button>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<MobileMenu isVisiable={visiable && isSmallerHeader} />
		</header>
	);
}

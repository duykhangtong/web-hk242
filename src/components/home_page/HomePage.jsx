import style from "./HomePage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";


function SlideImage({ srcBg, srcLap, srcTitle }) {
	return (
		<a className={style.slideImage} href='' target='_blank'>
			<img src={srcBg} alt='bg' />
			<div className={style.backgroundSlide}>
				<img className={style.backgroundSlideLap} src={srcLap} alt='laptop' />

				<img
					className={style.backgroundSlideTitle}
					src={srcTitle}
					alt='title'
				/>
			</div>
		</a>
	);
}

function NewestLap() {
	const length = 8;
	return (
		<Row xs={2} xl={4} className='g-4'>
			{Array.from({ length }).map((_, idx) => (
				<Col key={idx}>
					<Card as='a' href='#'>
						<Card.Img
							variant='top'
							src='https://asset.msi.com/resize/image/global/product/product_17345998209a86bc20e6503c87ea365905b546f025.png62405b38c58fe0f07fcef2367d8a9ba1/400'
						/>
						<Card.Body style={{ minHeight: 100 }}>
							<Card.Title className='text-center'>Card title</Card.Title>
							<Card.Text
								style={{
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
								}}
							>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}



export default function HomePage() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	const list_slide = [
		{
			srcBg: "/images/kv-lg.jpg",
			srcLap: "/images/kv-Crosshair-15-B12U.png",
			srcTitle: "/images/kv-Crosshair-15.png",
		},
		{
			srcBg: "/images/kv-bg-xs.jpg",
			srcLap: "/images/kv-pd.png",
			srcTitle: "/images/kv-name.png",
		},
		{
			srcBg: "/images/kv-top-bg.jpg",
			srcLap: "/images/kv-nb.png",
			srcTitle: "/images/kv-titan-18-hx-name.png",
		},
	];
	return (
		<div className={style.homePage}>
			<div className={style.hpSection1}>
				<Slider {...settings}>
					{list_slide.map((slide, index) => (
						<SlideImage key={index} {...slide} />
					))}
				</Slider>
			</div>
			<div className={style.hpSection2}>
				<div className={`${style.titleSection2} `}>
					<h1 className='text-center fw-bold'>Những Mẫu Laptop Mới Nhất</h1>
				</div>
				<div className={style.contentSection2}>
					<NewestLap/>
				</div>
			</div>
		</div>
	);
}

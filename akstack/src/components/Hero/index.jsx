import parse from 'html-react-parser';
import './hero.scss';
import Button from '../Button';
import Div from '../Div';
import { TypeAnimation } from "react-type-animation";

export default function Hero({
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  bgImageUrl,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
        <div className="displayText">
            <div className="text-main">We Deliver</div>
            <TypeAnimation
              sequence={[
                "Software Solutions.",
                2000,
                "Digital Briliance.",
                2000,
              ]}
              repeat={Infinity}
              className="heroTextMove"
            />
          </div>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}

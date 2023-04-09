import { Slider } from "antd";
import "./index.css";

const marks = {
  1: "1",
  50: "50",
  100: "100",
  150: "150",
  200: "200",
  250: "250",
  300: "300+",
};

export default function MySlider(props) {
  const { setUerNum } = props;

  return (
    <div className="slider-info">
      <div className="slider-title">
        How many monthly active users in your company?
      </div>
      <Slider
        className="slider"
        min={1}
        max={300}
        marks={marks}
        onChange={(value) => {
          setUerNum(value);
        }}
      />
    </div>
  );
}

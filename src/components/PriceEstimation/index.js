import { useState } from "react";
import { Row, Col } from "antd";
import MySlider from "./MySlider";
import PriceBoard from "./PriceBoard";
import Cards from "./Cards";
import "./index.css";

export default function PriceEstimation() {
  const [userNum, setUerNum] = useState(1);
  const [pricePerUser, setPricePerUser] = useState(0);

  return (
    <div className="outer">
      <Row>
        <Col span={16}>
          <MySlider setUerNum={setUerNum} />
        </Col>
        <Col span={8}>
          <PriceBoard userNum={userNum} pricePerUser={pricePerUser} />
        </Col>
      </Row>

      <Cards pricePerUser={pricePerUser} setPricePerUser={setPricePerUser} />
    </div>
  );
}

import "./index.css";

export default function PriceBoard(props) {
  const { userNum, pricePerUser } = props;

  return (
    <div>
      {userNum < 300 ? (
        <div className="price-info">
          <p className="price-title">Pay-as-you-go</p>
          <p className="price-tip">No credit card required</p>
          <div className="price-sum">
            <span className="dollar-sign">$</span>
            {pricePerUser === 0 ? (
              <span className="price">free</span>
            ) : (
              <span className="price">{pricePerUser * userNum}</span>
            )}
            <span className="price-unit">per month</span>
          </div>
          <button className="price-button">Start Building for Free</button>
        </div>
      ) : (
        <div className="price-info">
          <p className="price-title">Workflos Enterprise</p>
          <p className="price-tip">Invoice based billing</p>
          <div className="price-sum">
            <p className="price-discount">Volume discounts available</p>
          </div>
          <button className="price-button">Contact Sales</button>
        </div>
      )}
    </div>
  );
}

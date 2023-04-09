import { useState } from "react";
import { Card, Row, Col, Dropdown, Switch, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css";

export default function Cards(props) {
  const { pricePerUser, setPricePerUser } = props;
  const [dropNum, setDropNum] = useState(0);

  const getPricePerUser = (fee, check) => {
    if (check) return setPricePerUser(pricePerUser + fee);
    else {
      return setPricePerUser(pricePerUser - fee);
    }
  };

  const handleMenuClick = (e) => {
    setDropNum(e.key);
  };
  const items = [
    {
      label: "100 tasks / month",
      key: 0,
      icon: <UserOutlined />,
    },
    {
      label: "200 tasks / month",
      key: 1,
      icon: <UserOutlined />,
    },
    {
      label: "300 tasks / month",
      key: 2,
      icon: <UserOutlined />,
    },
    {
      label: "400 tasks / month",
      key: 3,
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div>
      <Row>
        <Col span={6}>
          <Card className="card">
            <div className="card-title">
              <span className="card-title-content">Auth</span>
              <Switch checked={true} disabled={true} className="card-switch" />
            </div>
            <div className="card-content">
              <p>- Pre-integrated with 1,000+ applications</p>
              <p>- Autentication & Authonzation supported</p>
              <p>- SSO & user directory & logs supported</p>
              <p>- Allmaioridentiw orovicers supdorted</p>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card className="card">
            <div className="card-title">
              <span className="card-title-content">Automation</span>
            </div>
            <Dropdown menu={menuProps} className="auto-dropdown">
              <Button className="auto-dropdown-button">
                <span>{items[dropNum].label}</span>
                <span>
                  <DownOutlined />
                </span>
              </Button>
            </Dropdown>
            <p>- No-code workflow builder</p>
            <p>- Event driven application</p>
          </Card>
        </Col>

        <Col span={6}>
          <Card className="card">
            <div className="card-title">
              <span className="card-title-content">MFA</span>
              <Switch
                className="card-switch"
                onChange={(checked) => {
                  getPricePerUser(3, checked);
                }}
              />
            </div>
            <div className="card-content">
              <p>- Supports time-based one-time codes</p>
              <p>- Use SMS codes or authenticator apps </p>
              <p>- WorKs wich any session strategy</p>
              <p>- Contextual access management</p>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card className="card">
            <div className="card-title">
              <span className="card-title-content">Customizations</span>
              <Switch
                className="card-switch"
                onChange={(checked) => {
                  getPricePerUser(1, checked);
                }}
              />
            </div>
            <div className="card-content">
              <p>- Custom domain and branding </p>
              <p>- Customizable login experience</p>
              <p>- Customizable email templates</p>
              <p>- Use your existing email orovider</p>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <Card className="card">
            <div className="card-title">
              <span className="card-title-content">Analytics</span>
              <Switch
                className="card-switch"
                onChange={(checked) => {
                  getPricePerUser(2, checked);
                }}
              />
            </div>
            <div className="card-content">
              <p>- Intelligence SaaS discovery</p>
              <p>- Vender source of truth </p>
              <p>- Granular Spend Reporting</p>
              <p>- Self-service access requests</p>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card className="card">
            <div className="card-title">
              <span className="card-title-content">Audit</span>
              <Switch
                className="card-switch"
                onChange={(checked) => {
                  getPricePerUser(4, checked);
                }}
              />
            </div>
            <div className="card-content">
              <p>- Policy based security controls</p>
              <p>- End-to-End risk management</p>
              <p>- Continuous control monitoring</p>
              <p>- Generale auditor-frendiy reports</p>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card className="card">
            <div className="card-title">
              <span className="card-title-content">Support</span>
              <Switch
                className="card-switch"
                onChange={(checked) => {
                  getPricePerUser(3, checked);
                }}
              />
            </div>
            <div className="card-content">
              <p>- Dedicated support via Slack + email</p>
              <p>- Guaranteed support response SLA</p>
              <p>- Contractual uptime guarantee</p>
              <p>- Stream log events to third-parties</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

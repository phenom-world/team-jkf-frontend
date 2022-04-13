var style = {
  backgroundColor: "black",
  color: "#fff",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "absolute",
  left: 0,
  right: 0,
  bottom: -80,
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Footer() {
  return (
    <div>
      <div style={style}>
        <p className="m-0  small">
          Copyright © {new Date().getFullYear()} TeamJKF all rights reserved.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import MyLocationTwoToneIcon from "@material-ui/icons/MyLocationTwoTone";
import Alert from "@material-ui/lab/Alert";
import CustomizedDialogs from "./dialogmap";

import InputAdornment from "@material-ui/core/InputAdornment";
import BackgroundImage from "./pics/backgroundfoodpic.jpg";
import Logo from "./pics/logo.png";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: "",
      message: false,
      cardshow: false,
      model: false,
      hover: false,
      longitude: "",
      latitude: "",
    };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  handleOnChange = (e) => {
    this.setState({ message: false });
    this.setState({ [e.target.name]: e.target.value });
  };

  // Delivery = () => {
  //   let adress = this.state.adress;
  //   if (adress === "") {
  //     this.setState({ message: true });
  //   } else (this.props.history.push("delivery/" + adress));
  // };

  handlePickup = () => {
    let adress = this.state.adress;
    if (adress === "") {
      this.setState({ message: true });
    } else this.props.history.push("pickup/" + adress);
  };

  handleModel = () => {
    this.setState({ model: true });
  };

  locationFinder = () => {
    var option = {
      timeout: 5000,
      maximumAge: 0,
      enableHighgAccuracy: true,
    };

    const success = (pos) => {
      var crd = pos.coords;

      console.log("your current position is");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude : ${crd.longitude}`);

      this.setState({latitude : `${crd.latitude}`});
      this.setState({longitude : `${crd.longitude}`});
      console.log(this.state.latitude);
      console.log(this.state.longitude);

    };

    const error = (err) => {
      console.warn(`error (${err.code}) : ${err.message}`);
    };

    navigator. geolocation.getCurrentPosition(success , error , option)
  };

  changeBackground1 = (e) => {
    e.target.style.background = "red";
  };

  changeBackground2 = (e) => {
    e.target.style.background = "white";
  };

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { color: "#ed1212", cursor: "pointer" };
    } else {
      linkStyle = { color: "#000" };
    }
    return (
      <div>
        <div
          style={{
            width: 800,
            backgroundColor: "#fff",
            margin: 5,
            padding: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src={Logo}
            alt=""
            style={{
              marginLeft: 10,
              marginTop: 15,
              zIndex: 1,
              position: "absolute",
              height: 30,
              width: 30,
            }}
          />
          <h3
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontFamily: "sans-serif , sans, arial",
              color: "#f50057",
            }}
          >
            foodpanda
          </h3>
          <h3
            style={{
              marginTop: 25,
              marginLeft: 950,
              fontSize: 15,
              fontFamily: "sans-serif , sans, arial",
              color: "grey",
              float: "right",
            }}
          >
            |
          </h3>
          <h3
            style={{
              marginTop: 25,
              marginLeft: 10,
              fontSize: 15,
              fontFamily: "sans-serif , sans, arial",
              color: "##333",
            }}
          >
            EN
          </h3>
          <h3
            style={{
              marginTop: 25,
              marginLeft: 10,
              fontSize: 15,
              fontFamily: "sans-serif , sans, arial",
              color: "grey",
            }}
          >
            |
          </h3>

          <AccountCircleIcon
            style={{
              color: "#f50057",
              height: 25,
              marginLeft: 10,
              width: 25,
              marginTop: 20,
              align: "right",
            }}
          />
          <h3
            style={{
              marginTop: 25,
              marginLeft: 10,
              fontSize: 15,
              fontFamily: "sans-serif , sans, arial",
              color: "##333",
            }}
          >
            LOGIN
          </h3>
          <h3
            style={{
              marginTop: 25,
              marginLeft: 10,
              fontSize: 15,
              fontFamily: "sans-serif , sans, arial",
              color: "grey",
            }}
          >
            |
          </h3>
          <ShoppingBasketOutlinedIcon
            style={{
              color: "#f50057",
              marginLeft: 20,
              height: 25,
              width: 25,
              marginTop: 20,
              align: "right",
            }}
          />
        </div>

        <h1
          style={{
            marginTop: 100,
            marginLeft: 80,
            fontSize: 50,
            fontStyle: "sans-serif",
          }}
        >
          It's the food you love, delivered
        </h1>
        <div
          style={{
            backgroundImage:
              "url(" + require("./pics/backgroundfoodpic.jpg") + ")",
            zIndex: -1,
            position: "absolute",
            marginLeft: "68%",
            display: "block",
            height: "100%",
            width: "33%",
            float: "right",
            backgroundSize: "cover",
            maxHeight: 500,
            marginTop: -200,
          }}
        ></div>
        <div
          style={{
            width: 900,
            backgroundColor: "#fff",
            marginLeft: 80,
            marginTop: 80,
            padding: 20,
            boxShadow: "2px 2px 2px 2px #9E9E9E",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Enter your full adress"
            variant="outlined"
            style={{ width: 600 }}
            value={this.state.adress}
            name="adress"
            onChange={this.handleOnChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MyLocationTwoToneIcon
                    style={linkStyle}
                    onClick={this.locationFinder}
                    onMouseEnter={this.toggleHover}
                    onMouseOut={this.toggleHover}
                  />
                </InputAdornment>
              ),
            }}
          />

          <CustomizedDialogs adress={this.state.adress} />

          {/* <SimpleModal adress = {this.state.adress} message = {this.state.message}/> */}
          <h3 style={{ marginLeft: 15, fontFamily: "sans-serif" }}>or</h3>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 15, width: 100, height: 54 }}
            onClick={this.handlePickup}
          >
            PICKUP
          </Button>
        </div>

        {this.state.message ? (
          <div
            style={{
              marginLeft: 50,
              backgroundColor: "#FA7751",
              textAlign: "left",
            }}
          >
            <div></div>
            Please enter your adress!
          </div>
        ) : null}
      </div>
    );
  }
}
export default Index;

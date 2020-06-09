import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import BackgroundImage from "./pics/backgroundfoodpic.jpg";
import Logo from "./pics/logo.png";

class Index extends React.Component {
  render() {
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
            alt = ""
            style={{
              marginLeft: 5,
              marginTop: 10,
              zIndex: 1,
              position: "absolute",
              height: 40,
              width: 40,
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
            foodhippo
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
        <div>
          <img
            src={BackgroundImage}
            alt = ""
            style={{
              marginLeft: 850,
              marginTop: -220,
              zIndex: -1,
              position: "absolute",
              height: 600,
              width: 1000,
            }}
          />
        </div>
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
          />
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 25, width: 100, height: 54 }}
          >
            DELIVERY
          </Button>
          <h3 style={{ marginLeft: 15, fontFamily: "sans-serif" }}>or</h3>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 15, width: 100, height: 54 }}
          >
            PICKUP
          </Button>
        </div>
      </div>
    );
  }
}
export default Index;

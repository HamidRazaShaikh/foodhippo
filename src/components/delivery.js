import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import Logo from "./pics/logo.png";
import Offbg from "./pics/offerBg.jpg";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Delivery extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "solid",
            borderWidth: 0.2,
            borderColor: "#0001",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
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
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              border: "solid",
              borderWidth: 0.2,
              borderColor: "#0001",
            }}
          >
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  DELIVERING TO : {this.props.match.params.adress}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{
                marginTop: 25,
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
        </div>
        <div
          style={{
            zIndex : -1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundImage : 'url(' + require ("./pics/offerBg.jpg")+ ')' ,
            backgroundRepeat : 'no-repeat',
            backgroundPosition : 'center' ,  
            backgroundSize : "100%",        
            border: "solid",
            borderWidth: 1,
            borderColor: "#0001",
            marginTop: 30,
            marginLeft: 80,
            marginRight: 80,
            height: 180,
          }}
        >
          {/* <img style = {{width : "100%", zIndex : -1}}  src = {Offbg} alt = "" /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              height: 150,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                height: 30,
                color: "white",
              }}
            >
              <h4 style={{ fontSize: 20, marginLeft : 30 }}>Enjoy foodmania deals all month!</h4>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                height: 20,
                color: "white",
              }}
            >
              <h4 style={{ fontSize: 15 }}>
                Get up to 70% off 6000+ restaurants with free delivery!
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;

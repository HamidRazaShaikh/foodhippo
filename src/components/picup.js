import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import Logo from "./pics/logo.png";
import Offbg from "./pics/offerBg.jpg";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Pickup extends React.Component {
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
                  PICK UP NEAR : {this.props.match.params.adress}
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            boxShadow: "2px 2px 2px 2px #9E9E9E",
            backgroundColor: "#fff",
            width: 500,
            marginTop: 20,
            marginLeft: 50,
          }}
        >
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search google maps" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: -50,
            marginRight: 50,
          }}
        >
          <h8>Delivery</h8>
          <Switch
            color="secondary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <h8>Pick up</h8>
        </div>
{/* 
        <div style = {{ display : 'flex', flexDirection : 'row', justifyContent : 'space-between', marginTop : 50, marginLeft : 50 , backgroundSize : "cover"}}>
          <button
            style={{
              height: 150,
              width: 250,
              backgroundImage: "url(" + require("./pics/off1.jpg") + ")",
              backgroundPosition: "center",
            }}
          ></button>
        </div> */}
      </div>
    );
  }
}

export default Pickup;



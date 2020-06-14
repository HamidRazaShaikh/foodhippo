import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MapGoogle from "./map.js";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import MyLocationTwoToneIcon from "@material-ui/icons/MyLocationTwoTone";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const handleOnChange = (e) => {
  this.setState({ message: false });
  this.setState({ [e.target.name]: e.target.value });
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginLeft: 15, width: 100, height: 54 }}
        onClick={handleClickOpen}
      >
        DELIVERY
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{overflow : "hidden", height : 650 ,  width: '100%', justifyContent : 'center', display : 'flex' , alignContent: 'center'}}
        
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style = {{margine : 10}}>
          Is this your exact location?
          <TextField
            id="outlined-basic"
            label="Enter your full adress"
            variant="outlined"           
            value={props.adress}
            style= {{ width : '100%' , marginTop : 20}}

            name="adress"
            onChange={handleOnChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MyLocationTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
        </DialogTitle>
        <DialogContent dividers style={{height: 500, visibility: "visible", margin : 5 }}>
          <MapGoogle
            
            latitude={props.latitude}
            longitude={props.longitude}
          />
          {/* <iFrame
            style={{ width: "100%", height: 500, visibility: "visible" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6302710465!2d66.59495074892502!3d25.19338946981612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1591961380984!5m2!1sen!2s"
          ></iFrame> */}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: 300, height: 54, fontSize : 15, margin : 'auto' }}
            autoFocus
            onClick={handleClose}
          >
            FIND RESTAURANTS
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

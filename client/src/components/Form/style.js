import { styled } from "@mui/material/styles";

const PREFIX = "form";

export const classes = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
  layout: `${PREFIX}-layout`,
  paper: `${PREFIX}-paper`,
  stepper: `${PREFIX}-stepper`,
  buttons: `${PREFIX}-buttons`,
  button: `${PREFIX}-button`,
  divider: `${PREFIX}-divider`,
  spinner: `${PREFIX}-spinner`,
  content: `${PREFIX}-content`,
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.appBar}`]: {
    position: "relative",
  },
  [`& .${classes.layout}`]: {
    marginTop: "5%",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  [`& .${classes.paper}`]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  [`& .${classes.stepper}`]: {
    padding: theme.spacing(3, 0, 5),
  },
  [`& .${classes.buttons}`]: {
    display: "flex",
    justifyContent: "flex-end",
  },
  [`& .${classes.button}`]: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  [`& .${classes.divider}`]: {
    margin: "20px 0",
  },
  [`& .${classes.spinner}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [`& .${classes.content}`]: {
    padding: theme.spacing(5),
  },
}));

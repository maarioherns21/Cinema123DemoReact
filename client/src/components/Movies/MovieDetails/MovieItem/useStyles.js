
import { styled } from "@mui/material/styles";
// import { alpha } from "@mui/material/styles";

const PREFIX = "MovieItem";

export const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  card: `${PREFIX}-card`,
  section: `${PREFIX}-section`,
  imageSection: `${PREFIX}-imageSection`,
  loadingPaper: `${PREFIX}-loadingPaper`,
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.media}`]: {
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  [`& .${classes.card}`]: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  [`& .${classes.section}`]: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  [`& .${classes.imageSection}`]: {
    objectFit: "cover",
    width: "100%",
    maxHeight: "500px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  [`& .${classes.loadingPaper}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
}));







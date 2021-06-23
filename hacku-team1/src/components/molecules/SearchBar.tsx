import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
        },
    },
    searchBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    searchIcon: {
        fontSize: "30px",
    },
  })
);

const SearchBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchBox}>
      <form noValidate className={classes.root} autoComplete="off">
        <TextField id="outlined-basic" label="ユーザー名" fullWidth variant="outlined" />
      </form>

      <Button onClick={() => alert("検索を押した")} variant="contained">
     <SearchIcon className={classes.searchIcon} />
       </Button>
    </div>
  );
};

export default SearchBar;
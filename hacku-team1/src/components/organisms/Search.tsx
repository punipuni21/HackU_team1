import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import SearchBar from "../molecules/SearchBar";

const useStyles = makeStyles({
  searchbar: {
    marginBottom: "20px", 
  },
  divider: {
    marginBottom: "20px",
  },
  h2: {
    textAlign: "left",
    marginLeft: "20px",
    marginBottom: "20px",
  },
});

const Search: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.h2}>ユーザー検索</h2>
      <div className={classes.searchbar}>
        <SearchBar />
      </div>
      <Divider className={classes.divider} variant="middle"/>
    </div>
  );
};

export default Search;

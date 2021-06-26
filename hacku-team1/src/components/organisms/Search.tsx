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

type Props= {
    text: string; 
    onChange: any;
    onClick: any;
}

const Search: React.FC<Props> = ({ text, onChange, onClick }) => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.h2}>おすすめ待ちびとを探す</h2>
      <div className={classes.searchbar}>
        <SearchBar text = {text} onChange = {onChange} onClick = {onClick}/>
      </div>
      <Divider className={classes.divider} variant="middle"/>
    </div>
  );
};

export default Search;

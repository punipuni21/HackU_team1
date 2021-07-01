import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";

import DecoratedHead from "../molecules/DecoratedHead";
import SearchBar from "../molecules/SearchBar";

type Props = {
  text: string;
  onChange: any;
  onClick: any;
};

const Search: React.FC<Props> = ({ text, onChange, onClick }) => {
  return (
    <div>
      <DecoratedHead
        color="primary.main"
        icon={<SearchIcon />}
        text="おすすめ待ち人を探す"
      />
      <Box mb={3}>
        <SearchBar text={text} onChange={onChange} onClick={onClick} />
      </Box>
      <Box mb={2}>
        <Divider variant="middle" />
      </Box>
    </div>
  );
};

export default Search;

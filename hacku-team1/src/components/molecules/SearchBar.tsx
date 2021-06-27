import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        width: "25ch",
      },
    },
    searchBox: {
      display: "flex",
      // alignItems: "center",
      justifyContent: "center",
    },
    searchIcon: {
      fontSize: "xx-large",
    },
    searchButton: {
      borderRadius: "0px 4px 4px 0px",
      boxShadow: "none",
    },
    textfield: {
      [`& fieldset`]: {
        borderRadius: "4px 0px 0px 4px",
      },
    },
  })
);

type Props = {
  text: string;
  onChange: any;
  onClick: any;
};

const SearchBar: React.FC<Props> = ({ text, onChange, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.searchBox}>
      <form noValidate className={classes.root} autoComplete="off">
        <TextField
          id="outlined-basic"
          value={text}
          label="ユーザー名"
          fullWidth
          variant="outlined"
          onChange={onChange}
          className={classes.textfield}
        />
      </form>

      <Button
        onClick={onClick}
        variant="contained"
        className={classes.searchButton}
      >
        <SearchIcon className={classes.searchIcon} />
      </Button>
    </div>
  );
};

export default SearchBar;

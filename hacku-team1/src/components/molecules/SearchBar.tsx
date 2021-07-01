import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    searchBox: {
      display: "flex",
      width: "90%",
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onClick();
  };

  return (
    <form
      noValidate
      className={classes.root}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className={classes.searchBox}>
        <TextField
          id="outlined-basic"
          value={text}
          label="ユーザー名"
          fullWidth
          variant="outlined"
          onChange={onChange}
          className={classes.textfield}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.searchButton}
        >
          <SearchIcon className={classes.searchIcon} />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;

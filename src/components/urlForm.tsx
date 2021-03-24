import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {isValidURL} from '../utils/passwordValidation';
import UrlLink from './urlLink';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const UrlForm = () => {
  const classes = useStyles();
  const [url, setUrl] = useState('');
  const [isError, setError] = useState(false);
  const [showUrl, setShowUrl] = useState(false);

  const handleChangeUrl = (e: { target: any }) => {
    const {target} = e;
    setUrl(target.value);
    setError(!isValidURL(target.value));
  };

  const fetchUrl = async () => {
    if(isValidURL(url)) {
        setShowUrl(true);
    }
  };

  return (
    <div>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            error={isError}
            id="filled-error-helper-text"
            label="Enter Url"
            variant="filled"
            onChange={handleChangeUrl}
            value={url}
          />
          <Button onClick={fetchUrl} variant="contained" color="primary">
              Shorten
          </Button>
        </form>
        {showUrl && UrlLink({url})}
      </div>
    </div>
  );
};

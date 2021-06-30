import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

type Props = {
  color?: any;
  icon: any;
  text: string;
};

const DecoratedHead: React.FC<Props> = ({ color, icon, text }) => {
  return (
    <Box borderBottom={2} color={color} mb={3} pb={1}>
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item>
          <Box mt={0.8}>{icon}</Box>
        </Grid>
        <Grid item>
          <Typography variant="h2">{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DecoratedHead;

import React, { useEffect, useState } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import HelpIcon from "@material-ui/icons/Help";

import DecoratedHead from "../molecules/DecoratedHead";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: "20px 0",
    },
    divider: {
      marginBottom: "20px",
    },
    usageCard: {
      height: "400px",
      width: "360px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
        height: "auto",
        width: "320px",
      },
    },
    usageImage: {
      height: "180px",
      padding: "20px",
    },
    usageTitle: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
    usageBody: {
      fontSize: "18px",
    },
  })
);

const Usage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <DecoratedHead color="primary.main" icon={<HelpIcon />} text="使い方" />
      <Container>
        <Box mb={1.5}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={isSmall ? 1 : 4}
          >
            <Grid item>
              <Card>
                <CardContent className={classes.usageCard}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      alt="Usage1"
                      src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2Fusage1.png?alt=media&token=c87b0e4d-08e5-4590-9b30-2eff1deb5485"
                      className={classes.usageImage}
                    />
                  </div>
                  <Typography variant="h5" className={classes.usageTitle}>
                    1. 何の素人か登録する
                  </Typography>
                  <Typography className={classes.usageBody}>
                    自分が始めたいことは、マイページから登録できます
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardContent className={classes.usageCard}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      alt="Usage2"
                      src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2Fusage2.png?alt=media&token=ff5e3289-eabc-4385-a7b8-98721256ba51"
                      className={classes.usageImage}
                    />
                  </div>
                  <Typography variant="h5" className={classes.usageTitle}>
                    2. おすすめされるのを待つ
                  </Typography>
                  <Typography className={classes.usageBody}>
                    おすすめされると、マイページの「おすすめです。」欄に表示されます
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={isSmall ? 1 : 4}
        >
          <Grid item>
            <Card>
              <CardContent className={classes.usageCard}>
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="Usage3"
                    src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2Fusage3.png?alt=media&token=c0666f00-ed9c-436f-a032-83b7a0b1ae38"
                    className={classes.usageImage}
                  />
                </div>
                <Typography variant="h5" className={classes.usageTitle}>
                  3. さっそく挑戦
                </Typography>
                <Typography className={classes.usageBody}>
                  おすすめされた内容を確認して、挑戦してみましょう
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardContent className={classes.usageCard}>
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="Usage4"
                    src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2Fusage4.png?alt=media&token=c0a3498c-34ee-4515-b4fd-e98ef7678838"
                    className={classes.usageImage}
                  />
                </div>
                <Typography variant="h5" className={classes.usageTitle}>
                  4. はじめの一歩を報告する
                </Typography>
                <Typography className={classes.usageBody}>
                  挑戦できたら、マイページから写真をつけて結果を報告しましょう
                </Typography>
                <Typography className={classes.usageBody}>
                  先輩たちが、あなたの報告を心待ちにしています
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Usage;

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
                      src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2FApp%2Fusage1.png?alt=media&token=ab31c0c8-6bfe-47c4-8cef-e7173506d4ef"
                      className={classes.usageImage}
                    />
                  </div>
                  <Typography variant="h5" className={classes.usageTitle}>
                    1. 何のしろうとか登録する
                  </Typography>
                  <Typography className={classes.usageBody}>
                    自分が始めたいことは、「わたし」から登録できます
                  </Typography>
                  <Typography className={classes.usageBody}>
                    「わたし」に行き、何のしろうとかを登録しましょう
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
                      src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2FApp%2Fusage2.png?alt=media&token=44643198-6172-40fc-8106-6cdc52dd2da0"
                      className={classes.usageImage}
                    />
                  </div>
                  <Typography variant="h5" className={classes.usageTitle}>
                    2. おすすめされるのを待つ
                  </Typography>
                  <Typography className={classes.usageBody}>
                    せんぱいたちからおすすめされると、「わたし」の「おすすめです。」欄に表示されます
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
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
                      alt="Usage3"
                      src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2FApp%2Fusage3.png?alt=media&token=f6879f18-020d-40a3-84d4-4f8d6aa3c670"
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
                      src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2FApp%2Fusage4.png?alt=media&token=1f64ae86-5215-4e2b-bf52-2355078bc587"
                      className={classes.usageImage}
                    />
                  </div>
                  <Typography variant="h5" className={classes.usageTitle}>
                    4. はじめの一歩を報告する
                  </Typography>
                  <Typography className={classes.usageBody}>
                    挑戦できたら、「わたし」から写真をつけて結果を報告しましょう
                  </Typography>
                  <Typography className={classes.usageBody}>
                    せんぱいたちが、あなたの報告を心待ちにしています
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
                    alt="Usage5"
                    src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2FApp%2Fusage5.png?alt=media&token=e6b97169-7b83-4e44-a60d-dd5c2b6831f8"
                    className={classes.usageImage}
                  />
                </div>
                <Typography variant="h5" className={classes.usageTitle}>
                  5. おすすめ待ち人を探す
                </Typography>
                <Typography className={classes.usageBody}>
                  次はあなたがせんぱいとなっておすすめする番です
                </Typography>
                <Typography className={classes.usageBody}>
                  「だれか」からあなたがおすすめできる人を探しましょう
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardContent className={classes.usageCard}>
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="Usage6"
                    src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2FApp%2Fusage6.png?alt=media&token=05c71997-8624-426e-88fc-830f3eb64f96"
                    className={classes.usageImage}
                  />
                </div>
                <Typography variant="h5" className={classes.usageTitle}>
                  6. せんぱいとしておすすめする
                </Typography>
                <Typography className={classes.usageBody}>
                  見つけたしろうとさんにおすすめを届けましょう
                </Typography>
                <Typography className={classes.usageBody}>
                  その人の「おすすめです。」欄におすすめを追加することができます
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

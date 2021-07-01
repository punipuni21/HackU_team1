import { withStyles, Theme } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

const LightTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);

  export default LightTooltip;
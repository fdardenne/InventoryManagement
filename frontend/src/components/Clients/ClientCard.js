import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

function RenderButton(props) {
  if(props.disabled) {
    return (
      <Button disabled style={{ background: '#dddddd', color: '#fff' }}>
        Consulter
      </Button>
    )
  }else{
    return (
      <Button style={{ background: '#e79908', color: '#fff' }}>
        Consulter
      </Button>
    )
  }
}

export const ClientCard = React.memo(function MusicCard(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  const disabled = props.disabled;

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.client_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.client_surname}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default ClientCard
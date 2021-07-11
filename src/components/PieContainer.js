import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import exportFromJSON from 'export-from-json'
import * as d3 from 'd3';


const useStyles = makeStyles({
  root: {
    minWidth: 345,
  },
  media: {
    minHeight: 140,
  },
});

export default function PieContainer({ children , svg }) {
  const classes = useStyles();
 
  const downloadSvg = () => {
    console.log(svg)
   
  
    const fileName = 'try'
    const exportType = exportFromJSON.types.html
    
    
    /*  svgAsDataUri(svg.node(), {}, function (uri) {
        console.log('uri', uri);
      });*/
    
    exportFromJSON({ svg, fileName, exportType })
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <div style={{ minWidth: 600, minHeight: 600, margin: 20 }} >
          {children}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={downloadSvg} >
          Download
        </Button>
      </CardActions>
    </Card>
  );
}
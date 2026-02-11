import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

const Lizard = () => {

  const [products, setProducts] = useState([]);

    
  
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
     setProducts(res.data)
     console.log(products)
  })

  return (

    <div>
      <Grid container spacing={2}>

      {products.map((val) => (
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={val.image}
              title={val.rating.rate}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {val.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
      ))}
      </Grid>
    </div>
  );
}

export default Lizard;

import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import dtimg from '../assets/detox_img.png'

export default function BlogCard(){
    return(
    <div className="card_container">
         <Card sx={{ maxWidth: 363.33 , height:"auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={dtimg}
          alt="green iguana"
        />
        <CardContent>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            6 Tips To Protect Your Mental Health When You're Sick
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Rebecca Lee
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
);
}
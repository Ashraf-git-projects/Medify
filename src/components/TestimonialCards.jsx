import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { FaHandHoldingHeart } from "react-icons/fa";
import { CiHospital1 } from "react-icons/ci";
import { PiHospitalFill } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";

const cards = [
  {
    id: 1,
    title: "5000+",
    description: "Happy Patients",
    icon: <FaHandHoldingHeart />
  },
  {
    id: 2,
    title: "1000+",
    description: "Laboratories",
    icon: <CiHospital1 />
  },
  {
    id: 3,
    title: "200+",
    description: "Hospitals",
    icon: <PiHospitalFill />
  },
  {
    id: 4,
    title: "700+",
    description: "Expert Doctors",
    icon: <FaUserDoctor />
  }
];

export default function TestimonialCards() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <div className="test_card_box">
      <Box
      className='card_box'
        sx={{
          width: "100%",
          display: "grid",
         
        }}
      >
        {cards.map((card, index) => (
          <Card key={card.id}>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover"
                  }
                }
              }}
            >
              <CardContent sx={{ height: "100%", textAlign: "center" , padding:8 }}>
                <Box sx={{ fontSize: 40, color: "#007bff", mb: 1 }}>
                  {card.icon}
                </Box>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
}

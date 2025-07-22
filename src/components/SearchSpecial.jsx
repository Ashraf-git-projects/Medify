import React from "react";
import { Link } from 'react-router-dom';
import {
  Box, Card, CardContent, Typography, CardActionArea
} from '@mui/material';
import { FaRegHospital } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { PiHeartbeat } from "react-icons/pi";
import { FaLaptopMedical } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { PiHospitalFill } from "react-icons/pi";
import { FaXRay } from "react-icons/fa";




export default function SearchSpecial() {
  const cards = [
    { id: 1, title: 'Dentistry', icon: FaRegHospital },
    { id: 2, title: 'Primary Care', icon: CiStethoscope },
    { id: 3, title: 'Cardiology', icon: PiHeartbeat },
    { id: 4, title: 'MRI Resonance', icon: FaLaptopMedical },
    { id: 5, title: 'Blood Test', icon: MdBloodtype },
    { id: 6, title: 'Piscologist', icon: FaHandHoldingMedical },
    { id: 7, title: 'Laboratory', icon: PiHospitalFill },
    { id: 8, title: 'X-Ray', icon: FaXRay }
  ];

  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <div className="Find_content">
      <h1>Find by Specialisation</h1>
      
      <Box className="Search_box">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isActive = selectedCard === index;

          return (
            <Card
              className="Search_card"
              key={card.id}
              sx={{
                bgcolor: '#fff',
                border: isActive ? '2px solid #2AA7FF' : 'none',
                transition: 'border 0.3s ease',
              }}
            >
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    padding: 1,
                  }}
                >
                  <Icon size={42} color="#2AA7FF" />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 500,
                      color: isActive ? '#2AA8FF' : '#000',
                      textAlign: 'center'
                    }}
                  >
                    {card.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>

      <div className="btn_element">
        <Link to="/view-all">
          <button className="view_btn">View all</button>
        </Link>
      </div>
    </div>
  );
}

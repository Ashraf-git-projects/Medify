import React from "react";
import {
  Box, Card, CardContent, Typography, CardActionArea
} from '@mui/material';
import {
  Person, DomainAdd, NightShelter,
  LocalHospital, AirportShuttle, Search
} from '@mui/icons-material';

export default function LocationSearch() {
  const cards = [
    { id: 1, title: 'Doctors', icon: Person },
    { id: 2, title: 'Labs', icon: DomainAdd },
    { id: 3, title: 'Hospitals', icon: NightShelter },
    { id: 4, title: 'Medical Store', icon: LocalHospital },
    { id: 5, title: 'Ambulance', icon: AirportShuttle }
  ];

  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <div className="location_content">
      <div className="search-box">
        <input placeholder="Search State" />
        <input placeholder="Search City" />
        <button id="searchBtn" type="submit">
          <Search fontSize="medium" /> Search
        </button>
      </div>
      <p className="search-label">You may be looking for</p>
      <Box
        className="category-box"
      >
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card className="category-card" key={card.id}>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? '' : undefined}
                sx={{
                  '&[data-active]': {
                    backgroundColor: '#E8F1FF',
                    border: '1px solid #2AA7FF',
                    '& svg': { color: '#2AA7FF' },
                    '& h6': { color: '#2AA7FF' },
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    padding: 2
                  }}
                >
                  <Icon fontSize="large" />
                  <Typography variant="h6">{card.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Grid,
  Container
} from '@mui/material';
import Header from '../header/Header';

const TestSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/test/all')
      .then((res) => {
        setSeries(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {series.map((item) => (
            <Grid item key={item.testSeriesId}>
              <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3, margin: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {item.description}
                  </Typography>
                  <Box mb={1}>
                    <Typography variant="body2">📝 Questions: {item.totalQuestion}</Typography>
                    <Typography variant="body2">📊 Marks: {item.totalMarks}</Typography>
                    <Typography variant="body2">⏱ Duration: {item.duration}</Typography>
                  </Box>
                  <Typography variant="h6" color="primary">
                    ₹{item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TestSeries;

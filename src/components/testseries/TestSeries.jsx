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
import { RingLoader } from "react-spinners";
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';
import { LocalStorageKeys } from '../../utils/LocalStorageKeys';
import { Baseurl } from '../../utils/BaseUrl';

const TestSeries = () => {
  const [series, setSeries] = useState([]);
  const [loader,setLoader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    axios
      .get(`${Baseurl}/test/all`)
      .then((res) => {
        setSeries(res.data.data);
        console.log(res.data.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log('Error fetching data: ', error);
        setLoader(false);
      });
  }, []);

  const handleTestSeriesStart=(testSeriesData)=>{
      navigate('/instruction');
      localStorage.setItem(LocalStorageKeys.TEST_SERIES_ID,testSeriesData?.testSeriesId)
      localStorage.setItem(LocalStorageKeys.TEST_SERIES_NAME,testSeriesData?.title)
  }

  return (
    <>
     {loader && <>
          <div className='fixed top-0 left-0 flex w-full min-h-screen justify-center items-center'>
              <div className='flex justify-center flex-col items-center gap-4 text-blue-500'>
                <div>
                <RingLoader size={150} color='#00f' />
                </div>
                <div>Loading...</div>

              </div>
          </div>
      </>}
      { !loader &&
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
                  <Button fullWidth variant="contained" color="primary" onClick={()=>handleTestSeriesStart(item)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </> 
    }
    </>
  );
};

export default TestSeries;

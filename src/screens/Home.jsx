import Header from '../components/header/Header'
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FaLaptopCode, FaGlobe, FaTrain, FaUniversity, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const categories = [
    {
      title: "Computer Science",
      description: "Practice coding, theory, and aptitude questions.",
      icon: <FaLaptopCode className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "General Knowledge",
      description: "Daily GK quizzes and current affairs.",
      icon: <FaGlobe className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Railways",
      description: "Prepare for RRB exams with mock tests.",
      icon: <FaTrain className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Banking",
      description: "IBPS, SBI PO, Clerk, and more.",
      icon: <FaUniversity className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "All Streams",
      description: "One place for all competitive exams.",
      icon: <FaBookOpen className="w-10 h-10 text-purple-500" />,
    },
  ];

  return (
    <>
  <Header/>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Test Series for Every Stream
          </h1>
          <p className="text-gray-600 text-lg">
            Practice, analyze, and improve with subject-wise and full-length mock tests.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="shadow-md rounded-2xl hover:shadow-xl transition bg-white">
                <CardContent className="flex flex-col items-center text-center p-6">
                  {cat.icon}
                  <Typography variant="h6" className="mt-4 text-gray-800 font-semibold">
                    {cat.title}
                  </Typography>
                  <Typography variant="body2" className="mt-2 mb-4 text-gray-600">
                    {cat.description}
                  </Typography>
                </CardContent>
                <CardActions className="flex justify-center pb-4">
                  <Button variant="contained" color="primary" className="rounded-xl px-6">
                    Start Now
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home
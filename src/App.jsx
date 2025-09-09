import React from "react";
import { Route, Routes } from "react-router-dom";
import TestSeries from "./components/testseries/TestSeries";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Home from "./screens/Home";
import Test from "./screens/Test";
import Leaderboard from "./screens/Leaderboard";
import TestReviewSolution from "./screens/TestReviewSolution";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import Instruction from "./screens/Instruction";
import TestSeriesForm from "./screens/TestSeriesForm.jsx";
import AddQuestion from "./screens/AddQuestions.jsx";
import BulkQuestionUpload from "./screens/BulkQuestionUpload.jsx";
import AuthHeader from "./components/header/AuthHeader.jsx";



function App() {
  const auth = useAuthUser()
 

  return (
    <>
    
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/instruction" element={<Instruction />} />
  <Route path="/testseries" element={<TestSeries />} />
  <Route path="/start-test" element={<Test />} />
  <Route path="/result" element={<Leaderboard />} />

  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  <Route path="/test-form" element={<TestSeriesForm />} />
  <Route path="/save-questions" element={<AddQuestion />} />

  {/* ✅ Layout route */}
  <Route path="/auth" element={<AuthHeader />}>
    {/* ✅ child route — no leading slash */}
    <Route path="save-bulk-questions" element={<BulkQuestionUpload />} />
  </Route>

  <Route path="*" element={<PageNotFound />} />
</Routes>

    
    </>
  )
}

export default App

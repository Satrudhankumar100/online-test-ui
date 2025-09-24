import React from "react";
import { Route, Routes } from "react-router-dom";
import TestSeries from "./components/testseries/TestSeries";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Home from "./screens/Home";
import Test from "./screens/Test";
import Leaderboard from "./screens/Leaderboard";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import Instruction from "./screens/Instruction";
import TestSeriesForm from "./components/playlist/TestSeriesForm.jsx";
import AddQuestion from "./screens/AddQuestions.jsx";
import AuthHeader from "./components/header/AuthHeader.jsx";
import Playlist from "./components/playlist/CreatePlaylist.jsx";
import Test_Playlist from "./screens/auth/common/Test_Playlist.jsx";
import TestSeries_List from "./screens/auth/common/TestSeries_List.jsx";
import Question_List from "./screens/auth/common/Question_List.jsx";
import Dashboard from "./screens/auth/common/Dashboard.jsx";
import CreatePlan from "./screens/auth/common/CreatePlan.jsx";
import TestSeriesPlans from "./components/testseriesplan/TestSeriesPlans.jsx";
import Plan_List from "./screens/auth/common/Plan_List.jsx";
import { Bounce, ToastContainer } from 'react-toastify';
import AuthUserHeader from "./components/header/AuthUserHeader.jsx";




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
        <Route path="/create-playlist" element={<Playlist />} />
        <Route path="/create-plan" element={<CreatePlan />} />
        <Route path="/plan-type" element={<TestSeriesPlans />} />



        {/* ✅ Layout route */}
        <Route path="/auth" element={<AuthHeader />}>
          {/* ✅ child route — no leading slash */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="test_playlist" element={<Test_Playlist />} />
          <Route path="list_testseries/:id" element={<TestSeries_List />} />
          <Route path="list_questions" element={<Question_List />} />
          <Route path="create-plan" element={<Plan_List />} />

        </Route>
        <Route path="/user" element={<AuthUserHeader />}>
          {/* ✅ child route — no leading slash */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="test_playlist" element={<Test_Playlist />} />
          <Route path="list_testseries/:id" element={<TestSeries_List />} />
          <Route path="list_questions" element={<Question_List />} />
          <Route path="create-plan" element={<Plan_List />} />

        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    </>
  )
}

export default App
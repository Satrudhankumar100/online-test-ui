import React, { useState, useEffect } from "react";
import axios from "axios";
import { Baseurl } from "../../utils/BaseUrl";
import { Link, useNavigate } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { RingLoader } from "react-spinners";
import { MdClose } from "react-icons/md";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { toast } from "react-toastify";

export default function TestSeriesForm() {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    duration: "",
    testListId: "",
    title: "",
  });


  const isAuthenticated = useIsAuthenticated()
      const authHeader = useAuthHeader()
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [search, setSearch] = useState("");
  const [searchSubject, setSearchSubject] = useState("");
  const [searchTopic, setSearchTopic] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
   const [isDisabled,setIsDisabled] = useState(false);



  const FetchCategory =  ()=>{
    axios
        .get(`${Baseurl}/test/series/classification`)

        .then((res) => {
          console.log(res.data?.data);
          setCategories(res.data.data?.categoryNames)
          setSubjects(res.data.data?.subjectNames)
          setTopics(res.data?.data?.topicNames)

        })

        .catch((err) => console.error(err));
  }

  const FetchPlayList  =  async ()=>{
    
      
         try{

     const resp = await axios.get(`${Baseurl}/playlists`, { headers: { "Content-Type": "application/json","Authorization": authHeader() }})
        console.log(resp.data);
        setPlaylists(resp.data?.data)

  }catch(err){
    console.log(err)
  }
  }

  // ✅ Fetch categories
  useEffect(() => {

    if (!isAuthenticated()) {
      navigate("/login")

    } else {
      FetchCategory();
      FetchPlayList();
    }

  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (cat) => {
    setFormData({ ...formData, category: cat });
    setSearch(cat);
    setShowDropdown(false);
  };
  const handleSubjectSelect = (sub) => {
    setFormData({ ...formData, subject: sub });
    setSearchSubject(sub);
    setShowDropdown(false);
  };
  const handleTopicSelect = (top) => {
    setFormData({ ...formData, topic: top });
    setSearchTopic(top);
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setIsDisabled(true);
    setResponse(null);
    setError(null);
    console.log(formData)

    axios
      .post(`${Baseurl}/test/series/test-saved`, formData)
      .then((res) => {
        setResponse(res.data);
        setFormData({
          category: "",
          description: "",
          subject:"",
          topic:"",
          duration: "",
          title: "",
        });
        setSearch("");
        toast.success("Test Series Createad");

      })
      .catch(() => { toast.error("Failed to save Test Series. Try again.");  });
      setIsDisabled(false);
  };

   const filteredCategories = categories.filter((cat) =>
     cat.toLowerCase().includes(search.toLowerCase())
   );
   const filteredSubjects = subjects.filter((sub) =>
     sub.toLowerCase().includes(searchSubject.toLowerCase())
   );
   const filteredTopics = topics.filter((top) =>
     top.toLowerCase().includes(searchTopic.toLowerCase())
   );

  

  return (
    <>
      <div>
        <button className="px-6 py-2 bg-blue-500 font-semibold text-white text-sm rounded-2xl cursor-pointer" onClick={()=>setIsOpen(true)}>+ Create Test Series</button>
      </div>
      {isOpen &&
      <div className="absolute left-1/2 top-1/2 -translate-1/2 w-full h-full z-[9999] bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
      <div className="text-3xl flex w-full justify-end p-4 cursor-pointer text-red-500 fixed"  onClick={()=>setIsOpen(false)}><MdClose /></div>
        <div className="flex items-center justify-center min-h-screen ">
        
          <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Create Test Series
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Category */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setFormData({ ...formData, category: e.target.value });
                    setShowDropdown(true);
                  }}
                  placeholder="Search or add new category"
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
                {showDropdown && search && (
                  <ul className="absolute left-0 right-0 bg-white border rounded-xl mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map((cat, idx) => (
                        <li
                          key={idx}
                          onClick={() => handleCategorySelect(cat)}
                          className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                        >
                          {cat}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">
                        No match, press enter to add new
                      </li>
                    )}
                  </ul>
                )}
              </div>
            
              {/* Subject */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={searchSubject}
                  onChange={(e) => {
                    setSearchSubject(e.target.value);
                    setFormData({ ...formData, subject: e.target.value });
                    setShowDropdown(true);
                  }}
                  placeholder="Search or add new Subject"
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
                {showDropdown && searchSubject && (
                  <ul className="absolute left-0 right-0 bg-white border rounded-xl mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
                    {filteredSubjects.length > 0 ? (
                      filteredSubjects.map((sub, idx) => (
                        <li
                          key={idx}
                          onClick={() => handleSubjectSelect(sub)}
                          className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                        >
                          {sub}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">
                        No match, press enter to add new
                      </li>
                    )}
                  </ul>
                )}
              </div>
              {/* Topic */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-1">
                  Topic
                </label>
                <input
                  type="text"
                  value={searchTopic}
                  onChange={(e) => {
                    setSearchTopic(e.target.value);
                    setFormData({ ...formData, topic: e.target.value });
                    setShowDropdown(true);
                  }}
                  placeholder="Search or add new Topic"
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
                {showDropdown && searchTopic && (
                  <ul className="absolute left-0 right-0 bg-white border rounded-xl mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
                    {filteredTopics.length > 0 ? (
                      filteredTopics.map((topic, idx) => (
                        <li
                          key={idx}
                          onClick={() => handleTopicSelect(topic)}
                          className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                        >
                          {topic}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">
                        No match, press enter to add new
                      </li>
                    )}
                  </ul>
                )}
              </div>

              {/* Title */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  rows="3"
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Enter duration"
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Playlist Name
                </label>
                <select name="testListId" onChange={handleChange}  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none">
                  <option value=''>Select one</option>
                  {playlists.map((playlist,index)=>{
                      return <option key={index} value={playlist?.testListId} >{playlist?.title}</option>
                  })}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isDisabled}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition duration-300"
              >
                Save Test Series
              </button>
            </form>
           </div>
        </div>
      </div>
      }
    </>
  );
}

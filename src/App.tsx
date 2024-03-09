import './App.css';
import { Route, Routes } from 'react-router-dom';
import Protector from './ProtectedRouter/Protector';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Layout from './Layout/Layout';
import ForgotPassword from './OtherPages/ForgotPassword';
import ThankyouPage from './OtherPages/ThankyouPage';
import ErrorPage from './OtherPages/ErrorPage';
import DownloadPage from './OtherPages/DownloadPage';
import BlogCommon from './pages/BlogCommon';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import RightSideBlogPage from './pages/RightSideBlogPage';
import DetailLeftSidebar from './pages/DetailLeftSidebar';
import DetailRightSidebar from './pages/DetailRightSidebar';
import LeftSideBlogPage from './pages/LeftSideBlogPage';
import ReviewPage from './pages/ReviewPage';
import FAQPage from './pages/FAQPage';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);
  

  return (
    <div >
       {loading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}

       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgotPassword />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/breadcrumb" element={<BlogCommon />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route element={<Protector/>}>
          <Route path="/layout" element={<Layout />}/>
          <Route element={<BlogCommon/>}>
              <Route path='/bloglist' element={<BlogList/>}/>
              <Route path='/blogdetail' element={<BlogDetail/>}/>
              <Route path='/leftsidebar' element={<LeftSideBlogPage/>}/>
              <Route path='/rightsidebar' element={<RightSideBlogPage/>}/>
              <Route path='/detailleftsidebar' element={<DetailLeftSidebar/>}/>
              <Route path='/detailrightsidebar' element={<DetailRightSidebar/>}/>
              <Route path='/review' element={<ReviewPage/>}/>
              <Route path='/FAQ' element={<FAQPage/>}/>
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

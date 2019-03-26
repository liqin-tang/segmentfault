import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import AppNav from './components/AppNav.tsx'
import AppFooter from './components/AppFooter.tsx'

import Home from './pages/home/Home.tsx'
import Question from './pages/questions/Questions.tsx'
import Blogs from './pages/blogs/Blogs.tsx'
import Lives from './pages/lives/Lives.tsx'
import Groups from './pages/groups/Groups.tsx'
import Events from './pages/events/Events.tsx'
import Tags from './pages/tags/Tags.tsx'
import Jobs from './pages/jobs/Jobs.tsx'
import Users from './pages/users/Users.tsx'
import Badges from './pages/badges/Badges.tsx'
import Notes from './pages/notes/Notes.tsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNav/>

          {/* 首页 */}
          <Route path="/" component={Home}/>

          {/* 问答 */}
          <Route path="/questions" component={Question}/>

          {/* 专栏 */}
          <Route path="/blogs" component={Blogs}/>

          {/* 讲堂 */}
          <Route path="/lives" component={Lives}/>

          {/* 圈子 */}
          <Route path="/groups" component={Groups}/>

          {/* 活动 */}
          <Route path="/events" component={Events}/>

          {/* 标签 */}
          <Route path="/tags" component={Tags}/>

          {/* 找工作 */}
          <Route path="/jobs" component={Jobs}/>

          {/* 排行榜 */}
          <Route path="/users" component={Users}/>

          {/* 徽章 */}
          <Route path="/badges" component={Badges}/>

          {/* 笔记 */}
          <Route path="/notes" component={Notes}/>


          <AppFooter/>
        </div>
      </Router>
    );
  }
}

export default App;

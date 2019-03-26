import React from 'react';
import { NavLink,Link } from 'react-router-dom'
import './AppNav.scss'

export default class AppNav extends React.Component{

    getHideNav(){
        return (
            <ul className="hide-nav">
                <li className="nav-hidenav">
                    <Link to="/event">活动</Link>
                </li>
                <li className="nav-hidenav">
                    <Link to="/tags">标签</Link>
                </li>
                <li className="nav-hidenav">
                    <Link to="/jobs">找工作</Link>
                </li>
                <li className="nav-hidenav">
                    <Link to="/users">排行榜</Link>
                </li>
                <li className="nav-hidenav">
                    <Link to="/badges">徽章</Link>
                </li>
                <li className="nav-hidenav">
                    <Link to="/notes">笔记</Link>
                </li>
                <li className="nav-hidenav">
                    <a href="https://docs.segmentfault.com/">开发手册</a>
                </li>
                <li className="nav-hidenav">
                    <a href="https://business.segmentfault.com/ads/?utm_source=sf-header">广告投放</a>
                </li>
            </ul>
        )
    }
    render(){
        return (
            <header className="app-nav">
                <div className="nav-wrap">
                    <div className="logo">
                        <a href="#">
                            <img src="/images/logo-b.svg"/>
                        </a>
                    </div>

                    <nav className="nav">
                        <li className="nav-item">
                            <NavLink to="/">首页</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/questions">问答</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blogs">专栏</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/lives">讲堂</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/groups">圈子</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="#">发现</a>
                            <i></i>
                            {this.getHideNav()}           
                        </li>
                    </nav>
                    
                    <div className="search">
                        <input type="text" placeholder="搜索问题或关键字"/>
                    </div>

                    <ul className="header-login">
                        <li>立即登录</li>
                        <li>免费注册</li>
                    </ul>
                </div>
            </header>
        )
    }
}
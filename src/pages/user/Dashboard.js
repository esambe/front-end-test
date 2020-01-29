import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import './../../assets/css/dasboard.css';

const Dashboard = (children) => {

    const [leftBar, setLeftBar] = useState(false);

    return (
        <>
            <Layout>
                <div class="area"></div><nav class="main-menu">
                    <ul>
                        <li>
                            <a href="/dashboard">
                                <i class="fa fa-home fa-2x"></i>
                                <span class="nav-text">
                                    Dashboard
                            </span>
                            </a>

                        </li>
                        <li class="has-subnav">
                            <a href="#">
                                <i class="fa fa-laptop fa-2x"></i>
                                <span class="nav-text">
                                    Profile
                            </span>
                            </a>

                        </li>
                        <li class="has-subnav">
                            <a href="#">
                                <i class="fa fa-pencil fa-2x"></i>
                                <span class="nav-text">
                                    Edit Profile
                            </span>
                            </a>

                        </li>
                    </ul>

                    <ul class="logout">
                        <li>
                            <a href="#">
                                <i class="fa fa-power-off fa-2x"></i>
                                <span class="nav-text">
                                    Logout
                            </span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="main-section">
                    <h1>Main</h1>
                </div>
            </Layout>
        </>
    );
}

export default Dashboard;

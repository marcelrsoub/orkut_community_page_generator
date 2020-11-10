import React from 'react'
import './Page.css'


const Page = (props:any)=>{

    return (
        <div className="body border">
            <div className="navbar border">
                <div className="logo border"> LOGO</div>
                <div className="menu-btn border">Home</div>
                <div className="menu-btn border">Profile</div>
                <div className="menu-btn border">Scrapbook</div>
                <div className="menu-btn border">Friends</div>
                <div className="menu-btn border">Communities</div>

                <div className="menu-right border"><div className="search"></div></div>
                <div className="menu-right border">Logout</div>
                <div className="menu-right border">email@email.com</div>
            </div>

            <div className="main-body">
                <div className="cont-left border"></div>
                <div className="cont-mid border">
                    <span className="title-mid">Community</span>
                    <ul className="breadcrumbs">
                        <li>Home</li>
                        <li>Communities</li>
                        <li>Cultures & Communities</li>
                        <li></li>
                    </ul>
                </div>

                <div className="cont-right border">
                    <span className="title-right">
                        related communities
                    </span>

                    <div className="cards">
                        <div className="card border">
                            <div className="card-pic border"></div>
                            <div className="card-desc">
                            <span className="card-title">Avengers</span>
                            <br/>
                            <span className="card-number">(11,470)</span>
                            </div>
                        </div>
                        <div className="card border">
                            <div className="card-pic border"></div>
                            <div className="card-desc">
                            <span className="card-title">Avengers</span>
                            <br/>
                            <span className="card-number">(11,470)</span>
                            </div>
                        </div>
                        <div className="card border">
                            <div className="card-pic border"></div>
                            <div className="card-desc">
                            <span className="card-title">Avengers</span>
                            <br/>
                            <span className="card-number">(11,470)</span>
                            </div>
                        </div>
                        <div className="card border">
                            <div className="card-pic border"></div>
                            <div className="card-desc">
                            <span className="card-title">Avengers</span>
                            <br/>
                            <span className="card-number">(11,470)</span>
                            </div>
                        </div>
                        <div className="card border">
                            <div className="card-pic border"></div>
                            <div className="card-desc">
                            <span className="card-title">Avengers of the century</span>
                            <br/>
                            <span className="card-number">(11,470)</span>
                            </div>
                        </div>
                        <div className="card border">
                            <div className="card-pic border"></div>
                            <div className="card-desc">
                            <span className="card-title">Avengers</span>
                            <br/>
                            <span className="card-number">(11,470)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
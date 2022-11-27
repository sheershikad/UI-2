import "./details.css";

function Details(){
    return(
        <div className="details">
        <div className="about-us">
            <div><h5>About Us</h5></div>
            <div><p>we are equipped with comprehensive knowledge and devices that enable them to diagnose and treat their patients with correct procedures.</p></div>
            <div className="location">
                <div>
                <i className="fa fa-map-marker"></i>
                </div>
                <div>
                    <p>13/12 Elizabeth street Melbourne VIC 3000,Australia</p>
                </div>
            </div>
            <div className="contact-number">
            <div>
            <i className="fa fa-phone"></i>
            </div>
            <div>
                <p>+61 658346833</p>
            </div>
            </div>
            <div className="social-icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-wifi"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-skype"></i>
            </div>
        </div>
        <div className="latest-post">
            <div><h5>Latest Post</h5></div>
            <div className="posts">
                <div className="post">
                    <div className="post-image">
                    <img src="./images/d-1.jpg" alt="" />
                    </div>
                    <div className="post-description">
                    <h6>ihihi</h6>
                        <p>kgfjfgf jgfyrf iwieknjdfbheg keghejbkfk gjgfhj bjsjjjjsheershik </p>
                    </div>
                </div>
                <div className="post">
                    <div className="post-image">
                    <img src="./images/d-2.jpg" alt="" />
                    </div>
                    <div className="post-description">
                    <h6>ihihi</h6>
                        <p>kgfjfgf jgfyrf iwieknjdfbheg keghejbkfk gjgfhj bjsjjjjsheershik </p>
                    </div>
                </div>
                <div className="post">
                    <div className="post-image">
                        <img src="./images/d-3.jpg" alt="" />
                    </div>
                    <div className="post-description">
                        <h6>ihihi</h6>
                        <p>kgfjfgf jgfyrf iwieknjdfbheg keghejbkfk gjgfhj bjsjjjjsheershik </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="twitter-widget">
            <div><h5>Twitter Widget</h5></div>
            <div className="widgets">
                <div className="widget">
                    <div><i className="fa fa-twitter"></i></div>
                    <div className="twit">
                        <p>hjsheershiks isthehbjh</p>
                        <p> 16hrs ago</p>
                    </div>
                </div>

                <div className="widget">
                    <div><i className="fa fa-twitter"></i></div>
                    <div className="twit">
                    <div className="arrow">
    <div className="outer"></div>
    <div className="inner"></div>
  </div>
  <div className="message-body">
    <p>Hello world! This is a test message to show how to make an arrow on the side of the box.</p>
  </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Details;
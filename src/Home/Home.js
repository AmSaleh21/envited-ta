import {NavLink} from "react-router-dom";
import './Home.css'
import '../App.css'

const Home = () => {
    return (
        <div className={'row flex-wrap'}>
            <div className={'col-sm-12 col-md-12 col-lg-6 text-center d-flex flex-column' +
                ' align-items-center justify-content-center'}>
                <h1 className={'fw-bold'}>Imagine if</h1>
                <h1 className={'snapChat'}>Snapchat</h1>
                <h1 className={'fw-bolder'}>had events.</h1>
                <p>Easily host and share events with your friends across any social media.</p>
                <NavLink to={'/create'} style={{textDecoration: "none"}} className={'align-self-center'}>
                    <button className={'button'}>🎉 Create my event</button>
                </NavLink>
            </div>
            <div className={'col-sm-12 col-md-12 col-lg-6 image-container'}></div>
        </div>
    );
};

export default Home;

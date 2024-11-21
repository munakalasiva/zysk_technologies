import "./index.css";
import Logo1 from '../../assets/message-chat-circle.png';
import Logo2 from '../../assets/Icon.jpg';
import Logo3 from '../../assets/Icon (1).jpg';
import Logo4 from '../../assets/message-smile-circle.png';
import Logo5 from '../../assets/command.png';
import Logo6 from '../../assets/message-heart-circle.png';

const Features=()=>{
    return(
        <div className="fea-cont">
            <div className="fea-bg">
                <h5>Features</h5>
                <h2>Analytics that feels like it’s from the future</h2>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>

        <div className="cards">
            <div className="fea-card">
                <img src={Logo1} alt="icon"/>
                <h5 className="fea-hea">Share team inboxes</h5>
                <p className="fea-para">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>

            <div className="fea-card">
                <img src={Logo2} alt="icon"/>
                <h5 className="fea-hea">Deliver instant answers</h5>
                <p className="fea-para">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>

            <div className="fea-card">
                <img src={Logo3} alt="icon"/>
                <h5 className="fea-hea">Manage your team with reports</h5>
                <p className="fea-para">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            </div>

            <div className="fea-card">
                <img src={Logo4} alt="icon"/>
                <h5 className="fea-hea">Connect with customers</h5>
                <p className="fea-para">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
            </div>

            <div className="fea-card">
                <img src={Logo5} alt="icon"/>
                <h5 className="fea-hea">Connect the tools you already use</h5>
                <p className="fea-para">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
            </div>

            <div className="fea-card">
                <img src={Logo6} alt="icon"/>
                <h5 className="fea-hea">Our people make the difference</h5>
                <p className="fea-para">We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
            </div>

            </div>   
        </div>
    )
}
export default Features;
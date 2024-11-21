import "./index.css";
import { FaArrowRight } from "react-icons/fa";
import { LuPlayCircle } from "react-icons/lu";
const Container=()=>{
    return(
        <div className="analytics-container">
        <div className="btn-grp">
          <button className="feature-btn">New feature</button>
          <p className="para">Check out the team dashboard <FaArrowRight /></p>
        </div>
        <h1>Beautiful analytics to grow smarter</h1>
        <p className="para1">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="video-section">
          <button className="demo"><LuPlayCircle /> Demo</button>
          <button className="signup">Sign up</button>
        </div>

        <img src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SR~9DeM3vhGlHKTXqXxCLv7xU~J9DMhzVlb9nhLAkmmQdHwgtmcnRzEqg7WwXFOcNtIvLiBTjRYjoGT7uQXK8AHbUTzZpx42v~ozCdmt7qHZj1lKKSIKoa6gPKqfUXn-o8KOTZ-fDnMdb-cjkgkWKG6DX9M-CRhMCFB2zIiKHR~1WTRiLVdrM43n8tKebyUMUtIc3quxvOQoYDRo4I4IuTBNY18XSQpng4IChSOb~38dEboVgA71IqMYd4KHCFzjhwVnCJEi2stv55O5ehPHzMyTg~BqZ~vrqibehhAcYl1iqiSDCYUR1Y4bNLhOfShsTULsjiFZfSHq-e2PVn93hQ__"
        alt="dashboard-img"
        className="dashboard-img"
        />
      </div>
      
    )
}
export default Container;
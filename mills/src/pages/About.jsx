import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
const About = () => (
    <div>
        <h1 className="text-3xl font-bold underline">About Page Content</h1>
        {/* Navigation link back to the Home page */}
        <Link to="/" className="text-pink-500 hover:underline">Go back to Home</Link>
    </div>
);

export default About;

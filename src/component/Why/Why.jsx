import React from 'react';
import './WhyPixliaTech.css';

const WhyPixliaTech = () => {
    return (
        <div className="why-pixliatech">
            <h2 style={{fontFamily:"Anybody"}} className=' border-b pb-5 text-[40px] font-black mb-10'>Why Pixlia Tech?</h2>
            <div className="grid-container">
                <FeatureCard
                    number="01"
                    title="Verified Tech & HR Experts"
                    description="Our professionals are meticulously vetted to ensure they possess both the skills and experience required for complex business needs. Whether it's a front-end developer, cybersecurity specialist, or HR consultant, we ensure you are hiring the best."
                />
                <FeatureCard
                    number="02"
                    title="Tailored Solutions for Every Business"
                    description="From startups to enterprises, we cater to a wide range of industries and requirements. Need a full team for an enterprise-level project or just one consultant for a short-term engagement? PixliaTech matches you with experts suited to your specific needs."
                />
                <FeatureCard
                    number="03"
                    title="Comprehensive HR Solutions"
                    description="Building the right team is critical to business success. With our HR services, you gain access to specialists in recruitment, employee training, onboarding, and optimizing HR processes, allowing your business to focus on what matters most—growth."
                />
                <FeatureCard
                    number="04"
                    title="Global Reach, Local Impact"
                    description="With experts from across the world, PixliaTech brings diverse talent to the table. Despite the global reach, we ensure that our solutions are tailored to the specific cultural and business needs of your market."
                />
                <FeatureCard
                    number="05"
                    title="End-to-End Support"
                    description="We don't just connect you with the right talent; we support you throughout the project. Our platform includes tools for collaboration, communication, and tracking milestones, ensuring your project stays on course."
                />
                <FeatureCard
                    number="06"
                    title="Secure & Efficient Payments"
                    description="Our integrated payment system ensures that both clients and consultants enjoy a secure, fast, and transparent payment process. No need to worry about international transfers or hidden fees—everything is handled directly within the platform."
                />
            </div>
        </div>
    );
};

const FeatureCard = ({ number, title, description }) => {
    return (
        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"start", marginBottom:"10px"}}>
            <span style={{fontFamily:"Anybody"}} className="feature-number">{number}</span>
            <div className="feature-card">
                <div className="feature-header">
                    <div className="feature-title mb-3">
                        <h3>{title}</h3>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default WhyPixliaTech;

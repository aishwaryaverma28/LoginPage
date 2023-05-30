import React from 'react'
import styles from"./Styles/Body.module.css";

const FreeTrail = () => {
  return (
    <section className={styles.LoginLeftSection}>
        <h1 className={styles.leftSecHeading}>Start Your Free Trail.</h1>
        <h3>No credit card required, no software to install.</h3>
        <p>With your 30-day trial, you get:</p>
        <ul>
            <li><span>.</span>Pre-loaded data or upload your own</li>
            <li><span>.</span>Pre-configured processes, reports, and dashboards</li>
            <li><span>.</span>Guided experiences for sales reps, leaders, and administrators</li>
            <li>Online training and live onboarding webinars</li>
        </ul>
        <p>Questions? Talk to an expert: <span>1800-420-7332</span></p>
    </section>
  )
}

export default FreeTrail
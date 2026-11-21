import React from 'react'
import { Helmet } from 'react-helmet-async'
import { EMAIL } from '@components/site'

export const Privacy: React.FC = () => (
  <>
    <Helmet><title>Privacy | KayDev Technology</title></Helmet>
    <div className="wrap page">
      <h1>Privacy</h1>
      <p>Last updated November 2026.</p>
      <p>This page explains what information the KayDev Technology, LLC website handles.</p>
      <h2>What this site collects</h2>
      <p>This site has no forms, accounts or advertising trackers. If you email us, we receive your email address and whatever you include in your message, and we use it only to reply to you and to discuss staffing or services you ask about.</p>
      <h2>Email outreach</h2>
      <p>If you received an email from us and do not want further messages, reply with "unsubscribe" or use the unsubscribe link in the email, and we will remove you from our list.</p>
      <h2>Sharing</h2>
      <p>We do not sell personal information. We share it only with service providers that help us run our business, or when the law requires it.</p>
      <h2>Contact</h2>
      <p>Questions about this page can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, or by mail to KayDev Technology, LLC, 1751 River Run, Suite 200, Fort Worth, TX 76107.</p>
    </div>
  </>
)

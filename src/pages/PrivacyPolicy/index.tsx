import { Privacy, Typography } from '@/components';
import { helloSocials } from '@/consts/socials';

import s from './styles.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Typography className={s.title} type="h1">
          DGT Privacy Policy
        </Typography>
        <Privacy.DocsTitle className={s.first_block} content="DGT Privacy Policy" />
        <Privacy.DocsText className={s.date} content="01.07.2021" color="grey" />
        <Privacy.DocsTextBlock
          content={`This Privacy Policy explains how DGT collects, uses, shares, and protects user information obtained through the DGT.io website. The terms “we,” “us,” and “our” refer to DGT and its affiliates. When we ask for certain personal information from users it is because we are required by law to collect this information or it is relevant for specified purposes. Any non-required information you provide to us is done so voluntarily. You decided whether to provide us with this non-required information; you may not be able to access or utilize all of our Services if you choose not to.
            By using the Site, you consent to the data practices described in this Privacy Policy. On occasion, DGT may revise this Privacy Policy to reflect changes in law or our personal data collection and use practices. If material changes are made to this Privacy Policy, the changes will be announced by posting on the site. We will ask for your consent before using your information for any purpose that is not covered in this Privacy Policy.
            The latest privacy policy has incorporated elements from the General Data Protection Regulation (GDPR) as we act in accordance with its personal information processing rules within the European Economic Area (EEA).`}
        />
        <Privacy.DocsTitle
          className={s.second_block}
          content="What kinds of information do we collect?"
        />
        <Privacy.DocsText content="We want you to understand the types of information we collect when you register for and use DGT's services" />
        <Privacy.DocsTextBlockWithTitle
          title="Information you provide to us at registration"
          content="When you create a DGT Account, you provide us with personal information that includes your contact information (Email Address and a password). You can also choose to add a Google Authenticator account to be used for 2FA verification for improved security."
        />
        <Privacy.DocsTextBlockWithTitle
          title="Service Usage Information"
          content="Through your use of the DGT platform, we also can monitor and collect tracking information related to usages such as access date & time, device identification, operating system, browser type, and IP address. This information may be directly obtained by DGT or through third-party services. This service usage data helps our systems to ensure that our interface is accessible for users across all platforms and can aid during criminal investigations."
        />
        <Privacy.DocsTitle
          className={s.third_block}
          content="Why does DGT collect this information"
        />
        <Privacy.DocsTextBlockWithTitle
          title="To provide and maintain our services"
          content={`When you create a DGT Account, you provide us with personal information that includes your contact information (Email Address We use the information collected to deliver our services and verify user identity.
            We use the IP address and unique identifiers stored in your device’s cookies to help us authenticate your identity and provide our service. Given our legal obligations and system requirements, we cannot provide you with services without data like identification, contact information, and transaction-related information.
            a password). You can also choose to add a Google Authenticator account to be used for 2FA verification for improved security.`}
        />
        <Privacy.DocsTextBlockWithTitle
          title="To protect our users"
          content="We use the information collected to protect our platform, users’ accounts, and archives. We use IP addresses and cookie data to protect against automated abuse such as spam, phishing, and Distributed Denial of Service (DDoS) attacks."
        />
        <Privacy.DocsTextBlockWithTitle
          title="To comply with legal and regulatory requirements"
          content="Respect for the privacy and security of data you store with DGT informs our approach to complying with regulations, governmental requests, and user-generated inquiries. We will not disclose or provide any personal information to third-party sources without review from our legal case team and/or prior consent from the user."
        />
        <Privacy.DocsTextBlockWithTitle
          title="To measure site performance"
          content={`We actively measure and analyze data to understand how our services are used. This review activity is conducted by our operations team to continually improve our platform’s performance and to resolve issues with the user experience.
        We continuously monitor our systems’ activity information and communications with users to look for and quickly fix problems.`}
        />
        <Privacy.DocsTextBlockWithTitle
          title="To communicate with you"
          content="We use personal information collected, like an email address to interact with users directly when providing customer support on a ticket or to keep you informed on logins, transactions, and security. Without processing your personal information for confirming each communication, we will not be able to respond to your submitted requests, questions, and inquiries. All direct communications are kept confidential and reviewed internally for accuracy."
        />
        <Privacy.DocsTitle className={s.fourth_block} content="How does DGT protect user data" />
        <Privacy.DocsTextBlock
          content={`DGT has implemented a number of security measures to ensure that your information is not lost, abused, or altered. Our data security measures include, but are not limited to: PCI Scanning, Secured Sockets Layered encryption technology, pseudonymization, internal data access restrictions, and strict physical access controls to buildings & files. Please note that it is impossible to guarantee 100% secure transmission of data over the Internet nor method of electronic storage. As such, we request that you understand the responsibility to independently take safety precautions to protect your own personal information.
If you suspect that your personal information has been compromised, especially account and/or password information, please contact DGT customer service immediately.`}
        />
        <Privacy.DocsTitle className={s.fifth_block} content="How does DGT protect user data" />
        <Privacy.DocsText
          content={
            <>
              We are committed to respecting the freedoms and rights of all our DGT users who have
              placed their trust in our service. If you should have any questions or concerns
              regarding this Privacy Policy, or if you would like to file a Data Protection request,
              please contact us at{' '}
              <a
                className={s.link}
                target="_blank"
                href={`mailto:${helloSocials.email}`}
                rel="noreferrer"
              >
                {helloSocials.email}
              </a>
            </>
          }
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;

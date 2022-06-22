import { Privacy, Typography } from '@/components';

import s from './styles.module.scss';

const Terms = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Typography className={s.title} type="h1">
          Terms of Service
        </Typography>
        <Privacy.DocsText className={s.thanks} content="Thank you for visiting DGT" />
        <Privacy.DocsTextBlockWithTitle
          title="Welcome to DGT!"
          titleProps={{ color: 'red', weight: 'bold' }}
          content={`These are the terms and conditions that define the rules and regulations to use the DGT website: ${window.location.host}
          This website is the property of DGT, developed by the DGT development team.`}
        />
        <Privacy.DocsTitle className={s.small_block} content="Acceptance of the terms" />
        <Privacy.DocsTextBlock
          content={`You must be of legal age to abide by the agreement in order to accept the terms. By accessing this website we assume that you hereby accept the terms and conditions of this website. If you do not agree to the General Terms and conditions, do not continue to use any of our services of DGT.io.
You may accept the Terms or abide by the general agreement.
DGT referred collectively to “We” or “Us” or” Ourselves” or “Our” We refer to users of the website as “You” or “Users” or “Client”. You hereby bound to these terms.
Any of the above terminologies in singular/plural/or he/or she/are interchangeable and they refer to the above terminologies.`}
        />
        <Privacy.DocsTitle className={s.large_block} content="General terms" />
        <Privacy.DocsTextBlockWithTitle
          title="Severability"
          content="Each paragraph of these terms and conditions has separate functions. If any authority or court decides that any of the terms are against the law, the remaining part of the terms and conditions remain the same in full force and effect."
        />
        <Privacy.DocsTextBlockWithTitle
          title="Notification"
          content="We may send notice to you by email or post regarding the service and the website or it may be sent by any other mode. Such notices will be considered to be effective from the time of delivery or dispatch. If you send the notice, it will be considered effective when it is received by us."
        />
        <Privacy.DocsTextBlockWithTitle
          title="Modification of terms"
          content={`Respect for the privacy and security of data you store with DGT informs our approach to complying with We may or may not change the terms and conditions from time to time. You acknowledge and agree to a modification of terms. If you do not agree to the modification of terms, kindly do not access or continue to use our service. Kindly check all the updates on this page periodically.
            We comply with the applicable legal agreements to provide or send you the notice of updates or changes to these terms and conditions. We assume your continued use as your acceptance of the changes in the terms and conditions.
            , governmental requests, and user-generated inquiries. We will not disclose or provide any personal information to third-party sources without review from our legal case team and/or prior consent from the user.`}
        />
        <Privacy.DocsTitle className={s.small_block} content="Cookies" />
        <Privacy.DocsTextBlock
          content={`We make use of cookies and by accessing DGT.io, we assume that you agreed to make use of the cookies with the DGT privacy policy.
Most of the websites use cookies to collect user details in a temporary file to easily access the website for the next visit. It is implemented to make users comfortable using our website and to enable the proper functioning of certain areas.`}
        />
        <Privacy.DocsTitle className={s.small_block} content="License" />
        <Privacy.DocsTextBlock
          content={`As a user of this website, you are allowed to have non-exclusive, non-transferable, limited access to use the website.
DGT possesses the right to cancel the license at any time for any valid reason. You may access this website with the following restrictions:`}
        />
        <Privacy.DocsListComponent
          list={`You may use the website on your own computer for your personal and non-commercial use.
You are not allowed to republish any of the content, any part of the website, service/contest in any form
Not allowed to copy, sell, sub-license, or rent any part of the DGT.
You must not redistribute the content.
You are not allowed to use any device, software to interfere or interrupt or attempt to hinder the proper workflow or functionality of the website.`}
        />
        <Privacy.DocsTextBlock
          content={`Cyptosoftwares offers the opportunity to exchange your views in a certain part of the websites. Comments posted on this website reflect the views and opinions of the person who posted the comments and in no way, it reflects the views and opinions of DGT. DGT may not be responsible or liable for the comments posted on the website or not responsible for any liability, damage, or expense caused as a result of any comment on the website.
          DGT reserves all the rights to monitor the website and removes any unwanted comments which are considered to be inappropriate, offensive, or violate any rules or regulations of these terms and conditions of DGT.`}
        />
        <Privacy.DocsTitle className={s.small_block} content="Content service and ownership" />
        <Privacy.DocsTextBlock
          content={`The website may contain the content created by the DGT or any of our users. The content, graphics, compilation, digital conversation, design, contests, services, and all intellectual property rights including logos, names, related names, and symbols (referred to as “Intellectual Property”) are protected under copyright, trademark law, industrial property rights. Copyright infringement is strictly prohibited.
          If any of the above terms are not followed, accepted violates the terms and conditions as per the copyright law, trademark law and you abide by the legal liability for the same.`}
        />
        <Privacy.DocsTitle className={s.small_block} content="Hyperlinking to the website" />
        <Privacy.DocsText content="Below organization may hold the rights to link our website without any prior approval:" />
        <Privacy.DocsTextBlockWithTitle
          title="Government agencies"
          content={`Unless authorized by DGT, no one shall hyperlink the website or any part of the website (which may include the following parts but not limited to: logos, content, copyright material, branding) to their own website. Framing the website/ referencing the URL (Uniform Resource Locator) without any written permission or prior approval is strictly prohibited.
          We may approve the link request of the organization if we find that the following conditions are met:`}
        />
        <Privacy.DocsListComponent
          list={`The link should not look unfavorable to us or any of our accredited business
The organization should not have a negative impact on our business
The benefit to us with respect to the hyperlink
The presence of the link in the general information`}
        />
        <Privacy.DocsTitle className={s.small_block} content="Iframes" />
        <Privacy.DocsText content="You are not allowed to create any frames that affect or alter our visual representation or design or the appearance of our website without any prior written permission or approval" />
        <Privacy.DocsTitle className={s.small_block} content="Content liability" />
        <Privacy.DocsTextBlock
          content="We shall not be liable for any content that appears on your website. You hereby acknowledge and agree to protect us from all claims that may arise on your website. No link should be allowed on any website that may be considered as criminal, or copyright-infringing, or violating the terms and conditions of third party rights.
You specifically need to agree or cooperate with the website to cease any such activities against hyperlinking. You also acknowledge that you shall be liable for any such legal liabilities, damages, expenses associated therewith."
        />
        <Privacy.DocsTitle className={s.small_block} content="Rights reserved" />
        <Privacy.DocsText content="We reserve the right to remove any or all the links to our website. You accept to remove immediately as it is requested. We may change, amend the terms and conditions related to hyperlinking policy. We assume that by continuously linking to our website, you accept or agree to the updated terms and conditions of the hyperlinking policy" />
        <Privacy.DocsTitle
          className={s.small_block}
          content="Link removal request from our website"
        />
        <Privacy.DocsText content="If you find any link is not appropriate or offensive, you are allowed to inform or contact us for the removal request. We will consider your request and shall proceed only after examining the link and we are not obligated to respond to you immediately or directly" />
        <Privacy.DocsTitle className={s.small_block} content="Disclaimer" />
        <Privacy.DocsText
          content="as per the applicable law, we exclude all conditions, warranties, representations relating to our website to the maximum extent."
          color="red"
        />
        <Privacy.DocsText className={s.small_subtitle} content="The following will not:" />
        <Privacy.DocsListComponent
          list={`Exclude or avoid or limit your or our liabilities for death or any personal injury that occurred.
Exclude or avoid or limit your or our liabilities for fraudulent activities.
Exclude or avoid or limit your or our liabilities that may or may not fall under applicable law`}
        />
        <Privacy.DocsTitle className={s.small_block} content="Disclaimer for downloads" />
        <Privacy.DocsText
          content="Users or Visitors download any information at their own risk. Rock'n'Block not liable or no warranty for such downloads are free from viruses, worms, including but not limited to corrupting computer codes
As far as the website, services, information are provided to the users for free of cost, we will not be responsible for any natural damage or loss."
        />
      </div>
    </div>
  );
};

export default Terms;

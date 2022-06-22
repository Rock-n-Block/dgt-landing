import { FC, useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { ContactUsFormComponent } from '@/forms/ContactUsForm/component';
import APIs from '@/services/api';
import { ISendRequest } from '@/services/api/types';
import { clogData } from '@/utils';

import { SuccessBookModal } from '../modals';

export const availableContacts = ['Telegram', 'WhatsApp'] as const;
export type TAvailableContacts = typeof availableContacts[number];

export type ContactUsFormProps = {
  name: string;
  contact: string;
  contactType: TAvailableContacts;
  description: string;
  interests: Set<string>;
  productType: string;
  productStage: string;
};

export const ContactUsForm: FC = () => {
  const [isSuccessBookOpen, setIsSuccessBookOpen] = useState(false);

  const props: ContactUsFormProps = {
    name: '',
    contact: '',
    contactType: 'Telegram',
    description: '',
    interests: new Set(),
    productType: '',
    productStage: '',
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const FormWithFormik = withFormik<any, ContactUsFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => props,
    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, 'Too short').max(20, 'Too long').required('Please set your name'),
      contact: Yup.string()
        .min(3, 'Too short')
        .max(20, 'Too long').matches(phoneRegExp, 'Phone number is not valid')
        .required('Please add your contact data'),
    }),

    handleSubmit: async (values) => {
      try {
        const data: ISendRequest = {
          name: values.name,
          contact: `${values.contactType}: ${values.contact}`,
          message: values.description,
          interest: '',
          type: values.productType,
          stage: values.productStage,
        };
        const response = await APIs.emails.sendRequest(data);
        if (response.status === 200) {
          setIsSuccessBookOpen(true);
        }
      } catch (e) {
        alert(e);
        clogData('Submit contact form', e);
      }
    },

    displayName: 'ContactUsForm',
  })(ContactUsFormComponent);
  return (
    <>
      <FormWithFormik />
      <SuccessBookModal isOpen={isSuccessBookOpen} setIsOpen={setIsSuccessBookOpen} />
    </>
  );
};

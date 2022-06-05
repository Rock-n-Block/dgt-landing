import { FC } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { ContactUsFormComponent } from '@/forms/ContactUsForm/component';
import { clogData } from '@/utils';

export type ContactUsFormProps = {
  name: string;
  contact: string;
  contactType: string;
  description: string;
  interests: Set<string>;
  productType: string;
  productStage: string;
};

export const ContactUsForm: FC = () => {
  const props: ContactUsFormProps = {
    name: '',
    contact: '',
    contactType: 'Telegram',
    description: '',
    interests: new Set(),
    productType: '',
    productStage: '',
  };

  const FormWithFormik = withFormik<any, ContactUsFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => props,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, 'Too short')
        .max(20, 'Too long')
        .required('Please select an answer'),
      contact: Yup.string()
        .min(3, 'Too short')
        .max(20, 'Too long')
        .required('Please select an answer'),
      description: Yup.string().min(3, 'Too short').required('Please select an answer'),
      interests: Yup.array().min(1, 'Please select an answer'),
      type: Yup.string().required('Please select an answer'),
      stage: Yup.string().required('Please select an answer'),
    }),

    handleSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('contact', values.contact);
        formData.append('contact_type', values.contactType);
        formData.append('interests', Array.from(values.interests).join(', '));
        formData.append('type', values.productType);
        formData.append('stage', values.productStage);
      } catch (e) {
        clogData('Submit contact form', e);
      }
    },

    displayName: 'ContactUsForm',
  })(ContactUsFormComponent);
  return <FormWithFormik />;
};

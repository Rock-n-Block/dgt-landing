import { FC } from 'react';
import cn from 'clsx';
import { Field, Form, FormikProps } from 'formik';

import { ArrowUpIcon, TelegramIcon, WhatsAppIcon } from '@/assets/img';
import { Button, CustomDropdown, Input, Typography } from '@/components';
import { TOption } from '@/components/Dropdown';
import {
  availableContacts,
  ContactUsFormProps,
  TAvailableContacts,
} from '@/forms/ContactUsForm/container';

import s from './ContactUsForm.module.scss';

const contactToIcon = {
  Telegram: (
    <div className={s.icon}>
      <TelegramIcon />
    </div>
  ),
  WhatsApp: (
    <div className={s.icon}>
      <WhatsAppIcon />
    </div>
  ),
};

const fromOptionToProp = (options: TAvailableContacts[]): TOption[] => {
  return options.map((opt) => ({
    value: opt,
    label: opt,
    icon: contactToIcon[opt],
  }));
};

export const ContactUsFormComponent: FC<FormikProps<ContactUsFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  values,
  setFieldValue,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <Form className={s.form}>
      <div className={s.form_row}>
        <Field
          id="name"
          render={() => (
            <div className={s.input_container}>
              <Input
                id="name"
                className={cn(s.input, s.input_error)}
                placeholder="Your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Typography className={s.input_error} type="label2">
                  {errors.name}
                </Typography>
              )}
            </div>
          )}
        />
        <Field
          id="contact"
          render={() => (
            <div className={cn(s.input_container, s.contact)}>
              <Input
                id="contact"
                className={s.input}
                placeholder="Your contact"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contact}
                label={
                  !values.contact ? (
                    <Typography className={s.contact_placeholder} weight="medium" type="label3">
                      Your contact <span className={s.red}>*</span>
                    </Typography>
                  ) : (
                    ''
                  )
                }
              />
              <CustomDropdown
                options={fromOptionToProp([...availableContacts])}
                value={fromOptionToProp([values.contactType])[0]}
                onChange={(opt) => setFieldValue('contactType', opt.value)}
                wrapperClassName={s.drop_contact}
                onlyIcon
              />
              {touched.contact && errors.contact && (
                <Typography className={s.input_error} type="label2">
                  {errors.contact}
                </Typography>
              )}
            </div>
          )}
        />
      </div>
      <Field
        id="description"
        render={() => (
          <div className={s.input_container}>
            <Input
              type="textarea"
              id="description"
              className={cn(s.input, s.input_textarea)}
              placeholder="Briefly describe your project or idea"
              onChange={handleChange}
              value={values.description}
            />
            {touched.description && errors.description && (
              <Typography className={s.input_error} type="label2">
                {errors.description}
              </Typography>
            )}
          </div>
        )}
      />
      <div className={s.terms}>
        <Typography className={s.terms_text} weight="normal" color="grey" type="label1">
          By using the service, you accept the
        </Typography>
        <Button className={s.terms_link} variant="text" href="/terms">
          Terms or Service
        </Button>
      </div>
      <div className={s.submit}>
        <Button
          disabled={isSubmitting}
          className={s.submit_btn}
          variant="filled"
          onClick={handleSubmit}
        >
          Submit Request
        </Button>
        <Button variant="text" onClick={handleSubmit}>
          <ArrowUpIcon className={s.submit_arrow} />
        </Button>
      </div>
    </Form>
  );
};

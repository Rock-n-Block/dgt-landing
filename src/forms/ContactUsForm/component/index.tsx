import { FC, useState } from 'react';
import cn from 'clsx';
import { Field, Form, FormikProps } from 'formik';
import CheckBox from 'rc-checkbox';

import { ArrowUpIcon } from '@/assets/img';
import { Button, Input, Typography } from '@/components';
import { ContactUsFormProps } from '@/forms/ContactUsForm/container';

import s from './ContactUsForm.module.scss';

type CheckTypes = 'fullPackage' | 'influenceMarketing' | 'communityManagement' | 'socialMedia';

type ChoiceItem = {
  label: string;
  value: CheckTypes;
};

export type Checks = {
  [key in CheckTypes]: boolean;
};

const interests: ChoiceItem[] = [
  {
    label: 'Full Marketing Package',
    value: 'fullPackage',
  },
  {
    label: 'Influence Marketing &PR',
    value: 'influenceMarketing',
  },
  {
    label: 'Community Management',
    value: 'communityManagement',
  },
  {
    label: 'Social Media Marketing',
    value: 'socialMedia',
  },
];

const productTypes = ['DeFi', 'NFT', 'ICO/Token Sale', 'Exchange/DEX', 'Other'];
const productStages = ['Pre-launch', 'My product is live'];

export const ContactUsFormComponent: FC<FormikProps<ContactUsFormProps>> = ({
  touched,
  errors,
  handleChange,
  values,
  handleSubmit,
}) => {
  const [checks, setChecks] = useState<Checks>({
    fullPackage: false,
    influenceMarketing: false,
    communityManagement: false,
    socialMedia: false,
  });

  const handleCheck = (checkName: CheckTypes) => {
    return () => {
      setChecks((prev) => ({ ...prev, [checkName]: !prev[checkName] }));
    };
  };

  return (
    <Form name="contact-us" className={s.form}>
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
                value={values.name}
                label={
                  values.name && (
                    <Typography type="label3">
                      your name <span>*</span>
                    </Typography>
                  )
                }
              />
              {touched.name && errors.name && (
                <Typography className={s.error} type="label2">
                  {errors.name}
                </Typography>
              )}
            </div>
          )}
        />
        <Field
          id="contact"
          render={() => (
            <div className={s.input_container}>
              <Input
                id="contact"
                className={s.input}
                placeholder="Your contact"
                onChange={handleChange}
                value={values.contact}
                label={
                  values.contact && (
                    <Typography type="label3">
                      your contact <span>*</span>
                    </Typography>
                  )
                }
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
              label={
                values.description && (
                  <Typography type="label3">
                    your name <span>*</span>
                  </Typography>
                )
              }
            />
            {touched.description && errors.description && (
              <Typography className={s.input_error} type="label2">
                {errors.description}
              </Typography>
            )}
          </div>
        )}
      />
      <div className={s.choices}>
        <div className={s.choice}>
          <Typography type="label1" className={s.choice_title}>
            I&apos;m interested in...&nbsp;<span>*</span>
          </Typography>
          {interests.map((item) => (
            <div key={item.value} className={s.choice_item}>
              <CheckBox
                className={s.checkbox}
                checked={checks[item.value]}
                onChange={handleCheck(item.value)}
              />
              <Typography type="label2">{item.label}</Typography>
            </div>
          ))}
        </div>
        <div className={s.choice}>
          <Typography type="label1" className={s.choice_title}>
            My product type is...&nbsp;<span>*</span>
          </Typography>
          {productTypes.map((item) => (
            <div key={item} className={s.choice_item}>
              <input type="radio" id={item} name="type" value={item} className={s.radio} />
              <Typography type="label2">{item}</Typography>
            </div>
          ))}
        </div>
        <div className={s.choice}>
          <Typography type="label1" className={s.choice_title}>
            Stage of my product...&nbsp;<span>*</span>
          </Typography>
          {productStages.map((item) => (
            <div key={item} className={s.choice_item}>
              <input type="radio" id={item} name="stage" value={item} className={s.radio} />
              <Typography type="label2">{item}</Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={s.terms}>
        <Typography type="label1">By using the service, you accept the</Typography>
        <Button variant="text" href="/terms">
          Terms or Service
        </Button>
      </div>
      <div className={s.submit}>
        <Button variant="filled" onClick={handleSubmit}>
          Submit Request
        </Button>
        <ArrowUpIcon />
      </div>
    </Form>
  );
};

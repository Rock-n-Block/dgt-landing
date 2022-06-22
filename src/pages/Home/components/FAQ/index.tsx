import { useMemo } from 'react';
import cn from 'clsx';

import { ArrowRightDown } from '@/assets/img';
import { Typography } from '@/components';

import { Accordion, AccordionItem, AccordionItemState } from './components/Accordion';
import { faq } from './FAQ.mock';

import s from './FAQ.module.scss';

const FAQHeadFactory = (question: string) => {
  const FAQHead = ({ isOpen }: AccordionItemState) => (
    <div className={s.head_wrapper}>
      <Typography className={s.head_wrapper_q} color="red" type="label2">
        Q:
      </Typography>
      <Typography
        className={s.head_wrapper_question}
        color={isOpen ? 'red' : 'black'}
        type="label2"
      >
        {question}
      </Typography>
      <div className={s.head_wrapper_arrow}>
        <ArrowRightDown className={cn(s.arrow, { [s.active]: isOpen })} />
      </div>
    </div>
  );

  return FAQHead;
};

const FAQBodyFactory = (answers: string[]) => {
  const FAQBody = () => (
    <div className={s.body_wrapper}>
      <div className={s.body_wrapper_content}>
        {answers.map((answer) => (
          <Typography className={s.body_wrapper_paragraph} key={answer} type="label2">
            {answer}
          </Typography>
        ))}
      </div>
    </div>
  );
  return FAQBody;
};

export const FAQ = () => {
  const items = useMemo(
    () =>
      faq.map<AccordionItem>((faqItem) => ({
        title: FAQHeadFactory(faqItem.question),
        content: FAQBodyFactory(faqItem.answer),
        wrapperClassName: s.body_underline,
      })),
    [],
  );
  return (
    <div className={s.wrapper}>
      <Typography className={s.title} type="h3">
        FAQ
      </Typography>
      <Accordion items={items} />
    </div>
  );
};

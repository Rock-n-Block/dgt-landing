import { ReactElement } from 'react';
import cn from 'clsx';

import { Typography, TypographyProps } from '../Typography';

import s from './styles.module.scss';

interface DocsTitleProps extends Partial<TypographyProps> {
  content: string | ReactElement;
}

interface DocsTextBlockProps extends Partial<TypographyProps> {
  content: string;
}

interface DocsTextBlockWithTitleProps {
  content: string;
  title: string;
  contentProps?: Partial<TypographyProps>;
  titleProps?: Partial<TypographyProps>;
}

interface DocsListComponentProps {
  list: (string | ReactElement)[] | string;
}

const excludeField = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as any)),
  ) as Pick<T, K>;
};

const DocsTitle = ({ content, className, ...rest }: DocsTitleProps) => {
  return (
    <Typography className={cn(s.docs_title, className)} color="red" type="h4" {...rest}>
      {content}
    </Typography>
  );
};

const DocsSubTitle = ({ content, className, ...rest }: DocsTitleProps) => {
  return (
    <Typography className={cn(s.docs_subtitle, className)} type="body1" weight="medium" {...rest}>
      {content}
    </Typography>
  );
};

const DocsText = ({ content, className, ...rest }: DocsTitleProps) => {
  return (
    <Typography className={cn(s.docs_text, className)} weight="normal" type="body1" {...rest}>
      {content}
    </Typography>
  );
};

const DocsListComponent = ({ list, ...rest }: DocsListComponentProps) => {
  if (Array.isArray(list)) {
    return (
      <ul className={s.list_wrapper}>
        {list.map((el) => (
          <li className={s.list_element} key={el.toString()}>
            <DocsText className={s.list_element_content} content={el} {...rest} />
          </li>
        ))}
      </ul>
    );
  }
  const points = list.split('\n').filter((point) => point.length > 0);
  return (
    <ul className={s.list_wrapper}>
      {points.map((el) => (
        <li className={s.list_element} key={el.toString()}>
          <DocsText className={s.list_element_content} content={el} {...rest} />
        </li>
      ))}
    </ul>
  );
};

const DocsTextBlock = ({ content, ...rest }: DocsTextBlockProps) => {
  const paragraphs = content.split('\n').filter((paragraph) => paragraph.length > 0);
  return (
    <>
      {paragraphs.map((paragraph) => (
        <DocsText key={paragraph} content={paragraph} {...rest} />
      ))}
    </>
  );
};

const DocsTextBlockWithTitle = ({
  content,
  title,
  contentProps,
  titleProps,
}: DocsTextBlockWithTitleProps) => {
  return (
    <>
      <DocsSubTitle
        className={cn(s.block_title, titleProps?.className)}
        content={title}
        {...(titleProps ? excludeField(titleProps, ['className']) : titleProps)}
      />
      <DocsTextBlock
        className={cn(s.block_content, contentProps?.className)}
        content={content}
        {...(contentProps ? excludeField(contentProps, ['className']) : contentProps)}
      />
    </>
  );
};

export const Privacy = {
  DocsTitle,
  DocsSubTitle,
  DocsText,
  DocsTextBlock,
  DocsListComponent,
  DocsTextBlockWithTitle,
};

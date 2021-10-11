import React, { FC, useRef } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './form.module.scss';
import { FormLabel, Input, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { ContactFormData } from '@/../../infrastructure/interfaces/Forms/Contact';
import { CHECK_IF_EMAIL_REGEX } from '@/../../utils/constants';
import { handleSendEmail } from '@/../../repositories/contact';
import Recaptcha from 'react-google-invisible-recaptcha';

const defaultValues: ContactFormData = {
  email: '',
  fullName: '',
  message: '',
};

const index: FC = () => {
  const { dictionary } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
  } = useForm<ContactFormData>({ defaultValues });
  const recaptchaRef = useRef<Recaptcha>(null);

  const onSubmit = (): void => {
    recaptchaRef.current.execute();
  };

  const onRecaptchaResolved = async (): Promise<void> => {
    try {
      handleSendEmail(getValues());
      reset();
    } catch (error) {
      console.log(error); // TODO: Provide some error toast
    }
  };

  return (
    <form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)}>
      <FormLabel
        classes={{
          root: `${styles.contact__form__label__custom} ${styles.contact__form__label__custom__email}`,
        }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              classes={{
                root: styles.contact__form__customInputRoot,
                focused: styles.contact__form__customInputFocused,
                underline: styles.contact__form__customInputUnderline,
                input: styles.contact__form__customInput,
              }}
              placeholder={dictionary.forms.mainContactForm.fields.email.label}
              {...field}
            />
          )}
          rules={{
            required: true,
            pattern: {
              value: CHECK_IF_EMAIL_REGEX,
              message:
                dictionary.forms.mainContactForm.fields.email.validationError,
            },
          }}
        />
        {errors.email && errors.email.type === 'pattern' && (
          <span className={styles.contact__form__validationError}>
            {dictionary.forms.mainContactForm.fields.email.validationError}
          </span>
        )}
        {errors.email && errors.email.type === 'required' && (
          <span className={styles.contact__form__validationError}>
            {dictionary.forms.common.fieldRequired}
          </span>
        )}
      </FormLabel>

      <FormLabel
        classes={{
          root: `${styles.contact__form__label__custom} ${styles.contact__form__label__custom__fullName}`,
        }}
      >
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder={
                dictionary.forms.mainContactForm.fields.fullName.label
              }
              classes={{
                root: styles.contact__form__customInputRoot,
                focused: styles.contact__form__customInputFocused,
                underline: styles.contact__form__customInputUnderline,
                input: styles.contact__form__customInput,
              }}
              {...field}
            />
          )}
          rules={{ required: true }}
        />
        {errors.fullName && errors.fullName.type === 'required' && (
          <span className={styles.contact__form__validationError}>
            {dictionary.forms.common.fieldRequired}
          </span>
        )}
      </FormLabel>

      <FormLabel
        classes={{
          root: `${styles.contact__form__label__custom} ${styles.contact__form__label__custom__message}`,
        }}
      >
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Input
              className={styles.contact__form__textarea}
              classes={{ root: styles.contact__form__customInputRoot }}
              placeholder={
                dictionary.forms.mainContactForm.fields.message.label
              }
              {...field}
              multiline
              rows={5}
            />
          )}
          rules={{ required: true }}
        />
        {errors.message && errors.message.type === 'required' && (
          <span className={styles.contact__form__validationError}>
            {dictionary.forms.common.fieldRequired}
          </span>
        )}
      </FormLabel>
      <Recaptcha
        ref={recaptchaRef}
        sitekey={process.env.siteKey}
        onResolved={onRecaptchaResolved}
      />

      <div>
        <button
          type="submit"
          className={`${styles.btn} ${styles['btn--outline']} ${styles.contact__form__btn}`}
        >
          {dictionary.common.buttons.submit}
        </button>
      </div>
    </form>
  );
};

export default index;

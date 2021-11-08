import React, { FC, useRef } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './form.module.scss';
import { FormLabel, Input } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { SubscribeFormData } from '@/../../infrastructure/interfaces/Forms/Contact';
import { CHECK_IF_EMAIL_REGEX } from '@/../../utils/constants';
import { handleAddSubscriber } from '@/../../repositories/contact';
import ReCAPTCHA from 'react-google-recaptcha';

const defaultValues: SubscribeFormData = {
  email: '',
  name: '',
};

const index: FC = () => {
  const { dictionary } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
  } = useForm<SubscribeFormData>({ defaultValues });
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = (): void => {
    recaptchaRef.current.execute();
  };

  const onRecaptchaResolved = async (): Promise<void> => {
    try {
      handleAddSubscriber(getValues());
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.subscribe__form} onSubmit={handleSubmit(onSubmit)}>
      <FormLabel
        classes={{
          root: `${styles.subscribe__form__label__custom} ${styles.contact__form__label__custom__fullName}`,
        }}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder={
                dictionary.forms.mainContactForm.fields.fullName.label
              }
              classes={{
                root: styles.subscribe__form__customInputRoot,
                input: styles.subscribe__form__customInput,
              }}
              {...field}
              id="input-field"
            />
          )}
          rules={{ required: true }}
        />

        <span className={styles.subscribe__form__validationError}>
          {errors.name &&
            errors.name.type === 'required' &&
            dictionary.forms.common.fieldRequired}
        </span>
      </FormLabel>

      <FormLabel
        classes={{
          root: `${styles.subscribe__form__label__custom} ${styles.contact__form__label__custom__email}`,
        }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              classes={{
                root: styles.subscribe__form__customInputRoot,
                input: styles.subscribe__form__customInput,
              }}
              placeholder={dictionary.forms.mainContactForm.fields.email.label}
              {...field}
              id="input-field"
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

        <span className={styles.subscribe__form__validationError}>
          {errors.email &&
            errors.email.type === 'required' &&
            dictionary.forms.common.fieldRequired}
          {errors.email &&
            errors.email.type === 'pattern' &&
            dictionary.forms.mainContactForm.fields.email.validationError}
        </span>
      </FormLabel>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.SITE_KEY}
        size="invisible"
        onChange={onRecaptchaResolved}
      />
      <button
        type="submit"
        className={`${styles.btn} ${styles['btn--outline']}`}
      >
        {dictionary.common.buttons.subscribe}
      </button>
    </form>
  );
};

export default index;

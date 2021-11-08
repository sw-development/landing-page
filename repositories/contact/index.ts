import { ContactFormData, SubscribeFormData } from '@/../../infrastructure/interfaces/Forms/Contact';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

export const handleSendEmail = (
  data: ContactFormData
): Promise<EmailJSResponseStatus> => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    {
      message: data.message,
      fullName: data.fullName,
      reply_to: data.email,
    },
    process.env.NEXT_PUBLIC_EMAIL_USER_ID
  );
};

export const handleAddSubscriber = (
  data: SubscribeFormData
): Promise<EmailJSResponseStatus> => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    {
      email: data.email,
      name: data.name,
    },
    process.env.NEXT_PUBLIC_EMAIL_USER_ID
  );
}; // TODO: CO bedziemy robić z tymi osobami co wysyłają się do suba? :O
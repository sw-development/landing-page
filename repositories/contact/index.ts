import { ContactFormData, SubscribeFormData } from '@/../../infrastructure/interfaces/Forms/Contact';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

export const handleSendEmail = (
  data: ContactFormData
): Promise<EmailJSResponseStatus> => {
  return emailjs.send(
    process.env.emailServiceId,
    process.env.emailTemplateId,
    {
      message: data.message,
      fullName: data.fullName,
      reply_to: data.email,
    },
    process.env.emailUserId
  );
};

export const handleAddSubscriber = (
  data: SubscribeFormData
): Promise<EmailJSResponseStatus> => {
  return emailjs.send(
    process.env.emailServiceId,
    process.env.emailTemplateId,
    {
      email: data.email,
      name: data.name,
    },
    process.env.emailUserId
  );
}; // TODO: CO bedziemy robić z tymi osobami co wysyłają się do suba? :O
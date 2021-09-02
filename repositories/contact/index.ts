import { ContactFormData } from '@/../../infrastructure/interfaces/Forms/Contact';
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

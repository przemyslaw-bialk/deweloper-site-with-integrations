"use server";

import { sendContactEmail } from "@/services/contact.service";

type ContactFormData = {
  name: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
};

export const sendContactEmailAction = async (data: ContactFormData) => {
  await sendContactEmail(data);
};

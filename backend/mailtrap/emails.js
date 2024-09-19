import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [
    {
      email: email,
    },
  ];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
  } catch (error) {
    throw new Error(`Failed to send verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipients = [
    {
      email: email,
    },
  ];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Welcome to our platform",
      template_uuid: "5bfcdd6c-6c79-4759-8857-e52deb7dbade",
      template_variables: {
        name: name,
      },
      category: "Welcome Email",
    });
  } catch (error) {
    throw new Error(`Failed to send welcome email: ${error}`);
  }
};

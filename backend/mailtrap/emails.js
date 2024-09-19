import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";
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
      template_uuid: "5bfcdd6c-6c79-4759-8857-e52deb7dbade",
      template_variables: {
        name: name,
      },
    });
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Failed to send welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetUrl) => {
  const recipients = [
    {
      email: email,
    },
  ];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
        "{resetURL}",
        resetUrl
      ),
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error.message);

    throw new Error(`Failed to send password reset email: ${error.message}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipients = [
    {
      email: email,
    },
  ];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset success email`, error.message);

    throw new Error(`Failed to send password reset success email: ${error.message}`);
  }
};
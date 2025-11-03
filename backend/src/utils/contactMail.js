import nodemailer from "nodemailer";

export const contactMail = async (name, email, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,      // your Brevo login email
        pass: process.env.BREVO_API_KEY,   // your Brevo SMTP key
      },
    });

    await transporter.sendMail({
      from: `"Simplified Meals" <${process.env.BREVO_USER}>`,
      to: "vaibhav82004@gmail.com", // your personal inbox
      subject: `From Simplified Meals - ${subject}`,
      text: `${message}\n\nRegards,\n${name}\n${email}`,
    });

    console.log("✅ Contact mail sent successfully from:", email);
  } catch (err) {
    console.error("❌ Contact mail failed:", err);
    throw err;
  }
};

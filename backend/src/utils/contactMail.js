import nodemailer from "nodemailer";



export const contactMail = async (name,email,subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "vaibhav82004@gmail.com",
    subject: `From Simplified Meals - ${subject}`,
    text: `${message} \nRegards - ${email}\n ${name}`
  });
};

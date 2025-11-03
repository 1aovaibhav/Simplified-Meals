import axios from "axios";

export const contactMail = async (name, email, subject, message) => {
  try {
    const data = {
      sender: { name: "Simplified Meals", email: process.env.BREVO_USER },
      to: [{ email: "vaibhav82004@gmail.com" }],
      subject: `From Simplified Meals - ${subject}`,
      textContent: `${message}\n\nRegards - ${email}\n${name}`,
    };

    const res = await axios.post("https://api.brevo.com/v3/smtp/email", data, {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
    });

    console.log("✅ Email sent successfully", res.data);
  } catch (err) {
    console.error("❌ OTP email failed:", err.message);
  }
};

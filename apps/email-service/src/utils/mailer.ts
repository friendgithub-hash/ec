import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground",
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const gmail = google.gmail({ version: "v1", auth: oauth2Client });

const sendMail = async ({
  email,
  subject,
  text,
}: {
  email: string;
  subject: string;
  text: string;
}) => {
  const message = [`To: ${email}`, `Subject: ${subject}`, "", text].join("\n");

  const encodedMessage = Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const res = await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: encodedMessage,
    },
  });

  console.log("MESSAGE SENT:", res.data);
};

export default sendMail;

// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail", // Shortcut for Gmail's SMTP settings - see Well-Known Services
//   auth: {
//     type: "OAuth2",
//     user: "friendchg@gmail.com",
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//   },
// });

// const sendMail = async ({
//   email,
//   subject,
//   text,
// }: {
//   email: string;
//   subject: string;
//   text: string;
// }) => {
//   const res = await transporter.sendMail({
//     from: '"friendchg" <friendchg@gmail.com>',
//     to: email,
//     subject: subject,
//     text: text,
//   });

//   console.log("MESSAGE SENT:", res);
// };

// export default sendMail;

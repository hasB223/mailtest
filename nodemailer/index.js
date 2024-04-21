const { configDotenv } = require("dotenv");
const nodemailer = require("nodemailer");
configDotenv();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  console.log("start");

  // Record the start time before sending the email
  const startTime = Date.now();

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME}" ${process.env.MAIL_FROM_ADDRESS}`, // sender address
    to: "hasbullah.work@gmail.com", // list of receivers
    subject: "Hello, this is testing", // Subject line
    text: "Hello world", // plain text body
    html: "<b>Hello world?</b> <p></p>", // html body
  });

  // Calculate the time difference after the email is sent
  const endTime = Date.now();
  const elapsedTimeSeconds = (endTime - startTime) / 1000; // Convert milliseconds to seconds
  console.log("Message sent: %s", info.messageId);
  console.log("Email delivery time:", elapsedTimeSeconds, "seconds");
}

main().catch(console.error);

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL,
        pass: process.env.APPPASSWORD
    }
})

const sendEmailToRecipient = (fromEmail, toEmail, carboncopy, subject, mailBody, attachement) => {
    if(fromEmail && toEmail && subject){
        let mailOptions = {
            from: fromEmail,
            to: toEmail,
            cc: carboncopy,
            subject: subject,
            html: `${mailBody}`,
            // attachments: [
            //     {
            //         filename: "quote_detail.png",
            //         content: buff,
            //         encoding: 'base64'
            //     }
            // ]
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) return { error };
            else return { 'Email sent to the user ': info.response };
        });
    }else{
        console.log("Some fields are pending");
    }
}

module.exports = sendEmailToRecipient
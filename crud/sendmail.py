import random
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib



def sendmail(mail:str):
    s = smtplib.SMTP('smtp.gmail.com',587)
    otp = str(random.randint(100000,999999))
    msg = MIMEMultipart()
    sender = "genztitans.641@gmail.com"
    password = "zpraumqsdfeyfhex"
    receiver = mail
    m = f"""\
            Subject: Forget Password?
            To: {receiver}
            From: {sender}\n\n"""
    m+= f"Here is your OTP for changing password {otp}"
    msg.attach(MIMEText(m, 'plain'))
            # Set up the SMTP server
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(sender, password)
    # Send the email
    text = msg.as_string()
    print(text)
    server.sendmail(sender,receiver, text)
    server.quit()
    return 1,otp

# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client

# Set environment variables for your credentials
# Read more at http://twil.io/secure

account_sid = "AC08a26500ef75d1132934ea016a37c8bf"
auth_token = "1df2cefb568f962243a611877c20e1eb"
client = Client(account_sid, auth_token)

call = client.calls.create(
  url="http://demo.twilio.com/docs/voice.xml",
  to="+14129180553",
  from_="+14434807564"
)

#currently, need to add each number you want to call to verified number section in twilio to place it (free trial)
print(call.sid)





#hume ai presentation




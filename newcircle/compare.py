import csv, json

ptt = json.load(open('contentver.json'))
print("location: " + len(ptt["table"]))


pixnet = json.load(open('pixnet.json'))
print(len(pixnet["articles"]))




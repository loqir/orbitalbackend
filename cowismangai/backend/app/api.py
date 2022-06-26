from tokenize import String
from typing import final
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import tweepy
import json
from textblob import TextBlob
import re
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

dic = {"Ticker":"temp"}

# @app.get("/", tags=["root"])
# async def read_root() -> dict:
#     return {"message": "Welcome to your todo list."}

@app.get("/stocksearch", tags=["stocksearch"])
async def get_dic():
    stock = dic["Ticker"]
    return stock
  
    

@app.post("/stocksearch", tags=["stocksearch"])
async def change_dic(input: dict):
    variable = input['ticker']
    dic["Ticker"] = variable
    all_tweets = twit(variable)
    final_score = 0
    analyzer = SentimentIntensityAnalyzer()
    for i in all_tweets.values():
        # ts = TextBlob(i).sentiment
        # final_score += ts.polarity
        # print(ts.polarity)
        vs = analyzer.polarity_scores(i)
        final_score += vs["compound"]
    print(final_score/len(all_tweets))
    return json.dumps(final_score/len(all_tweets))


def clean(txt):
    txt = re.sub(r'@[A-Za-z0-9]+', '',txt) #Removed @mentions
    txt = re.sub(r'#','',txt) #Removing the '#' symbol
    txt = re.sub(r'RT[\s]+', '', txt) # Removing RT
    txt = re.sub(r'https?:\/\/\S+', '', txt) # Remove the hyper link
    return txt

def twit(stock):
    auth = tweepy.OAuthHandler(api_key, api_key_secret)
    auth.set_access_token(access_token, access_token_secret)
    result = {}
    api = tweepy.API(auth)

    cursor = tweepy.Cursor(api.search_tweets, q=stock, lang="en", result_type="mixed",
                        tweet_mode="extended").items(100)
    for i, value in enumerate(cursor):
        result[i] = clean(value.full_text)

    return result

# json.dumps



api_key="MDuBpY2HoJjO2pyJ1DtOh6L1Y"
api_key_secret="eG3vwiyEj9WRa5MozSnYnyHpjtqHME9SydGF06JwBeiBs6qN7t"
bearer_token="AAAAAAAAAAAAAAAAAAAAAMaAdgEAAAAAULr7gXv1%2BBvh9l3VqbdrblJr%2FuA%3DVMAa4v7EOsE2cJPuDUslpi8iEpAzbDhNrzCTpCsLyRwoKBPc4x"
access_token="1535555326249799681-gmCTsABAfRRU2BRcg17R1YR1uAiwLz"
access_token_secret="3J9zH73jvB3FE1SUceZhSd6vLHePDl7wh0uDrYyOuGM31"

# api_key = config.api_key
# api_key_secret = config.api_key_secret

# access_token = config.access_token
# access_token_secret = config.access_token_secret

# authentication
auth = tweepy.OAuthHandler(api_key, api_key_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)
print(dic["Ticker"])

cursor = tweepy.Cursor(api.search_tweets, q=dic["Ticker"], lang="en", result_type="popular",
                       tweet_mode="extended").items(100)
for i in cursor:
    print(i.full_text)
    print("created at", i.created_at)




# # create dataframe
# columns = ['Time', 'User', 'Tweet']
# data = []
# for tweet in public_tweets:
#     data.append([tweet.created_at, tweet.user.screen_name, tweet.text])

# df = pd.DataFrame(data, columns=columns)

# df.to_csv('tweets.csv')
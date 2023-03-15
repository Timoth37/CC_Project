import pymongo

# Connexion Informations to Existing MongoDB container
HOST = "currencyapp-projectDB-1"
PORT = 27017
DB_NAME = "projectdb"

# Connexion to container using pymongo
mongo_client = pymongo.MongoClient(HOST, PORT)
mongo_db = mongo_client[DB_NAME]

#Currencies collection
mongo_collection = mongo_db['currencies']
currencies = [
    {"iso": "EUR", "name": "Euro", "rate": 0.94153},
    {"iso": "USD", "name": "Dollars Américain", "rate": 1},
    {"iso": "GBP", "name": "Livre Britannique", "rate": 0.83230},
    {"iso": "JPY", "name": "Yen Japonnais", "rate": 136.13},
    {"iso": "CAD", "name": "Dollars Canadien", "rate": 1.3606},
    {"iso": "AUD", "name": "Dollars Australien", "rate": 1.4802},
    {"iso": "CHF", "name": "Franc Suisse", "rate": 0.93815},
    {"iso": "INR", "name": "Roupie Indienne", "rate": 81.690}
]

# Insert datas into collection
mongo_collection.insert_many(currencies)








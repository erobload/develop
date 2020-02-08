import pymongo

class Mongo():
    
    def __init__(self, db_name, collection__name):
        #mongodb へのアクセスを確立
        client = pymongo.MongoClient('0.0.0.0', 27017)

        # データベースを作成
        db = client[db_name]

        # コレクションを作成
        self.co = db[collection__name]

    def insert(self, model):
        self.co.insert_many(model)




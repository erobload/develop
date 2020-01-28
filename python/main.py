import scraping
import mongo
import yaml

class Main():
    def __init__(self):
        self.Models = []

        # 設定ファイル読み込み
        with open('config.yml') as file:
            self.config = yaml.safe_load(file.read())
        
        for target in self.config['targets'] :

            if target['status'] :
                model = scraping.Model(target['name'], target['root'], target['url'], target['params'] ,target['contents'])
                self.Models.append(model)

    def run(self):
        for model in self.Models:
            model = model.run()
            mongo.Mongo('erobloadPortal', 'contents').insert(model)
            print(len(model))
            print('件入りました')

if __name__ == '__main__':

    print("start")
    main = Main()
    main.run()
    exit()
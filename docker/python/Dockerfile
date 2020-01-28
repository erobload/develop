FROM python:3.7.3

RUN apt-get update

RUN apt-get install -y vim less
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools

RUN pip install requests
RUN pip install BeautifulSoup4
RUN pip install lxml
RUN pip install pymongo
RUN pip install PyYAML

WORKDIR /app
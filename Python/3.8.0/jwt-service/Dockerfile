FROM python:3.8.0

WORKDIR /usr/src/app

COPY requirements.txt ./
COPY *.py ./
RUN pip install --no-cache-dir -r requirements.txt
VOLUME [ "./" ]

CMD [ "python", "./hello.py" ]

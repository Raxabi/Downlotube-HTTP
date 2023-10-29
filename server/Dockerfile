FROM python:bookworm

WORKDIR /server

COPY . .

EXPOSE 5000

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "flask", "--app", "main", "run", "-h", "0.0.0.0", "-p", "5000"]
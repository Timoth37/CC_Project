FROM python

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt && rm requirements.txt
COPY script.py .

ENTRYPOINT ["python", "script.py"]


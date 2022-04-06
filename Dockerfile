FROM python:3.9.5
ARG PROJECT_DIR="/config"
COPY . /home/practice-django
WORKDIR /home/practice-django
RUN pip install --upgrade pip && pip install -r requirements.txt
CMD python manage.py runserver 0.0.0.0:8000 --settings=config.settings
EXPOSE 8000
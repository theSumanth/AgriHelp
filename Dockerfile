# Build frontend app
FROM node:16-alpine as frontend-build
WORKDIR /app
COPY ./client/package.json ./
RUN npm install --legacy-peer-deps
COPY ./client .
RUN npm run build


# Build Backend (Flask)
FROM python:3.9

COPY ./server/requirements.txt /app/requirements.txt
WORKDIR /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt


COPY ./server /app
COPY --from=frontend-build /app/build ./build
EXPOSE 5000

CMD [ "gunicorn", "--bind", "0.0.0.0:5000", "-w", "2" , "app:app"]
# REST API project


## Opportunities 

The project presents an API where Token authorization is implemented, the user can create a recipe with ingredients, tags, and you can also upload photos to them. This REST API uses CRUD operations.

### Technology

Python, Django, Django Rest Framework, PostgreSQL, Test Drive Development, AWS, Docker, Nginx

### Use the following commands to run docker-compose on your computer or if you want run AWS server open deployment.md file:

```sh
docker-compose up
```

### Run test and flake8
```sh
docker-compose run --rm app sh -c "python manage.py test && flake8"
```

### Maildev is used to test sending emails locally. To view sent emails:

1. Start all your conatiner include Maildev (if it is not already running).
2. Go to: [http://localhost:1080](http://localhost:1080) in your browser to view your emails.

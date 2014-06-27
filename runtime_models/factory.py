from django.db import models


class Person(models.Model):
    class Meta:
        app_label = 'runtime_models'
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)


def factory():
    return type('X', (), {'foo': lambda self: 'foolambda'})

if __name__ == '__main__':
    X = factory()
    print(X, X().foo())
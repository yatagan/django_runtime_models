from django.db import models


class RuntimeModelBase(models.Model):
    pass


class RuntimeModel(models.Model):
    model = models.ForeignKey(RuntimeModelBase)
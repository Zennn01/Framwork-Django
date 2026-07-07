from django.db import models

class Post(models.Model):
    text = models.TextField()

    def __str__(self):
        return self.text[:50]

class Accommodation(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    rating_score = models.FloatField(default=0.0)
    rating_text = models.CharField(max_length=50, blank=True, null=True)
    review_count = models.IntegerField(default=0)
    old_price = models.IntegerField(blank=True, null=True)
    new_price = models.IntegerField()
    image = models.ImageField(upload_to='accommodations/', blank=True, null=True)
    badge = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name

class Hotel(Accommodation):
    pass

class Villa(Accommodation):
    pass

class Camping(Accommodation):
    pass

class Transportation(models.Model):
    name = models.CharField(max_length=255)
    departure = models.CharField(max_length=255, blank=True, null=True)
    destination = models.CharField(max_length=255, blank=True, null=True)
    price = models.IntegerField()
    image = models.ImageField(upload_to='transportations/', blank=True, null=True)
    badge = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name

class Travel(Transportation):
    pass

class SewaMobil(Transportation):
    pass

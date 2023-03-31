from django.db import models

class Blog(models.Model):
    title = models.TextField(null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title[0:20]

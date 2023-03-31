from django.urls import path
from . import views

urlpatterns = [
    path('blogs', views.getBlogs, name = "getBlogs"),
    path('blogs/create', views.createBlog, name = "createBlog"),
    path('blogs/<str:pk>', views.getBlog, name = "getBlog"),
    path('blogs/<str:pk>/update', views.updateBlog, name = "updateBlog"),
    path('blogs/<str:pk>/delete', views.deleteBlog, name = "deleteBlog"),
]

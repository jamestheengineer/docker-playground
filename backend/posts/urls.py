from django.urls import path

from . import views

urlpatterns = [
    path('', views.PostList.as_view(), name='posts'),
    path('<int:pk>/', views.PostDetail.as_view(), name='post-detail'),
    path('celery-test/', views.celery_test_view, name='celery-test')
]
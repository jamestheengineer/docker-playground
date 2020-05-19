from rest_framework import generics
from rest_framework.decorators import (
    authentication_classes,
    permission_classes
)
from .models import Post
from .serializers import PostSerializer


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostList(generics.ListAPIView):
    authentication_classes = ()
    permission_classes = ()
    queryset = Post.objects.all()
    serializer_class = PostSerializer
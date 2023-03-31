from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import BlogSerializer
from .models import Blog


@api_view(['GET'])
def getBlogs(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getBlog(request, pk):
    blogs = Blog.objects.get(id = pk)
    serializer = BlogSerializer(blogs, many = False)
    return Response(serializer.data)
        

@api_view(['POST'])
def createBlog(request):
    data = request.data
    blog = Blog.objects.create(
        title=data['title'],
        description=data['description']
    )
    serializer = BlogSerializer(blog, many = False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateBlog(request, pk):
    data = request.data
    blog = Blog.objects.get(id = pk)
    serializer = BlogSerializer(instance=blog, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteBlog(request, pk):
    blog = Blog.objects.get(id = pk)
    blog.delete()
    return Response("Blog deleted")

# @api_view(['GET', 'POST'])
# def getBlogs(request):
#     print(request.method)
#     if request.method == 'GET':
#         blogs = Blog.objects.all()
#         serializer = BlogSerializer(blogs, many = True)
#         return Response(serializer.data)

#     if request.method == 'POST':
#         data = request.data
#         blog = Blog.objects.create(
#         title=data['title'],
#         description=data['description']
#         )
#         serializer = BlogSerializer(blog, many = False)
#         return Response(serializer.data)
    
# @api_view(['GET', 'PUT', 'DELETE'])
# def getBlog(request, pk):
#     if request.method == 'GET':
#         blogs = Blog.objects.get(id = pk)
#         serializer = BlogSerializer(blogs, many = False)
#         return Response(serializer.data)

#     if request.method == 'PUT':
#         data = request.data
#         blog = Blog.objects.get(id = pk)
#         serializer = BlogSerializer(instance=blog, data=data)

#         if serializer.is_valid():
#             serializer.save()

#         return Response(serializer.data)

#     if request.method == 'DELETE':
#         blog = Blog.objects.get(id = pk)
#         blog.delete()
#         return Response("Blog deleted")
    


# @api_view(['GET'])
# def getBlog(request, pk):
#     blogs = Blog.objects.get(id = pk)
#     serializer = BlogSerializer(blogs, many = False)
#     return Response(serializer.data)

# @api_view(['PUT'])
# def updateBlog(request, pk):
#     data = request.data
#     blog = Blog.objects.get(id = pk)
#     serializer = BlogSerializer(instance=blog, data=data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['DELETE'])
# def deleteBlog(request, pk):
#     blog = Blog.objects.get(id = pk)
#     blog.delete()
#     return Response("Blog deleted")

# @api_view(['POST'])
# def createBlog(request):
#     data = request.data
#     blog = Blog.objects.create(
#         title=data['title'],
#         description=data['description']
#     )
#     serializer = BlogSerializer(blog, many = False)
#     return Response(serializer.data)
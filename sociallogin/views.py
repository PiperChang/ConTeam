from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView

class TestView(APIView):
    def get(self, request):
        return HttpResponse("test 중입니다.")
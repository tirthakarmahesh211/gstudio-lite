from django.conf.urls import  include, url
from django.contrib import admin
from gliteapp.views import view_json,search

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^views_json/',view_json,name="view_json"),
    url(r'^search/',search,name="search"),

    ]

from django.shortcuts import render_to_response
from django.core.management import call_command


def index(request):
    call_command('syncdb', interactive=False)
    return render_to_response('index.html')
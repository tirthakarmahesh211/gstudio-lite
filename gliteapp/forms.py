from django import forms

class SearchForm(forms.Form):
    Search = forms.CharField(label='Search', max_length=100)


class SearchTextForm(forms.Form):
    SearchText = forms.CharField(label='Search', max_length=100)

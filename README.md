# VideoTextOcr
![image](https://user-images.githubusercontent.com/59068947/176917859-0fd87276-da56-41a8-b1f2-16dee9020e85.png)

Aplikacja na projekt sztuczna inteligencja. 

# Plan i cele projektu:
* Zaprojektowanie oraz implementacja systemu OCR, który na podstawie klatki filmowej, będzie zamieniał obraz na tekst
* Program na podstawie zatrzymanej klatki jak najbardziej postara się odwzorować na tekst np. kod źródłowy programu w celu łatwiejszego jego użycia 
* Program pozwoli przycinać klatkę według własnych potrzeb odczytania tekstu
* Film będzie wczytywany z komputera użytkownika

# Wykorzystane biblioteki i frameworki:
* Angular - oparty na TypeScript bezpłatny i open source framwork do aplikacji internetowych prowadzony przez zespół Angular w Google oraz społeczność osób i korporacji
* Cropper JS - służy ona do przycinania obrazu/klatki w celu sprecyzowania pola z jakiego ma być odczytywany tekst
* TesseractJS - popularny silnik OCR w wersji javascriptowej
* ImageJS - biblioteka do preprocessingu obrazu

# Prezentacja działania programu

Program OCR-TEXT-VIDEO ma za zadanie generować tekst kodu z udostępnionego filmu.
![image](https://user-images.githubusercontent.com/59068947/176917881-95025d36-e274-439d-aafe-8bdf19cb0eed.png)

Po wgraniu filmu wybieramy klatkę, z której chcemy wyeksportować tekst:
![image](https://user-images.githubusercontent.com/59068947/176918023-531f086e-0969-474f-9d42-06ea7f7d046e.png)

W kolejnym kroku możemy dostosować nasz obraz, przyciąć go, albo użyć preprocessingu:
![image](https://user-images.githubusercontent.com/59068947/176918140-834023d5-fcc0-45c0-9790-6ba756304e06.png)

Następnie klikamy przycisk Process, aby uzyskać wynik:
Preprocessing:
![image](https://user-images.githubusercontent.com/59068947/176918770-2663258f-8340-4ec8-825f-ca0becad1f83.png)
Bez preprocessingu:
![image](https://user-images.githubusercontent.com/59068947/176912139-29f16844-82e8-4f29-9385-b4ab7902c3e2.png)

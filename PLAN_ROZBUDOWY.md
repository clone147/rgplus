# Plan Rozbudowy Strony RG PLUS

> **Data:** 2025-12-04
> **Źródło treści:** http://www.taran.com.pl + http://www.rg.com.pl

---

## Kontekst

PZI TARAN Sp. z o.o. jest **powiązany kapitałowo i technologicznie** z R&G PLUS.
Obie firmy oferują komplementarne produkty dla sektora publicznego.

---

## Co już jest na stronie RG Plus

- ✅ Strona główna (zmodernizowana)
- ✅ Oferta (System FIRMA, MUNICOM.premium)
- ✅ Urządzenia (tablice LED, kasowniki)
- ✅ MUNICOM.premium (szczegółowa podstrona)
- ✅ O firmie (historia, misja, partnerstwa)
- ✅ Kontakt (formularz, dane)
- ✅ Realizacje/Klienci
- ✅ Kariera

---

## Co DODAĆ (z TARAN.com.pl)

### 1. GOSKOM.premium - NOWY PRODUKT

**Co to jest:** Kompleksowy system ERP dla przedsiębiorstw gospodarki komunalnej

**Moduły:**
- Woda i kanalizacja
- Ścieki
- Odpady / Nieczystości stałe
- Rozliczenia z mieszkańcami
- Ewidencja wodomierzy
- Fakturowanie usług komunalnych

**Gdzie dodać:**
- Nowa podstrona `#/goskom`
- Kafelek w sekcji produktów na głównej
- Karta w ofercie (obok MUNICOM)

**Wzorzec:** Skopiować strukturę z MUNICOM.premium

---

### 2. STREFA WSPARCIE (Support)

**Funkcje:**
- Formularz zgłoszenia serwisu oprogramowania
- Pliki do pobrania (katalogi PDF, instrukcje)
- Karty katalogowe oprogramowania
- FAQ / Baza wiedzy
- Kontakt z działem technicznym 24/7

**Gdzie dodać:**
- Nowa podstrona `#/wsparcie`
- Link w menu głównym (po Kontakt)
- Link w footer

---

### 3. SEKCJA "GRUPA KAPITAŁOWA" (strona główna)

**Treść:**
```
Firma R&G PLUS Sp. z o.o. jest powiązana kapitałowo i technologicznie
z PZI TARAN Sp. z o.o., tworząc grupę specjalizującą się w kompleksowych
rozwiązaniach IT dla sektora publicznego.
```

**Elementy:**
- Logo R&G PLUS
- Logo PZI TARAN
- Link do taran.com.pl
- Krótki opis współpracy

**Gdzie dodać:** Nowa sekcja na stronie głównej (przed footer lub po features)

---

### 4. myBus online - ROZBUDOWA

**Co dodać:**
- Osobna podstrona `#/mybus` zamiast tylko wzmianki
- Screenshots aplikacji
- Linki do App Store / Google Play
- Lista miast gdzie działa
- Link do mybusonline.pl

---

### 5. eDeklaracje - ROZBUDOWA System FIRMA

**Dodać informację w ofercie:**
- Moduł eDeklaracje (wysyłka deklaracji do ZUS/US)
- Badge "Nowość"

---

## Kolejność implementacji

### Krok 1: Strona główna
1. Dodać kafelek GOSKOM.premium do sekcji produktów (4 kafelki zamiast 3)
2. Dodać sekcję "Grupa kapitałowa" przed CTA

### Krok 2: Nowe podstrony
3. Utworzyć template `page-goskom` (wzorować na page-municom)
4. Utworzyć template `page-wsparcie` (formularz + pliki + FAQ)
5. Opcjonalnie: `page-mybus`

### Krok 3: Rozbudowa istniejących
6. Strona Oferta - dodać kartę GOSKOM.premium
7. Menu nawigacji - dodać "Wsparcie"
8. Footer - dodać linki

### Krok 4: Routing (app.js)
9. Dodać routes: `/goskom`, `/wsparcie`, `/mybus`

### Krok 5: CSS
10. Style dla nowych komponentów

---

## Pliki do edycji

```
/Users/tomek/Desktop/Hot/temp/RGStrona/
├── index.html          # Nowe templates + zmiany na głównej
├── css/styles.css      # Style dla nowych sekcji
└── js/app.js           # Nowe routes
```

---

## Treści do wykorzystania

### GOSKOM.premium - opis z TARAN:

> GOSKOM.premium to zestaw programów dla zakładów i przedsiębiorstw gospodarki
> komunalnej. System w obecnej postaci to zintegrowany system klasy ERP
> zaprojektowany i wykonany przez jeden zespół projektantów i programistów.

**Moduły specjalistyczne:**
- Rozliczenia wody
- Rozliczenia ścieków
- Rozliczenia odpadów
- Ewidencja wodomierzy
- Odczyty liczników
- Windykacja należności

---

### Grupa kapitałowa - tekst:

> **R&G PLUS** i **PZI TARAN** tworzą grupę kapitałową specjalizującą się
> w kompleksowych rozwiązaniach informatycznych dla sektora publicznego.
> Łączymy ponad 30 lat doświadczenia w transporcie miejskim z ekspertyzą
> w gospodarce komunalnej.

---

## Uwagi

- Zachować spójność designu (granatowy + sky blue)
- Używać tych samych komponentów (karty, przyciski, ikony)
- GOSKOM może mieć inny kolor akcentu (np. zielony dla "eco")
- Wsparcie powinno być łatwo dostępne (sticky button?)

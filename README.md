# Mobile apps met Ionic en Angular

Welkom bij de workshop mobile apps met Ionic en Angular.

We hebben vast een starter project voor je aangemaakt, waarmee je meteen aan de slag kan. Er zijn twee manieren waarop
je het project kunt draaien.

1. Je kunt de broncode uitchecken op je eigen machine en lokaal draaien. Daarvoor heb je wel het één en ander aan
   tooling op je machine nodig.
2. Je kunt in een online omgeving aan de broncode werken en het resultaat meteen in je browser bekijken. Dit werkt out
   of the box, maar alleen in de browser. Wil je daadwerkelijk de applicatie op je telefoon draaien? Kies dan voor de
   eerste optie.

## Aan de slag

### Lokale installatie

Om de applicatie lokaal te draaien is het nodig dat je npm op je machine hebt geïnstalleerd. Als dat zo is kun je de
volgende stappen volgen. Heb je nog geen npm? Ga dan meteen aan de slag op de webomgeving.

* npm i -g @ionic/cli
* git clone git@github.com:ilionx/flasher.git
* cd flasher
* npm i

Je kunt de broncode vervolgens bewerken in een teksteditor naar keuze.

Heb je npm nog niet geïnstalleerd? Of lukt het om andere redenen niet om bovenstaande stappen te volgen? Ga dan meteen
aan de slag op de webomgeving.

### Meteen aan de slag op de webomgeving

* Ga naar https://stackblitz.com/github/ilionx/flasher.
* Klik op Install package @angular/compiler.
* Klik op Install missing dependencies.

Je omgeving is nu klaar. Je kunt in de browser de code aanpassen. Wijzigingen zijn meteen zichtbaar in het
preview-venster aan de rechterkant.

## Opdracht 1: UI components

1. Neem het bovenste voorbeeld in de [documentatie van ion-card](https://ionicframework.com/docs/api/card) over in
   home.page.html.
  - Voor ion-card-title, vul in: Flashlight.
  - Voor ion-card-content, vul in: We gaan het flitslicht van je camera laten knipperen. Vul hieronder de opties in.
  - De ion-card-subtitle mag je verwijderen.
2. Neem het eerste voorbeeld onder *inputs with labels* over uit
   de [documentatie van ion-input](https://ionicframework.com/docs/api/input).
  - Voor ion-label, vul in: Hoeveel keer?
  - Geef ion-input het attribuut *type="number"*.
3. Kopieer de code uit punt 2, maar vervang de ion-input door een ion-range:
  - <ion-range min="100" max="1000"></ion-range>
  - Voor ion-label, vul in: Hoe lang?
  - Voeg het attribuut *slot="start"* toe voor de juiste plaatsing van het label.
4. Voeg <ion-button>Start</ion-button> toe.

## Opdracht 2: Angular

1. Koppel de ion-input aan de formControl met naam howManyTimes:
  - <ion-input [formControl]="howManyTimes" ...>
2. Koppel de ion-range aan de formControl met de naam howLong?
  - <ion-input [formControl]="howLong" ...>
3. Voeg een event-handler toe aan de ion-button:
  - <ion-button (click)="onStart()"...>
4. Om de button te laten knipperen gaan we de kleur wisselend aanpassen:
  - <ion-button [color]="on ? 'alert' : 'primary'" ...>

## Opdracht 3: ionic native

We gaan ionic native gebruiken om native functionaliteit van je telefoon aan te spreken, die je normaal gesproken met
JavaScript vanuit de browser niet kunt benaderen. We maken gebruik van de ionic plugin Flashlight, die het flitslicht
van je camera kan bedienen.

We hebben de plugin al voor je geïnstalleerd in het project. Normaal gesproken installeer je die zelf, volgens de
stappen die [hier](https://ionicframework.com/docs/native/community)
en [hier](https://ionicframework.com/docs/native/flashlight) vindt. Let erop dat je de stappen voor Capacitor volgt, en
niet die voor Cordova. Voor deze opdracht kun je alle installatiestappen verder dus overslaan.

Pas nu de code aan:

1. Aan app.module.ts, voeg Flashlight toe aan de providers. Vergeet in de eerste stap niet /ngx aan het einde van je
   import toe te voegen. Dit gaat soms mis als je de autocompletefunctie van je IDE gebruikt.
  - import {Flashlight} from '@ionic-native/flashlight/ngx'
  - providers: [{provide: ...}, Flashlight]
2. Injecteer Flashlight in de constructor van home.page.ts:
  - constructor(private flashlight: FlashLight) {}
3. Binnen de subscribe, voeg de volgende regel toe:
  - this.flashlight.toggle();

## Software op je telefoon draaien

### Algemeen

Om de software op je telefoon te draaien, voer je allereerst de volgende stappen uit:

- npm run build
- npx cap sync
- cd ios/App
- pod install

### iOS

Om de app op iOS te kunnen draaien heb je een aantal zaken nodig:

- Een Mac
- Een xcode-installatie
- Een apple ID

Om je omgeving draaiend te krijgen, volg je de stappen op https://ionicframework.com/docs/developing/ios. Let erop dat
je de stappen voor Capacitor volgt, en niet die voor Cordova.

Een commando om je applicatie snel te debuggen is het volgende:

- ionic capacitor run ios -l --external

Dit commando opent xcode, waarvanuit je de applicatie in debugmodus kunt starten. Wijzigingen in je code zijn meteen
zichtbaar op je apparaat. Zorg er wel voor dat je in xcode onder App - Signing & Capabilities een Team selecteert.

### Android

Om de app op Android te kunnen draaien heb je een aantal zaken nodig:

- Android studio
- command line tools

Om je omgeving draaiend te krijgen, volg je de stappen op https://ionicframework.com/docs/developing/android. Let erop
dat je de stappen voor Capacitor volgt, en niet die voor Cordova.

Een commando om je applicatie snel te debuggen is het volgende:

- ionic capacitor run android -l --host=192.168.178.25



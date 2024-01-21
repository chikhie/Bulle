import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
//import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => 
    initializeApp({ 
        "projectId": 
        "vbulle", 
        "appId": "1:472247659758:web:d065740e269241b96317ff", 
        "databaseURL": "https://vbulle-default-rtdb.europe-west1.firebasedatabase.app", 
        "storageBucket": "vbulle.appspot.com", 
        "apiKey": "AIzaSyA2our0aMJoF1pSNIidlWEUPxOj4lWc1QQ", 
        "authDomain": "vbulle.firebaseapp.com", 
        "messagingSenderId": "472247659758", 
        "measurementId": "G-2L1YEBZM25" }))), 
        importProvidersFrom(provideAuth(() => getAuth())), 
        importProvidersFrom(provideDatabase(() => getDatabase())), 
        provideStore(), 
        provideAnimations(), 
        importProvidersFrom(provideFirebaseApp(() => 
        initializeApp({ 
            "projectId": "vbulle", 
            "appId": "1:472247659758:web:d065740e269241b96317ff", 
            "databaseURL": "https://vbulle-default-rtdb.europe-west1.firebasedatabase.app", 
            "storageBucket": "vbulle.appspot.com", 
            "apiKey": "AIzaSyA2our0aMJoF1pSNIidlWEUPxOj4lWc1QQ", 
            "authDomain": "vbulle.firebaseapp.com", 
            "messagingSenderId": "472247659758", 
            "measurementId": "G-2L1YEBZM25" }))), 
            importProvidersFrom(provideAuth(() => getAuth())), 
            importProvidersFrom(provideFirestore(() => getFirestore())), 
            importProvidersFrom(provideDatabase(() => getDatabase())), 
//             provideServiceWorker('ngsw-worker.js', {
//                 enabled: !isDevMode(),
//                 registrationStrategy: 'registerWhenStable:30000'
//             }), provideServiceWorker('ngsw-worker.js', {
//                 enabled: !isDevMode(),
//                 registrationStrategy: 'registerWhenStable:30000'
//             })
            ]
 };

import { IonItem, IonBadge, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import csv from 'csv-parser';
import fs from 'fs';
import { useState, useEffect } from 'react';

const Tab2: React.FC = () => {
  const numberOfCards = 10;
  const ionCards = []
  for (let i = 0; i < numberOfCards; i++) {
    ionCards.push(
      <IonCard key={i}>
        <IonCardHeader className = "card-header">
          <IonCardTitle>Name</IonCardTitle>
          <IonCardSubtitle>Description</IonCardSubtitle>
          <IonBadge color="danger" className = "badge" id = "price-badge">Price</IonBadge> 
          <IonBadge color="success" className = "badge" id= "topics-badge">Topics</IonBadge> 
        </IonCardHeader>
        <IonCardContent>
          idk. put something about what the program's about or some description 
        </IonCardContent>
      </IonCard>
      
    );
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jobs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {ionCards}
      </IonContent>
    </IonPage>
    

  );
};

export default Tab2;

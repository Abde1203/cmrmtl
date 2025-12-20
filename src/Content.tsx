import React from 'react';
import './Content.css';

interface ContentProps {
  language: 'fr' | 'en';
}

const Content: React.FC<ContentProps> = ({ language }) => {
  const fr = {
    title: 'Clinique pour les réfugiés et étudiants internationaux de Montréal',
    infoHours: 'Heures : lun - ven, 9 h à 17 h',
    infoAddress: 'Adresse : 2100, rue Guy, bureau 208, Montréal',
    infoPhone: 'Téléphone : 438-842-4923 | Fax : 514-470-3693',
    infoEmergency: 'Urgence : composer le 911',
    mapQuery: '2100 rue Guy bureau 208, Montréal',
    blueCrossOnly: 'Assurance Croix Bleue Uniquement',
    blueCrossOnlyText: 'Cette clinique offre des rendez-vous uniquement aux patients qui détiennent une assurance de la Croix Bleue.',
    noRamq: 'Patients non éligibles',
    noRamqText: 'Les patients avec une assurance maladie de la RAMQ ou d’une autre province canadienne ne peuvent pas être vus à cette clinique et seront refusés.',
    noInsurancePrice: 'Tarifs sans assurance',
    noInsurancePriceText: 'Pour les patients sans assurance Croix Bleue et sans RAMQ :',
    consultation: '285$ par consultation',
    followUp: '285$ par suivi',
    notPrivate: 'Veuillez noter : ceci n’est pas une clinique privée. Nous n’offrons pas de rendez-vous aux patients avec une assurance provinciale (RAMQ ou autre) souhaitant payer pour une consultation.',
    appointment: 'Prendre un rendez-vous',
    appointmentText: 'Veuillez prendre rendez-vous en utilisant le lien ci-dessous ou par téléphone.',
    appointmentLink: 'https://xxx.xxx.xxx',
    appointmentCta: 'Prendre rendez-vous',
    orByPhone: 'Par téléphone : 438-842-4923',
    sendProof: 'Preuve d’assurance',
    sendProofText: 'Envoyez une photo de votre preuve d’assurance Croix Bleue par courriel à cliniquemedicalerefugie@gmail.com.',
    services: 'Services',
    servicesText: 'Soins primaires et suivi pour les nouveaux arrivants.',
    servicesList: [
      'Consultation de médecine générale',
      'Évaluation initiale et suivi',
      'Orientation vers des services spécialisés',
      'Bilans de santé et renouvellements'
    ],
    howItWorks: 'Comment ça fonctionne',
    howItWorksSteps: [
      'Vérifiez votre assurance Croix Bleue.',
      'Prenez rendez-vous en ligne ou par téléphone.',
      'Apportez votre preuve d’assurance le jour du rendez-vous.'
    ],
    insuranceAccepted: 'Assurance acceptée',
    insuranceAcceptedText: 'Assurance Croix Bleue uniquement.',
    access: 'Accès et transport',
    accessText: 'Métro Guy-Concordia, accès facile en transport en commun.',
    mapCta: 'Voir sur la carte'
  };

  const en = {
    title: 'Clinic for refugees and international students of montreal',
    infoHours: 'Hours: Mon - Fri 9:00am to 5:00pm',
    infoAddress: 'Address: 2100 rue Guy suite 208, Montreal',
    infoPhone: 'Phone: 438-842-4923 | Fax: 514-470-3693',
    infoEmergency: 'Emergency: Dial 911',
    mapQuery: '2100 rue Guy suite 208, Montreal',
    blueCrossOnly: 'Blue Cross Insurance Only',
    blueCrossOnlyText: 'This clinic only offers appointments to patients who possess a Blue Cross insurance plan.',
    noRamq: 'Ineligible Patients',
    noRamqText: 'Patients with a RAMQ healthcare insurance or with healthcare insurance of another Canadian province will be refused.',
    noInsurancePrice: 'Pricing for Uninsured Patients',
    noInsurancePriceText: 'For patients who do not have Blue Cross insurance and no RAMQ:',
    consultation: '$285 per consultation',
    followUp: '$285 per follow-up',
    notPrivate: 'Please note: This is not a private clinic. It is unavailable to patients with a provincial healthcare insurance (RAMQ or other) who wish to pay for a consultation.',
    appointment: 'Book an Appointment',
    appointmentText: 'Please book an appointment using the link below or by phone.',
    appointmentLink: 'https://xxx.xxx.xxx',
    appointmentCta: 'Book an appointment',
    orByPhone: 'By phone: 438-842-4923',
    sendProof: 'Proof of Insurance',
    sendProofText: 'Send a picture of your Blue Cross insurance proof by email to cliniquemedicalerefugie@gmail.com.',
    services: 'Services',
    servicesText: 'Primary care and follow-up for newcomers.',
    servicesList: [
      'General medical consultations',
      'Initial assessment and follow-up',
      'Referral to specialized services',
      'Health checkups and renewals'
    ],
    howItWorks: 'How it works',
    howItWorksSteps: [
      'Confirm your Blue Cross coverage.',
      'Book online or by phone.',
      'Bring proof of insurance to your visit.'
    ],
    insuranceAccepted: 'Accepted insurance',
    insuranceAcceptedText: 'Blue Cross insurance only.',
    access: 'Access and transit',
    accessText: 'Guy-Concordia metro, easy public transit access.',
    mapCta: 'View on map'
  };

  const content = language === 'fr' ? fr : en;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(content.mapQuery)}&output=embed`;

  return (
    <main className='Container'>
      <div className='InfoStrip'>
        <div>
          <strong>{content.infoHours}</strong>
          <span>{content.infoAddress}</span>
        </div>
        <div>
          <strong>{content.infoPhone}</strong>
          <span>{content.infoEmergency}</span>
        </div>
      </div>

      <div className='Content Content--accent' id='appointment'>
        <h2>{content.blueCrossOnly}</h2>
        <p>{content.blueCrossOnlyText}</p>
        
        <h2>{content.noRamq}</h2>
        <p>{content.noRamqText}</p>
      </div>

      <div className='Content'>
        <h2>{content.services}</h2>
        <p>{content.servicesText}</p>
        <div className='ListGrid'>
          {content.servicesList.map(item => (
            <div key={item} className='ListCard'>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className='Content'>
        <h2>{content.noInsurancePrice}</h2>
        <p>{content.noInsurancePriceText}</p>
        <div className='pricing'>
          <ul>
            <li>{content.consultation}</li>
            <li>{content.followUp}</li>
          </ul>
        </div>
        <p className='disclaimer'>{content.notPrivate}</p>
      </div>

      <div className='Content'>
        <h2>{content.howItWorks}</h2>
        <ol className='StepList'>
          {content.howItWorksSteps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className='InsuranceBanner'>
          <strong>{content.insuranceAccepted}</strong>
          <span>{content.insuranceAcceptedText}</span>
        </div>
      </div>

      <div className='Content Content--accent'>
        <h2>{content.appointment}</h2>
        <p>{content.appointmentText}</p>
        <a className='cta-link' href={content.appointmentLink} target='_blank' rel='noopener noreferrer'>
          {content.appointmentCta}
        </a>
        <p>{content.orByPhone}</p>

        <h2>{content.sendProof}</h2>
        <p>{content.sendProofText}</p>
      </div>

      <div className='Content'>
        <h2>{content.access}</h2>
        <p>{content.accessText}</p>
        <div className='MapPanel'>
          <iframe
            className='MapIframe'
            title='Clinic location'
            src={mapSrc}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
          <a className='map-link' href='https://maps.google.com' target='_blank' rel='noopener noreferrer'>
            {content.mapCta}
          </a>
        </div>
      </div>
    </main>
  );
};

export default Content;

import React from 'react';
import './Content.css';

interface ContentProps {
  language: 'fr' | 'en';
}

const Content: React.FC<ContentProps> = ({ language }) => {
  const phoneNumber = '438-842-4923';
  const phoneHref = 'tel:+14388424923';
  const faxNumber = '514-470-3693';

  const fr = {
    title: 'Clinique pour les réfugiés et étudiants internationaux de Montréal',
    infoHours: 'Heures : lun - ven, 9 h à 17 h',
    infoAddress: 'Adresse : 2100, rue Guy, bureau 208, Montréal',
    infoPhoneLabel: 'Téléphone',
    infoFaxLabel: 'Fax',
    infoEmergency: 'Urgence : composer le 911',
    mapQuery: '2100 rue Guy bureau 208, Montréal',
    blueCrossOnly: 'Couverture admissible',
    blueCrossOnlyText:
      'Couverture par le programme PFSI pour les réfugiés et les demandeurs d’asile, et couverture pour les étudiants internationaux selon les règlements de leur assurance personnelle.',
    noRamq: 'Patients non éligibles',
    noRamqText: 'Les patients couverts par la RAMQ ne sont pas éligibles et seront refusés.',
    noInsurancePrice: 'Tarifs sans assurance',
    noInsurancePriceText: 'Nous chargeons selon la grille tarifaire du FMOQ pour les patients sans couverture du PFSI.',
    notPrivate: 'Veuillez noter : ceci n’est pas une clinique privée. Nous n’offrons pas de rendez-vous aux patients avec une assurance provinciale (RAMQ ou autre) souhaitant payer pour une consultation.',
    appointment: 'Prendre un rendez-vous',
    appointmentText: 'Veuillez prendre rendez-vous en utilisant le lien ci-dessous ou par téléphone.',
    appointmentLink: 'https://qc.pomelo.health/cmdree/login?lang=fr#/patient-triage',
    appointmentCta: 'Prendre rendez-vous',
    orByPhone: 'Par téléphone',
    sendProof: 'Document requis',
    sendProofText: 'Amener en main propre votre document fédéral (papier brun) contenant votre numéro UIC.',
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
      'Vérifiez votre admissibilité au programme PFSI ou les conditions de votre assurance étudiante.',
      'Prenez rendez-vous en ligne ou par téléphone.',
      'Apportez en main propre votre document fédéral (papier brun) contenant votre numéro UIC.'
    ],
    insuranceAccepted: 'Assurance acceptée',
    insuranceAcceptedText:
      'Programme PFSI pour les réfugiés et les demandeurs d’asile, et couverture étudiante internationale selon les règlements de l’assurance personnelle.',
    access: 'Accès et transport',
    accessText: 'Métro Guy-Concordia, accès facile en transport en commun.',
    mapCta: 'Voir sur la carte'
  };

  const en = {
    title: 'Clinic for refugees and international students of montreal',
    infoHours: 'Hours: Mon - Fri 9:00am to 5:00pm',
    infoAddress: 'Address: 2100 rue Guy suite 208, Montreal',
    infoPhoneLabel: 'Phone',
    infoFaxLabel: 'Fax',
    infoEmergency: 'Emergency: Dial 911',
    mapQuery: '2100 rue Guy suite 208, Montreal',
    blueCrossOnly: 'Eligible coverage',
    blueCrossOnlyText:
      'Coverage through the IFHP program for refugees and asylum seekers, and coverage for international students according to the rules of their personal insurance.',
    noRamq: 'Ineligible Patients',
    noRamqText: 'Patients covered by RAMQ are not eligible and will be refused.',
    noInsurancePrice: 'Pricing for Uninsured Patients',
    noInsurancePriceText: 'We charge according to the FMOQ fee schedule for patients without IFHP coverage.',
    notPrivate: 'Please note: This is not a private clinic. It is unavailable to patients with a provincial healthcare insurance (RAMQ or other) who wish to pay for a consultation.',
    appointment: 'Book an Appointment',
    appointmentText: 'Please book an appointment using the link below or by phone.',
    appointmentLink: 'https://qc.pomelo.health/cmdree/login?lang=en#/patient-triage',
    appointmentCta: 'Book an appointment',
    orByPhone: 'By phone',
    sendProof: 'Required document',
    sendProofText: 'Bring your federal document (brown paper) containing your UIC number in person.',
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
      'Confirm your IFHP eligibility or the terms of your student insurance.',
      'Book online or by phone.',
      'Bring your federal document (brown paper) containing your UIC number in person.'
    ],
    insuranceAccepted: 'Accepted insurance',
    insuranceAcceptedText:
      'IFHP coverage for refugees and asylum seekers, and international student coverage according to personal insurance rules.',
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
          <strong>
            {content.infoPhoneLabel} : <a className='phone-link' href={phoneHref}>{phoneNumber}</a> | {content.infoFaxLabel} : {faxNumber}
          </strong>
          <span>{content.infoEmergency}</span>
        </div>
      </div>

      <div className='Content Content--accent' id='appointment'>
        <h2>{content.blueCrossOnly}</h2>
        <p>{content.blueCrossOnlyText}</p>
        
        <h2>{content.noRamq}</h2>
        <p className='Content__warning'>{content.noRamqText}</p>
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
        <p>
          {content.orByPhone} : <a className='phone-link' href={phoneHref}>{phoneNumber}</a>
        </p>

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

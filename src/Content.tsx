import React from 'react';
import './Content.css';

interface ContentProps {
  language: 'fr' | 'en';
}

const Content: React.FC<ContentProps> = ({ language }) => {
  const fr = {
    title: 'Clinique pour les réfugiés et étudiants internationaux de Montréal',
    blueCrossOnly: 'Assurance Croix Bleue Uniquement',
    blueCrossOnlyText: 'Cette clinique offre des rendez-vous uniquement aux patients qui détiennent une assurance de la Croix Bleue.',
    noRamq: 'Patients non éligibles',
    noRamqText: 'Les patients avec une assurance maladie de la RAMQ ou d’une autre province canadienne ne peuvent pas être vus à cette clinique et seront refusés.',
    noInsurancePrice: 'Tarifs sans assurance',
    noInsurancePriceText: 'Pour les patients sans assurance Croix Bleue et sans RAMQ :',
    consultation: '285$ par consultation',
    followUp: '285$ par suivi',
    notPrivate: 'Veuillez noter : Ceci n’est pas une clinique privée. Nous n’offrons pas de rendez-vous aux patients avec une assurance provinciale (RAMQ ou autre) souhaitant payer pour une consultation.',
    appointment: 'Prendre un rendez-vous',
    appointmentText: 'Veuillez prendre rendez-vous en utilisant le lien ci-dessous ou par téléphone.',
    appointmentLink: 'xxx.xxx.xxx',
    orByPhone: 'Par téléphone : 438-842-4923',
    sendProof: 'Preuve d’assurance',
    sendProofText: 'Envoyez une photo de votre preuve d’assurance Croix Bleue par courriel à cliniquemedicalerefugie@gmail.com.'
  };

  const en = {
    title: 'Clinic for refugees and international students of montreal',
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
    appointmentLink: 'xxx.xxx.xxx',
    orByPhone: 'By phone: 438-842-4923',
    sendProof: 'Proof of Insurance',
    sendProofText: 'Send a picture of your Blue Cross insurance proof by email to cliniquemedicalerefugie@gmail.com.'
  };

  const content = language === 'fr' ? fr : en;

  return (
    <main>
      <div className='Content Content--accent'>
        <h2>{content.blueCrossOnly}</h2>
        <p>{content.blueCrossOnlyText}</p>
        
        <h2>{content.noRamq}</h2>
        <p>{content.noRamqText}</p>
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

      <div className='Content Content--accent'>
        <h2>{content.appointment}</h2>
        <p>{content.appointmentText}</p>
        <a className='cta-link' href={`http://${content.appointmentLink}`} target='_blank' rel='noopener noreferrer'>
          {content.appointmentLink}
        </a>
        <p>{content.orByPhone}</p>

        <h2>{content.sendProof}</h2>
        <p>{content.sendProofText}</p>
      </div>
    </main>
  );
};

export default Content;

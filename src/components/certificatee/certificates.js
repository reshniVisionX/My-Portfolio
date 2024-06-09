import React from 'react';
import { Element } from 'react-scroll';
import './certificate.css';

const Certificates = () => {
    const certificates = [
        {
            Org: 'Internshala Trainings',
            Name: 'Ethical Hacking',
            StartDate: 'Oct 2022',
            Link: 'https://trainings.internshala.com/s/v/2283480/f6fbd159',
        },
        {
            Org: 'Internshala Trainings',
            Name: 'UI/UX Design',
            StartDate: 'March 2023',
            Link: 'https://trainings.internshala.com/s/v/2981945/890822fa',
        },
        {
            Org: 'Internshala Trainings',
            Name: 'Android App Development',
            StartDate: 'Sep 2023',
            Link: 'https://trainings.internshala.com/s/v/3150917/7223401e',
        },
        {
            Org: 'Internshala Trainings',
            Name: 'Node JS',
            StartDate: 'Oct 2023',
            Link: 'https://trainings.internshala.com/s/v/3166372/0c70fc11',
        },
    ];

    const openLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <Element className='certifications' id='certificates'>
            <h1 className='certificates_title'>CERTIFICATES</h1>
            <div className='certificates_list'>
                {certificates.map((docs, index) => (
                    <div className='certi_divs' key={index} onClick={() => openLink(docs.Link)}>
                        <img src='/images/Screenshot 2024-06-09 163726.png' alt='certificate' className='img_certi' />
                        <div className='content'>
                        <h2 className='certi_org'>{docs.Org}</h2>
                        <b className='certi_name'>{docs.Name}</b><span className='certi_date'>{docs.StartDate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Element>
    );
};

export default Certificates;

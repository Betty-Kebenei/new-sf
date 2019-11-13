import meetingPic from '../../images/meeting-pic.jpeg';
import financialPic from '../../images/financial-pic.jpeg';
import logisticsPic from '../../images/logistics-pic.jpeg';
import moralPic from '../../images/moral-pic.jpg';
import prayerPic from '../../images/prayer-pic.jpg';
import reEntryPic from '../../images/re-entry-pic.jpeg';
import visitsPic from '../../images/visits-pic.jpeg';

const allActivities = [
  {
    imageUrl: meetingPic,
    title: 'Monthly meetings',
    description: 'Meeting monthly for fellowships',
  },
  {
    imageUrl: financialPic,
    title: 'Monthly financially contributions',
    description: 'Contributing monthly for support',
  },
  {
    imageUrl: logisticsPic,
    title: 'Missionary logistics support',
    description: 'Helping out with the logistics',
  },
  {
    imageUrl: moralPic,
    title: 'Missionary moral support',
    description: 'Listening to them',
  },
  {
    imageUrl: prayerPic,
    title: 'Weekly prayer and fasting',
    description: 'Praying weekly for a specific missionary',
  },
  {
    imageUrl: reEntryPic,
    title: 'Missionary re-entry support',
    description: 'Helping with hosting',
  },
  {
    imageUrl: visitsPic,
    title: 'Missionary visits',
    description: 'Going to visit them on the field',
  },
];
export default allActivities;

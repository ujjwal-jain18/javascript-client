import moment from 'moment';

const getDateFormatted = () => moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

const trainees = [
  {
    id: '5c6c47af7740654f0915fac9',
    name: 'Sachin Tendulkar',
    email: 'sachin@gmail.com',
    createdAt: getDateFormatted(),
  },
  {
    id: '5c6c47af7740654f0455fac9',
    name: 'Virat Kohli',
    email: 'virat@gmail.com',
    createdAt: getDateFormatted(),
  },
  {
    id: '5c6567af7740654f0915fac9',
    name: 'M.S. Dhoni',
    email: 'msdhoni@gmail.com',
    createdAt: getDateFormatted(),
  },
  {
    id: '5c6c47af7747854f0915fac9',
    name: 'Rohit Sharma',
    email: 'rohit.sharma',
    createdAt: getDateFormatted(),
  },
  {
    id: '5c6c47af7740654f0915876c9',
    name: 'Bumrah',
    email: 'bumhrah@gmail.com',
    createdAt: getDateFormatted(),
  },
];


export default trainees;

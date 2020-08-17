const students = [
  {
    id: 1,
    firstName: 'Jeremiah',
    lastName: 'Vasquez',
    imgUrl: 'https://avatars1.githubusercontent.com/u/56455496?v=4',
    isDead: false,
  },
  {
    id: 2,
    firstName: 'Austin',
    lastName: 'Phy',
    imgUrl: 'https://avatars3.githubusercontent.com/u/39771100?v=4',
    isDead: false,
  },
  {
    id: 3,
    firstName: 'Brooke',
    lastName: 'Nemchak',
    imgUrl: 'https://avatars3.githubusercontent.com/u/62910336?v=4',
    isDead: false,
  },
  {
    id: 4,
    firstName: 'Geno',
    lastName: 'McNew',
    imgUrl: 'https://avatars1.githubusercontent.com/u/42584830?v=4',
    isDead: false,
  },
  {
    id: 5,
    firstName: 'Gwynne',
    lastName: 'Meeks',
    imgUrl: 'https://avatars1.githubusercontent.com/u/63276406?v=4',
    isDead: false,
  },
  {
    id: 6,
    firstName: 'Jeanine',
    lastName: 'Beckle',
    imgUrl: 'https://avatars1.githubusercontent.com/u/62957170?v=4',
    isDead: false,
  },
  {
    id: 7,
    firstName: 'Jim',
    lastName: 'Browning',
    imgUrl: 'https://avatars2.githubusercontent.com/u/62916291?v=4',
    isDead: false,
  },
  {
    id: 8,
    firstName: 'Jonathan',
    lastName: 'Shearon',
    imgUrl: 'https://avatars3.githubusercontent.com/u/46360042?v=4',
    isDead: false,
  },
  {
    id: 9,
    firstName: 'Joshua',
    lastName: 'Medlen',
    imgUrl: 'https://avatars0.githubusercontent.com/u/62913995?v=4',
    isDead: false,
  },
  {
    id: 10,
    firstName: 'Kamiran',
    lastName: 'Ibrahim',
    imgUrl: 'https://avatars1.githubusercontent.com/u/20482946?v=4',
    isDead: false,
  },
  {
    id: 11,
    firstName: 'Mark',
    lastName: 'Young',
    imgUrl: 'https://avatars1.githubusercontent.com/u/62973018?v=4',
    isDead: false,
  },
  {
    id: 12,
    firstName: 'Matt',
    lastName: 'Logan',
    imgUrl: 'https://avatars1.githubusercontent.com/u/62910269?v=4',
    isDead: false,
  },
  {
    id: 13,
    firstName: 'Michael',
    lastName: 'Dotson',
    imgUrl: 'https://avatars3.githubusercontent.com/u/61854037?v=4',
    isDead: false,
  },
  {
    id: 14,
    firstName: 'Nate',
    lastName: 'Owens',
    imgUrl: 'https://avatars2.githubusercontent.com/u/62910227?v=4',
    isDead: false,
  },
  {
    id: 15,
    firstName: 'Nick',
    lastName: 'Walters',
    imgUrl: 'https://avatars3.githubusercontent.com/u/10491407?v=4',
    isDead: false,
  },
  {
    id: 16,
    firstName: 'Nikhil',
    lastName: 'Gaikwad',
    imgUrl: 'https://avatars1.githubusercontent.com/u/18632556?v=4',
    isDead: false,
  },
  {
    id: 17,
    firstName: 'Ola',
    lastName: 'Oladinni',
    imgUrl: 'https://avatars0.githubusercontent.com/u/59629698?v=4',
    isDead: false,
  },
  {
    id: 18,
    firstName: 'Pete',
    lastName: 'Stewart',
    imgUrl: 'https://avatars2.githubusercontent.com/u/62906411?v=4',
    isDead: false,
  },
  {
    id: 19,
    firstName: 'Phonesalo',
    lastName: 'Sihanorak',
    imgUrl: 'https://avatars0.githubusercontent.com/u/61893644?v=4',
    isDead: false,
  },
  {
    id: 20,
    firstName: 'Ryan',
    lastName: 'Beiden',
    imgUrl: 'https://avatars2.githubusercontent.com/u/25331401?v=4',
    isDead: false,
  },
  {
    id: 21,
    firstName: 'William',
    lastName: 'Campbell',
    imgUrl: 'https://avatars0.githubusercontent.com/u/62917622?v=4',
    isDead: false,
  },
];

const livingStudents = () => students.filter((student) => student.isDead === false);

const dearlyBeloved = () => students.filter((student) => student.isDead === true);

const followTheLight = (id) => {
  const objIndex = students.findIndex((student) => student.id === id);
  students[objIndex].isDead = true;
};

const putAllStudentsLive = () => {
  students.forEach((response) => { // eslint wants this to be 'response'
    response.isDead = false;
  });
};

export default {
  livingStudents,
  dearlyBeloved,
  followTheLight,
  putAllStudentsLive,
};

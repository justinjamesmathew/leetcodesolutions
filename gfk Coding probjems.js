import express from 'express';

const usersA = [
  {
    first_name: 'Yè',
    last_name: 'Franzman',
    email: 'sfranzman0@gravatar.com',
    created_at: '2021-11-28 23:05:40',
  },
  {
    first_name: 'Léane',
    last_name: 'Ethersey',
    email: 'nethersey1@businessinsider.com',
    created_at: '2022-04-17 08:59:35',
  },
  {
    first_name: 'Valérie',
    last_name: 'Lamshead',
    email: 'hlamshead2@taobao.com',
    created_at: '2021-06-04 02:18:01',
  },
  {
    first_name: 'Océanne',
    last_name: 'Kinig',
    email: 'skinig3@ibm.com',
    created_at: '2022-02-12 13:01:35',
  },
  {
    first_name: 'Maïlys',
    last_name: 'Leng',
    email: 'aleng4@hp.com',
    created_at: '2021-07-31 01:28:41',
  },
  {
    first_name: 'Médiamass',
    last_name: 'Heartfield',
    email: 'dheartfield5@simplemachines.org',
    created_at: '2022-01-20 05:15:00',
  },
  {
    first_name: 'Pénélope',
    last_name: 'Pollins',
    email: 'zpollins6@prnewswire.com',
    created_at: '2021-05-17 14:16:20',
  },
  {
    first_name: 'Aurélie',
    last_name: 'Musson',
    email: 'bmusson7@themeforest.net',
    created_at: '2021-07-20 10:34:16',
  },
  {
    first_name: 'Estée',
    last_name: 'Sprey',
    email: 'hsprey8@biblegateway.com',
    created_at: '2021-11-09 12:59:28',
  },
  {
    first_name: 'Eloïse',
    last_name: 'Michel',
    email: 'imichel9@paginegialle.it',
    created_at: '2021-05-16 22:27:48',
  },
  {
    first_name: 'Mén',
    last_name: 'Farnall',
    email: 'sfarnalla@shareasale.com',
    created_at: '2021-06-22 13:13:43',
  },
  {
    first_name: 'Bérengère',
    last_name: 'Atlay',
    email: 'gatlayb@tiny.cc',
    created_at: '2022-02-18 09:21:36',
  },
  {
    first_name: 'Laïla',
    last_name: 'Storror',
    email: 'jstorrorc@cdc.gov',
    created_at: '2021-05-14 01:11:08',
  },
];

const usersB = [
  {
    data: {
      first: 'Almérinda',
      last: 'Anslow',
    },
    email: 'ianslowh@domainmarket.com',
    created_at: '2021-10-31 00:02:32',
  },
  {
    data: {
      first: 'Sòng',
      last: 'Sutherley',
    },
    email: 'asutherleyi@simplemachines.org',
    created_at: '2021-12-02 01:23:41',
  },
  {
    data: {
      first: 'Mahélie',
      last: 'Brion',
    },
    email: 'dbrionj@google.cn',
    created_at: '2022-03-16 03:55:31',
  },
  {
    data: {
      first: 'Mén',
      last: 'Farnall',
    },
    email: 'sfarnalla@shareasale.com',
    created_at: '2021-06-22 13:13:43',
  },
  {
    data: {
      first: 'Bérengère',
      last: 'Atlay',
    },
    email: 'gatlayb@tiny.cc',
    created_at: '2022-02-18 09:21:36',
  },
  {
    data: {
      first: 'Laïla',
      last: 'Storror',
    },
    email: 'jstorrorc@cdc.gov',
    created_at: '2021-05-14 01:11:08',
  },
];

// 1. Combine data and return single data structure, full_name, email, joined
// 2. Mask emails in first and last letter j*****c@cdc.gov (first part should equal in original length)
// 3. filter out duplicate emails
// 4. Make endpoint searchable partially using query params i.e. /?search=Eloise

const app = express();
const port = 3111;

const downstreamServerA = () =>
  new Promise((resolve) => setTimeout(() => resolve(usersA), 1500));
const downstreamServerB = () =>
  new Promise((resolve) => setTimeout(() => resolve(usersB), 4000));

app.get('/', async (_, res) => {});

let dataA = await downstreamServerA();
let dataB = await downstreamServerB();


for (let element of dataB){
    dataA.push({'first_name' : element.data.first,
    'last_name' :element.data.last,
    'email' : element.email,
    'created_at' : element.created_at
});
}

console.log(dataA);


app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});

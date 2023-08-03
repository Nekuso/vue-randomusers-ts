import { ref } from 'vue'

export const defaultUsers = {
  results: [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'پارسا',
        last: 'سلطانی نژاد'
      },
      location: {
        street: {
          number: 3049,
          name: 'شهید محمد منتظری'
        },
        city: 'مشهد',
        state: 'البرز',
        country: 'Iran',
        postcode: 68615,
        coordinates: {
          latitude: '17.5754',
          longitude: '-123.5623'
        },
        timezone: {
          offset: '+3:30',
          description: 'Tehran'
        }
      },
      email: 'prs.sltnynjd@example.com',
      login: {
        uuid: 'e5947b2a-8622-48d6-8da5-1eb04b5f6db6',
        username: 'redgoose189',
        password: 'skyhawk',
        salt: 'FzhlGZyX',
        md5: 'eddc1aa91b8f77da17421cb9298b9643',
        sha1: '6efb69b74fa5b38a8911576011cc89c44c683e5b',
        sha256: '30aad497eb729c71da9c6e1c0df70f8251314ef2edfffe083140401fc5323f05'
      },
      dob: {
        date: '1995-06-26T21:14:31.922Z',
        age: 28
      },
      registered: {
        date: '2016-08-23T20:47:09.770Z',
        age: 6
      },
      phone: '027-39387450',
      cell: '0963-123-4004',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/4.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/4.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/4.jpg'
      },
      nat: 'IR'
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Meral',
        last: 'Poyrazoğlu'
      },
      location: {
        street: {
          number: 7450,
          name: 'Anafartalar Cd'
        },
        city: 'Eskişehir',
        state: 'Amasya',
        country: 'Turkey',
        postcode: 36374,
        coordinates: {
          latitude: '13.5990',
          longitude: '-154.2258'
        },
        timezone: {
          offset: '+5:30',
          description: 'Bombay, Calcutta, Madras, New Delhi'
        }
      },
      email: 'meral.poyrazoglu@example.com',
      login: {
        uuid: 'b5235700-6ef9-4afb-b150-4f6fdbe6ae37',
        username: 'brownladybug631',
        password: 'tanner',
        salt: '8A8ZT4zO',
        md5: '3c08be1b0f2375b38b883d21af074382',
        sha1: 'fc976b1fe64b43260ce387acfce5d5e550307a0b',
        sha256: '31c19f2374a2ba80662ba98d170f6825a2ff70ef9f0441f2f1fb4dcba61df6e0'
      },
      dob: {
        date: '1985-03-15T07:17:23.793Z',
        age: 38
      },
      registered: {
        date: '2004-04-07T00:16:43.178Z',
        age: 19
      },
      phone: '(161)-888-1375',
      cell: '(120)-357-6514',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/43.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/43.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/43.jpg'
      },
      nat: 'TR'
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Theresa',
        last: 'Bailey'
      },
      location: {
        street: {
          number: 2455,
          name: 'Valley View Ln'
        },
        city: 'Launceston',
        state: 'Australian Capital Territory',
        country: 'Australia',
        postcode: 1207,
        coordinates: {
          latitude: '16.2773',
          longitude: '77.2173'
        },
        timezone: {
          offset: '+3:00',
          description: 'Baghdad, Riyadh, Moscow, St. Petersburg'
        }
      },
      email: 'theresa.bailey@example.com',
      login: {
        uuid: '172a2edd-25b9-4240-98c9-81709e0993d8',
        username: 'redmouse804',
        password: 'marco',
        salt: 'Qn4NXBQQ',
        md5: '2ae974bc31e701bfc2748d4a3799c9ea',
        sha1: 'ad82fa966d8567d9d818e84ef0610f0e029dc2c2',
        sha256: '084712b0f51285b655aa30eaf8d8ebfa0f96a37d2a8798f3641a5654da5654fb'
      },
      dob: {
        date: '1987-12-26T18:45:47.286Z',
        age: 35
      },
      registered: {
        date: '2018-02-02T02:14:32.873Z',
        age: 5
      },
      phone: '06-9471-4106',
      cell: '0421-947-742',
      id: {
        name: 'TFN',
        value: '078048383'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg'
      },
      nat: 'AU'
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Carmelo',
        last: 'Morel'
      },
      location: {
        street: {
          number: 8840,
          name: 'Rue Gasparin'
        },
        city: 'Schwarzhäusern',
        state: 'Neuchâtel',
        country: 'Switzerland',
        postcode: 9454,
        coordinates: {
          latitude: '-80.9624',
          longitude: '166.5391'
        },
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)'
        }
      },
      email: 'carmelo.morel@example.com',
      login: {
        uuid: 'a3eac7aa-9aac-4cc4-ae7b-2720b42f6cc7',
        username: 'bigbutterfly326',
        password: 'supreme',
        salt: 'PxaXkfe9',
        md5: 'cd40b0699175280df0d5f5fd56746416',
        sha1: '9f86ee4b02238363148c082070202293b7fc9b72',
        sha256: 'b2740d8e58694defcb55698523b2100bad05542685750119b5ea658ddd9aae1e'
      },
      dob: {
        date: '1970-06-24T08:39:55.918Z',
        age: 53
      },
      registered: {
        date: '2007-12-23T17:02:33.873Z',
        age: 15
      },
      phone: '075 870 06 93',
      cell: '076 303 68 80',
      id: {
        name: 'AVS',
        value: '756.2716.5965.61'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/56.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/56.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/56.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'باران',
        last: 'صدر'
      },
      location: {
        street: {
          number: 3422,
          name: 'اجاره دار'
        },
        city: 'شیراز',
        state: 'سمنان',
        country: 'Iran',
        postcode: 98641,
        coordinates: {
          latitude: '-42.2807',
          longitude: '-175.2516'
        },
        timezone: {
          offset: '-2:00',
          description: 'Mid-Atlantic'
        }
      },
      email: 'brn.sdr@example.com',
      login: {
        uuid: 'cd07d4d5-1252-4b3e-ac79-a60c211fd114',
        username: 'organicfish502',
        password: 'thunder',
        salt: 'uMU8SSqC',
        md5: 'a01f4c9b1bf28b8974af075607835b92',
        sha1: '137d2950941ecc434531f577a9fd77257f21678d',
        sha256: 'a96da69cd41106e5cdae8cbb416807cf80296c0c319ba559b5fb79cf19005287'
      },
      dob: {
        date: '1961-02-20T15:19:36.972Z',
        age: 62
      },
      registered: {
        date: '2013-09-19T17:34:26.779Z',
        age: 9
      },
      phone: '095-29378693',
      cell: '0924-310-4682',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/34.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/34.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/34.jpg'
      },
      nat: 'IR'
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Hava',
        last: 'Samsom'
      },
      location: {
        street: {
          number: 3453,
          name: 'Aldfeartswei'
        },
        city: 'Hengelo Ov',
        state: 'Noord-Brabant',
        country: 'Netherlands',
        postcode: '3541 CG',
        coordinates: {
          latitude: '-8.0880',
          longitude: '-77.2338'
        },
        timezone: {
          offset: '+1:00',
          description: 'Brussels, Copenhagen, Madrid, Paris'
        }
      },
      email: 'hava.samsom@example.com',
      login: {
        uuid: '9f2db00b-e535-416a-9e13-b3a8fa9b2993',
        username: 'silvercat878',
        password: 'copper',
        salt: 'wqKe8dvZ',
        md5: 'e3d65d2eac35f11d0df8a5f3e0e83bdc',
        sha1: 'da56894676831382f5c86171c635ee14b3fc9d67',
        sha256: '5c42609494e0049c79290f22d588615dd29068065688796469d173b94b7be6ac'
      },
      dob: {
        date: '1963-05-14T02:57:33.823Z',
        age: 60
      },
      registered: {
        date: '2012-01-23T14:50:28.710Z',
        age: 11
      },
      phone: '(0546) 149988',
      cell: '(06) 36514701',
      id: {
        name: 'BSN',
        value: '56259447'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/2.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/2.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
      },
      nat: 'NL'
    },
    {
      gender: 'female',
      name: {
        title: 'Mademoiselle',
        first: 'Danielle',
        last: 'Lefebvre'
      },
      location: {
        street: {
          number: 4359,
          name: 'Avenue du Château'
        },
        city: 'Lauenen',
        state: 'Zug',
        country: 'Switzerland',
        postcode: 2751,
        coordinates: {
          latitude: '-13.9444',
          longitude: '-25.2922'
        },
        timezone: {
          offset: '+9:30',
          description: 'Adelaide, Darwin'
        }
      },
      email: 'danielle.lefebvre@example.com',
      login: {
        uuid: '65196f59-bfbb-447e-9474-95f83f4ceaf6',
        username: 'crazysnake896',
        password: 'bobbob',
        salt: 'ZzBpXifV',
        md5: '10e71c97d2e9b3a2238b9c4c3809b100',
        sha1: '3d02fa29a72b5f07820e33a8d7ff9a159aa86dde',
        sha256: 'd7a5d45e33c1fd8bad5c6a10d377263889eee5baa7b02e5ece2e6b2a2abfc519'
      },
      dob: {
        date: '1962-04-18T09:43:44.641Z',
        age: 61
      },
      registered: {
        date: '2019-01-17T11:25:28.988Z',
        age: 4
      },
      phone: '079 325 85 91',
      cell: '075 530 11 45',
      id: {
        name: 'AVS',
        value: '756.4918.7235.36'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/85.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/85.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/85.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Saana',
        last: 'Nikula'
      },
      location: {
        street: {
          number: 9703,
          name: 'Tehtaankatu'
        },
        city: 'Ilmajoki',
        state: 'Ostrobothnia',
        country: 'Finland',
        postcode: 92280,
        coordinates: {
          latitude: '-39.1098',
          longitude: '-19.7442'
        },
        timezone: {
          offset: '-4:00',
          description: 'Atlantic Time (Canada), Caracas, La Paz'
        }
      },
      email: 'saana.nikula@example.com',
      login: {
        uuid: '6216ae4a-a59a-4750-9805-491f05d4c2d5',
        username: 'brownbird757',
        password: 'laguna',
        salt: 'jMc85YCb',
        md5: 'a6b9475337127755d8b427e1481fa573',
        sha1: '889c1b0fda6730b676e0ed3858b25b216b944b99',
        sha256: 'a2fbfb4c8f6c5c859cd57b91007e36e488116d91fdc8d42858bde7d3055dbe03'
      },
      dob: {
        date: '1989-07-09T21:51:43.639Z',
        age: 34
      },
      registered: {
        date: '2022-03-31T04:57:15.010Z',
        age: 1
      },
      phone: '03-050-687',
      cell: '041-024-29-46',
      id: {
        name: 'HETU',
        value: 'NaNNA534undefined'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/10.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/10.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/10.jpg'
      },
      nat: 'FI'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Dhiraj',
        last: 'Chatterjee'
      },
      location: {
        street: {
          number: 4944,
          name: 'Rani No Hajiro'
        },
        city: 'Durgapur',
        state: 'Maharashtra',
        country: 'India',
        postcode: 93905,
        coordinates: {
          latitude: '-2.1731',
          longitude: '-170.6735'
        },
        timezone: {
          offset: '+9:00',
          description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk'
        }
      },
      email: 'dhiraj.chatterjee@example.com',
      login: {
        uuid: 'f8669d94-686a-427f-bddb-6a826c028a38',
        username: 'sadmeercat695',
        password: 'friday',
        salt: 'KZEHp3Et',
        md5: 'ccd5716393b9d498ca4525f41f1d2e41',
        sha1: 'a5b9a2725df8a7bfa8d3341620757f087fbe853d',
        sha256: 'a5b7bacf5cdff8ab780b5bfcfbbe4dd6a8b619d27be3dc046c50d3886c460fdf'
      },
      dob: {
        date: '1970-09-17T18:10:41.602Z',
        age: 52
      },
      registered: {
        date: '2010-09-17T17:43:57.541Z',
        age: 12
      },
      phone: '9163083680',
      cell: '9876459035',
      id: {
        name: 'UIDAI',
        value: '557911290504'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/50.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/50.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/50.jpg'
      },
      nat: 'IN'
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Miriam',
        last: 'Montero'
      },
      location: {
        street: {
          number: 2547,
          name: 'Avenida de Burgos'
        },
        city: 'Lugo',
        state: 'Aragón',
        country: 'Spain',
        postcode: 79216,
        coordinates: {
          latitude: '81.4900',
          longitude: '-32.7144'
        },
        timezone: {
          offset: '-8:00',
          description: 'Pacific Time (US & Canada)'
        }
      },
      email: 'miriam.montero@example.com',
      login: {
        uuid: '6c587213-2d38-41e6-87fb-d664c21c24de',
        username: 'orangemouse536',
        password: 'redleg',
        salt: 'II56HaxR',
        md5: '806a27df8bd5bdca37e234df38c58fcd',
        sha1: '23a0826d537c91eaaa37fd61296e519005a17146',
        sha256: 'd59fb0c17d1f40da6bf3bf75e68494d1a231a9f16678e748b2d1f0cec1df0ed3'
      },
      dob: {
        date: '1977-07-06T06:34:10.789Z',
        age: 46
      },
      registered: {
        date: '2020-07-21T10:05:28.117Z',
        age: 3
      },
      phone: '917-854-715',
      cell: '692-073-798',
      id: {
        name: 'DNI',
        value: '07534794-A'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/61.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/61.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/61.jpg'
      },
      nat: 'ES'
    }
  ],
  info: {
    seed: '287dc4f53d274055',
    results: 10,
    page: 1,
    version: '1.4'
  }
}

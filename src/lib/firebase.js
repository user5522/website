import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCdU1itzSk8kc25MKmK--Ntxwj3sT8gqW4',

	authDomain: 'website5522-files.firebaseapp.com',

	projectId: 'website5522-files',

	storageBucket: 'website5522-files.appspot.com',

	messagingSenderId: '539570476071',

	appId: '1:539570476071:web:ebb2ff52d5f29588c6ea02',

	storageBucket: 'gs://website5522-files.appspot.com'
};

const app = initializeApp(firebaseConfig, 'web');

const storage = getStorage(app);

export { storage };

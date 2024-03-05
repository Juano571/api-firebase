import {config} from 'dotenv';
import {initializeApp, applicationDefault} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';

config();

const app = initializeApp({
    credential: applicationDefault()
});

const db = getFirestore(app);

export {db};

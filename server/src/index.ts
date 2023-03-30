import app from './app';
import { db } from './db';

try {
    db.sync();
    console.log('Connected to db.');
} catch (error) {
    console.error(error);
}

app.listen(9000, () => console.log('server is listening'));

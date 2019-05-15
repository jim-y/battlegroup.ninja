let DB_HOST = '127.0.0.1';
let DB_USER = 'ninja';
let DB_PASSWORD = 'ninja'

if (process.env.DB_HOST) {
    DB_HOST = process.env.DB_HOST;
} else if (process.env.NODE_ENV === 'production') {
    throw new Error('No DB_HOST environment variable set in production code');
}

if (process.env.DB_USER) {
    DB_USER = process.env.DB_USER;
} else if (process.env.NODE_ENV === 'production') {
    throw new Error('No DB_USER environment variable set in production code');
}

if (process.env.DB_PASSWORD) {
    DB_PASSWORD = process.env.DB_PASSWORD;
} else if (process.env.NODE_ENV === 'production') {
    throw new Error('No DB_PASSWORD environment variable set in production code');
}

export {
    DB_HOST,
    DB_USER,
    DB_PASSWORD
};
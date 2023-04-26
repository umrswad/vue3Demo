let BASE_URL = '';
const TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'https://api.bilibili.com/';
} else if (process.env.NODE_ENV === 'production') {
    BASE_URL = 'http://coderwhy.org/prod';
} else {
    BASE_URL = 'http://coderwhy.org/prod';
}

export { BASE_URL, TIME_OUT };

import { UsersApi } from '../constants/apiEndPoints';
import mock from './mock';

const data = [
    { editMode: false, id: 1, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Chitagong' },
    { editMode: false, id: 2, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 3, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 4, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 5, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 6, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 7, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 8, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 9, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 10, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 11, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 12, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 13, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 14, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 15, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 16, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 17, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 18, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 19, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 20, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 21, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 22, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 23, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 24, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 25, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 26, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 27, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 28, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 29, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 30, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 31, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 32, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 33, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 34, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 35, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 36, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 37, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 38, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 39, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 40, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 41, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 42, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 43, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 44, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 45, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 46, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 47, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 48, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 49, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 50, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
    { editMode: false, id: 51, name: 'Nasir Ahmed', email: 'nasir@mail.com', phone: '01234456789', address: 'Dhaka' },
]

mock.onGet(UsersApi.get).reply(config => {
    const { params: { page, perPage } } = config
    const modifiedData = data.map((item, index) => ({ ...item, name: `${item.name}_${index + 1}` }));
    const filtered = modifiedData.slice((page - 1) * perPage, ((page - 1) + 1) * perPage)

    return [200, { succeeded: true, data: filtered, total: modifiedData.length }];
});
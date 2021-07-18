import axios from 'axios';

const URL = 'https://asychrondev.herokuapp.com/api/';

const user = 'admin123';

const makeApiUrl = {
	profiles: URL + 'profiles',
	education: URL + 'educations',
	bankdetails: URL + 'banksDetails',
	references: URL + 'referances',
	families: URL + 'families',
	users: URL + 'users',
	certificates: URL + 'certificates',
	tasks: URL + 'tasks',
	performances: URL + 'performances',
	policies: URL + 'policies',
	forms: URL + 'forms',
	leaves: URL + 'leaves',
	assets: URL + 'assets',
	salaryDetails: URL + 'salaryDetails',
	polls: URL + 'polls'
};

export const getService = (entity, params = '') => {
	return axios.get(makeApiUrl[entity] + '?userName=' + user + params);
};

export const postService = (entity, payload) => {
	return axios.post(makeApiUrl[entity], { ...payload, userName: user });
};

export const deleteService = (entity, params = '') => {
	return axios.delete(makeApiUrl[entity] + '/' + params);
};

export const patchService = (entity, params = '', payload) => {
	return axios.patch(makeApiUrl[entity] + '/' + params, payload);
};

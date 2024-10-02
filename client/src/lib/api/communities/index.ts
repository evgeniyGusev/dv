import axios from 'axios';

const BASE_URL = '/api/communities';

export const CommunitiesApi = {
  fetchCommunities: async () => axios.get(BASE_URL),
};

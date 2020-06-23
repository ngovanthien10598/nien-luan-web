import axios from 'axios';
import apiPrefix from '../apiPrefix'

export function getAllProjects() {
  return axios.get(`${apiPrefix}/user/project/`);
}

export function getProjectsByDistrict(district_id) {
  return axios.get(`${apiPrefix}/user/project/`, {
    params: {
      district_id: district_id
    }
  })
}
const jobs = require();

const getAllJobs = () => {
  return jobs;
}

const getJobById = (id) => {
  return jobs.find((job) => job.id === id);
}

const getJobByName = (name) => {
  return jobs.find((job) => job.name === name);
}

module.exports = {
  getAllJobs,
  getJobById,
  getJobByName
}
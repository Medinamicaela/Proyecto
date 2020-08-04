const pool = require('./../utils/bd');

const getTestimonios = async () => {
  const query = "select * from ?? order by id desc";
  const rows = await pool.query(query,process.env.TABLA_TESTIMONIO);
  return rows;

};

module.exports = {
    getTestimonios,
};
/* eslint-disable react/prop-types */

const Home = ({ greeting }) => {
  console.log(greeting);
  return <div className="d-flex justify-content-center fs-1">{greeting}</div>;
};

export default Home;

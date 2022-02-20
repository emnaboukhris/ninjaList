import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title> Ninja list | About </title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1> About </h1>
        <p> hey this is a list made with next js </p>
      </div>
    </>
  );
};

export default About;

import Header from './Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="not-found">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;

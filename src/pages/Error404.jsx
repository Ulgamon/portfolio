const Error404 = () => {
  return (
    <div className="w-full min-h-screen bg-pastelBlue-primary py-16 px-1 overflow-auto flex flex-wrap justify-center content-center">
      <div className="text-center text-slate-900">
        <h1 className="text-8xl font-playfair-reg text-pastelOrange-error">
          404
        </h1>
        <h4 className="font-playfair-reg text-2xl font-bold m-2 tracking-wide">
          Not Found
        </h4>
        <p className="font-gotham">
          The resource you requested could not be found on this server.
        </p>
      </div>
    </div>
  );
};

export default Error404;

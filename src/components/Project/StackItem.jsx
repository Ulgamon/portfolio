const StackItem = ({ item }) => {
  return (
    <a target="_blank" href={item.url}>
      <div className="bg-white flex justify-center text-gray-900 font-medium py-1 my-0.5 mx-0.5 rounded-md">
        <div className="text-2xl m-1">{item.iconEl}</div> <div className="me-2 my-0.5">{item.title}</div>
      </div>
    </a>
  );
};

export default StackItem;

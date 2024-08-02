import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="p-4 flex flex-col justify-center items-center h-[100vh] ">
      <h1 className="text-2xl font-bold text-red-500">{err.status}</h1>
      <p>{err.statusText}</p>
    </div>
  );
};

export default Error;

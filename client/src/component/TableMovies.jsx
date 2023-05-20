import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableRegister = () => {
  const [movies, setMovies] = useState([]);

  // console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/movies");
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/movies/${id}`);
      getMovies();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col max-w-screen-xl px-4 py-32 mx-auto lg:h-screen">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-extrabold text-greenTokped">
          Table <span className="text-black">Movies</span>
        </h1>
      </div>
      <div className="px-4 mx-4 mt-8 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full text-sm divide-y-2 divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Id
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Title
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Genres
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Year
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Foto
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Settings
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {movies.map((movies, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {movies.id}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {movies.title}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {movies.genres}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {movies.year}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {movies.photo}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  <Link
                    to={`editMovies/${movies.id}`}
                    className="inline-block px-8 py-2 text-sm font-medium text-white bg-green-700 border border-green-700 rounded hover:bg-transparent hover:text-green-700 focus:outline-none focus:ring active:text-green-700">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(movies.id)}
                    className="inline-block px-8 py-2 text-sm font-medium text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center pt-3">
        <h1 className="text-2xl font-bold">Create Movies</h1>
        <Link
          to="/postmovie"
          className="inline-block px-8 py-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded hover:bg-transparent hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700">
          Create Movies
        </Link>
      </div>
    </div>
  );
};

export default TableRegister;

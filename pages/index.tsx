import Seo from "components/Seo";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
}
interface HomeType {
  movies: Movie[];
}
const Home: NextPage<HomeType> = ({ movies }) => {
  const router = useRouter();
  function onClick(id: number, title: string) {
    router.push(`movies/${title}/${id}`);
  }

  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div
          key={movie.id}
          className="movie"
          onClick={() => {
            onClick(movie.id, movie.original_title);
          }}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link href={`movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async () => {
  // TODO: 이게 왜 Frontend 에서만 작동하는지 알아보기
  // const response = await fetch(`/api/movies`);
  const response = await fetch("http://localhost:3000/api/movies");
  const { results } = await response.json();
  return {
    props: {
      movies: results,
    },
  };
};

export default Home;

import Seo from "components/Seo";
import { useRouter } from "next/router";

const Detail = ({ params }) => {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title as string}</h4>
    </div>
  );
};

export const getServerSideProps = ({ params: { params } }) => {
  return {
    props: {
      params,
    },
  };
};

export default Detail;

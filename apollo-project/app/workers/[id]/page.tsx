import Error from "@/app/error";
import WorkerDetails from "@/components/worker/WorkerDetails";

interface Props {
  params: { id: string };
}

const getWorker = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/workers/${id}`, {
    next: {
      tags: ["WorkerDetails"],
    },
  });
  return res.json();
};

export default async function WorkerDetailsPage({ params }: Props) {
  const data = await getWorker(params?.id);

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return <WorkerDetails data={data} />;
}

export async function generateMetadata({ params }: Props) {
  const data = await getWorker(params?.id);

  return {
    title: data?.worker?.name,
  };
}

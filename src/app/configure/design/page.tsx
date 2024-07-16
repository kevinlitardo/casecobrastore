import { db } from '@/db';
import { notFound } from 'next/navigation';
import DesignConfigurator from './DesignConfigurator';

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const DesignPage = async ({ searchParams }: Props) => {
  const { id } = searchParams;

  if (!id || typeof id !== 'string') {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: {
      id
    }
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, height, width } = configuration;

  return (
    <DesignConfigurator
      configId={id}
      imageDimensions={{ width, height }}
      imageUrl={imageUrl}
    />
  );
};

export default DesignPage;

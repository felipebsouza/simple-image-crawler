interface Props {
  message: string;
}

export default function CrawlInfo({ message }: Props) {
  return (
  <div className="border-b border-gray-900/10 py-6">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Error</h2>
      <p className="text-base leading-7">{message}</p>
    </div>
  );
};


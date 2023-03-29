import { useState } from 'react';


interface Props {
  onSubmit: (url: string, token: string) => void;
}

const ImageCrawlForm = ({ onSubmit }: Props) => {
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(url, token);
  };

  return (
    <form onSubmit={handleSubmit} className="center">
      <div className="space-y-12">

        <div className="border-b border-gray-900/10 py-6">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Simple Image Crawler</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Once you fill the fields with a complete URL of a page (with the protocol https://), and the security token provided to you, this will fire a crawling service API that will count all words of the page and bring all images in a gallery.</p>
          <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                Page URL
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="url"
                  id="url"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  autoComplete="url"
                  placeholder='https://www.site.com'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="token" className="block text-sm font-medium leading-6 text-gray-900">
                Token
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="token"
                  id="token"
                  value={token}
                  onChange={(event) => setToken(event.target.value)}
                  autoComplete="token"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-start gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crawl
            </button>

          </div>
        </div>
      </div>


    </form>





    // <form onSubmit={handleSubmit}>
    //   <div className="space-y-12">
    //     <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
    //       <div className="sm:col-span-3">
    //         <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
    //           First name
    //         </label>
    //         <div className="mt-2">
    //           <input
    //             type="text"
    //             name="url"
    //             id="url"
    //             autoComplete="given-name"
    //             placeholder="https://www.site.com"
    //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-b border-gray-900/10 pb-12">
    //       <input
    //         type="text"
    //         name="price"
    //         id="price"
    //         className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         placeholder="https://www.site.com"
    //       />
    //     </div>
    //   </div>
    /* <Label>URL:</Label>
    <Input
      type="text"
      value={url}
      onChange={(event) => setUrl(event.target.value)}
      required
    />

    <Label>Token:</Label>
    <Input
      type="text"
      value={token}
      onChange={(event) => setToken(event.target.value)}
      required
    />

    <SubmitButton type="submit">Crawl</SubmitButton> */
    // </form>
  );
};

export default ImageCrawlForm;


import { useRef } from "react";

import fs, { read } from "fs";


export default function imagehandler() {

  const hiddenFileInput = useRef<any>(null);
  const contentReadRef = useRef<any>(null)


  // const handleClick = (event) => {
  //   console.log(hiddenFileInput.current.files)
  // };
  // globalThis.pdfjsWorker = null;
  // pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';


  const handleClick = () => {

    // pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

    const file = hiddenFileInput.current.files[0];
    console.log(hiddenFileInput.current.files[0])
    // let dataBuffer = fs.readFileSync(hiddenFileInput.current.files[0]);


    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileName = file.name;
        const fileContent = fileReader.result as string;
        console.log(fileContent);

        // pdfParse(dataBuffer).then(function(data) {

        //   // number of pages
        //   console.log(data.numpages);
        //   // number of rendered pages
        //   console.log(data.numrender);
        //   // PDF info
        //   console.log(data.info);
        //   // PDF metadata
        //   console.log(data.metadata);
        //   // PDF.js version
        //   // check https://mozilla.github.io/pdf.js/getting_started/
        //   console.log(data.version);
        //   // PDF text
        //   console.log(data.text);

        // });
      }
      fileReader.readAsArrayBuffer(file);

    }



    // @ts-ignore
    // let loadingTask = await getDocument({ data: file }).promise;

    // console.log(loadingTask)
    // pdfToText(file)
    //   .then(text => console.log(text))
    //   .catch(error => console.error("Failed to extract text from pdf"))
    // if (!file.type.startsWith("txt")) {
    //   console.log("Unsupported file type. Please select a text file.", "error");
    //   return;
    // }
    // var loadingTask = pdfjs.getDocument(file);
    // loadingTask.promise.then(function (pdf) {
    //   console.log('Found ' + file)
    // });


    // reader.onload = () => {

    //   // var string = 'Hello World!';
    //   // var buffer = new ArrayBuffer(string.length * 2);
    //   // var bufferView = new Uint16Array(buffer);
    //   // for (var i = 0; i < string.length; i++) {
    //   //   bufferView[i] = string.charCodeAt(i);
    //   // }
    //   // console.log(bufferView);
    //   // var _string = String.fromCharCode.apply(null, reader.result);
    //   // console.log(_string);
    //   // // console.log(reader.result)
    //   // const decoder = new TextDecoder();
    //   // const str = decoder.decode(reader.result);
    //   // contentReadRef.current.innerHTML = "Content: " + (reader.result);
    // };
    // reader.onerror = () => {
    //   setErrorMessage("Error reading the file. Please try again.");
    // };

    // reader.readAsArrayBuffer(file);

  }

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <div>
          <label
            htmlFor="document"
            className="block text-sm font-medium text-gray-700"
          >
            File Upload
          </label>
          <div className="mt-1">
            <input ref={hiddenFileInput}
              id="document"
              required
              // eslint-disable-next-line jsx-a11y/no-autofocus
              name="document"
              type="file"
              className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Process
        </button>
        <div>
          <label
            htmlFor="contentRead"
            className="block text-sm font-medium text-gray-700"
          >
            Result:
          </label>
          <p id="contentRead" ref={contentReadRef}>
          </p>
        </div>
      </div>

    </div>
  );
}

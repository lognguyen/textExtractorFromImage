'use client';
import { useRef, useState, useEffect } from "react";
import Tesseract from "tesseract.js";

import fs, { read } from "fs";


export default function imagehandler() {
    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");
    const [confidenceScore, setConfidenceScore] = useState(0);
    // const hiddenFileInput = useRef<any>(null);
    // const contentReadRef = useRef<any>(null)

    const handleChange = (event: any) => {
        console.log(event.target.files)
        setImagePath(URL.createObjectURL(event.target.files[0]))
    }

    const handleClick = async () => {
        const result = await Tesseract.recognize(
            imagePath
        );
        setText(result.data.text)
        setConfidenceScore(result.data.confidence)
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
                        {imagePath == '' ? null : <img src={imagePath} className="Image" />}
                        <input
                            type="file"
                            onChange={handleChange}
                            required
                            className="w-full rounded border border-gray-500 px-2 py-1 text-lg" />
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
                    {confidenceScore == 0 ? null : <div id="Confidence Score">Confidence Score: {confidenceScore}</div>}
                    <label
                        htmlFor="contentRead"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Result:
                    </label>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}

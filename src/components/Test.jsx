// import Dummy from './../../../public/dummy.pdf';
// import Dummy from './../../public/dummy.pdf';
import Dummy from './../../dummy.pdf';

const Test = () => {
    return (
        <div className="flex gap-3">
            <a
                href="https://drive.google.com/file/d/1ooLNdW1byJH-uBAmtJP9zqOOTHSfPvCF/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-semibold text-white transition-transform duration-500 transform rounded-lg shadow-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 hover:shadow-2xl"
            >
                Open Me
            </a>

            <a
                href="https://drive.google.com/file/d/1ooLNdW1byJH-uBAmtJP9zqOOTHSfPvCF/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-semibold text-white transition-transform duration-500 transform rounded-lg shadow-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 hover:shadow-2xl"
            >
                Select Me
            </a>

            <a target="_blank" href={Dummy} download="Dummy.pdf"
            >
                Download CV
            </a>

            Hello, Successfully Tested.
        </div>
    )
}

export default Test;

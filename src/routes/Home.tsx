import PayButton, { lnbitsDocs } from "../components/PayButton"

const completeLink = import.meta.env.VITE_complete_link

export default function Home() {
    return (
        // <div className="px-5 py-24 mx-auto h-screen flex items-center text-gray-600 body-font overflow-hidden">
            <div className="p-8 lg:w-4/5 mx-auto flex flex-wrap text-gray-600">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 self-center">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">LIVE DEMO</h2>
                    <h1 className="text-grey-600 dark:text-gray-300 text-3xl title-font font-medium mb-4">LNBits - SatsPayServer</h1>
                    <div className="flex mb-4">
                        <a className="flex-grow text-amber-500 border-b-2 border-amber-500 py-2 text-lg px-1">Description</a>
                    </div>
                    <p className="leading-relaxed mb-4"> Self-hosted Lightning Payment ⚡️ made easy! LNBits is a account system built on top of Lightning Node. It came with many extensions that support various use cases. This is a demo of SatsPayServer extension. It can be used as a light-weight payment processor. </p>
                    <p className="mb-4" >If you're visiting via the live demo. The LNBits end-point you're using is "legend.lnbits.com" managed by creators of LNBits. Try it with your self-hosted LNBits instance by fork this repo and config .env file.</p>
                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-grey-600 dark:text-gray-300">100 sats</span>

                        {/* Over Here! */}
                        <PayButton />
                        {/* ----- */}
                    </div>
                    <a href={lnbitsDocs} target="_blank" className="underline block text-center mt-2">Learn more at LNBits Documentation</a>
                </div>
                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
            </div>
        // </div>
    )
}
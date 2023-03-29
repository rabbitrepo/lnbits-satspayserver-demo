import { lnbitsDocs } from "../components/PayButton";

export default function Success() {
    return (
        <div className="flex h-screen w-screen items-center justify-center flex-col">
            <p className="text-center text-5xl">Thank you for purchase!</p>
            <a href={ lnbitsDocs } target="_blank" className="mt-4 underline">Learn more at LNBits Documentation</a>
        </div>
    )
}
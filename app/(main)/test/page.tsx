"use client"
import { runAgentAction } from "@/ai/agent"; // Import fungsi pembungkusnya
import { useState } from "react";

export default function Test() {
    const [inputUser, setInputUser] = useState("")
    const [result, setResult] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            <input 
                className="text-black" // Pastikan kelihatan teksnya
                type="text" 
                onChange={(e) => setInputUser(e.target.value)}
            />
            <button 
                disabled={isLoading}
                onClick={async () => {
                    setIsLoading(true)
                    try {
                        // Memanggil fungsi ini akan otomatis melakukan POST request ke server
                        const res = await runAgentAction(inputUser, "project", "about")
                        setResult(res ?? "Tidak ada respon")
                    } catch (err) {
                        console.error(err)
                        setResult("Error terjadi, cek console")
                    } finally {
                        setIsLoading(false)
                    }
                }}
            >
                {isLoading ? "Loading..." : "Invoke"}
            </button>

            {result ? (
                <div className="mt-4">
                    <h3>Result:</h3>
                    <p>{result}</p> 
                </div>
            ) : (
                <p>Invoke dulu</p>
            )}
        </>
    )
}
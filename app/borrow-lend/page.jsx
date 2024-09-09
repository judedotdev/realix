"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useAccount, useBalance, useChainId, useGasPrice, useReadContract, useSendTransaction, useSignMessage, useSwitchAccount, useSwitchChain, useWriteContract } from "wagmi";
import { getContract } from "viem";

const BORROWING_CONTRACT_ADDRESS = "your_borrowing_contract_address";
const LENDING_CONTRACT_ADDRESS = "your_lending_contract_address";
const BORROWING_CONTRACT_ABI = [ /* ABI for Borrowing Contract */];
const LENDING_CONTRACT_ABI = [ /* ABI for Lending Contract */];

export default function BorrowingAndLending() {
    const [borrowAmount, setBorrowAmount] = useState("");
    const [lendAmount, setLendAmount] = useState("");
    const [borrowStatus, setBorrowStatus] = useState("");
    const [lendStatus, setLendStatus] = useState("");
    const { address } = useAccount();
    const { writeContract, writeContractAsync } = useWriteContract();

    // const borrowingContract = getContract({
    //     abi: BORROWING_CONTRACT_ADDRESS,
    //     address: BORROWING_CONTRACT_ABI,
    //     client: {
    //         public: publicClient,
    //         wallet: walletClient,
    //     }
    // });

    // const lendingContract = getContract({
    //     abi: LENDING_CONTRACT_ADDRESS,
    //     address: LENDING_CONTRACT_ABI,
    //     client: {
    //         public: publicClient,
    //         wallet: walletClient,
    //     }
    // });

    const handleBorrow = async () => {
        try {
            setBorrowStatus("Processing...");
            // const tx = await borrowingContract.write.borrow([borrowAmount]);
            // await tx.wait();
            const tx = await writeContractAsync({
                abi: BORROWING_CONTRACT_ABI,
                address: BORROWING_CONTRACT_ADDRESS,
                functionName: 'borrow',
                args: [borrowAmount],
            });
            setBorrowStatus("Borrowing successful!");
        } catch (error) {
            console.error(error);
            setBorrowStatus("An error occurred while borrowing.");
        }
    };

    const handleLend = async () => {
        try {
            setLendStatus("Processing...");
            // const tx = await lendingContract.write.lend([lendAmount]);
            // await tx.wait();
            const tx = await writeContractAsync({
                abi: LENDING_CONTRACT_ABI,
                address: LENDING_CONTRACT_ADDRESS,
                functionName: 'lend',
                args: [lendAmount],
            });
            setLendStatus("Lending successful!");
        } catch (error) {
            console.error(error);
            setLendStatus("An error occurred while lending.");
        }
    };

    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Borrowing & Lending</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Explore our borrowing and lending services and interact with our smart contracts.
                    </p>
                </div>
            </section>

            {/* Borrowing & Lending UI */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Borrowing</h2>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Borrow Funds</h3>
                            <input
                                type="number"
                                placeholder="Amount in ETH"
                                value={borrowAmount}
                                onChange={(e) => setBorrowAmount(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            />
                            <button
                                onClick={handleBorrow}
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                            >
                                Borrow
                            </button>
                            {borrowStatus && <p className="mt-4 text-gray-600">{borrowStatus}</p>}
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-0 lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Lending</h2>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Lend Funds</h3>
                            <input
                                type="number"
                                placeholder="Amount in ETH"
                                value={lendAmount}
                                onChange={(e) => setLendAmount(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            />
                            <button
                                onClick={handleLend}
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                            >
                                Lend
                            </button>
                            {lendStatus && <p className="mt-4 text-gray-600">{lendStatus}</p>}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}

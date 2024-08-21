"use client";
import React, { Component, useEffect, useState } from 'react';
import { useSwitchChain, useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export function Wallet() {
    const { open } = useWeb3Modal();
    const { address, addresses, chain, chainId, connector, status } = useAccount();
    const { switchChain } = useSwitchChain();

    return (
        <div className='flex flex-nowrap justify-end whitespace-nowrap space-x-2'>
            {/* <w3m-button size='sm' balance='hide' /> */}
            <>
                {chain?.name && (
                    <button
                        className="bg-blue-950 hover:bg-blue-900 text-white md:py-1 px-3 rounded-xl hidden md:flex items-center md:gap-1"
                        id="network"
                        onClick={() => open({ view: "Networks" })}
                    >
                        <p className="hidden md:flex"> {chain?.name}</p>
                    </button>
                )}
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-full min-w-28 flex items-center justify-center gap-1"
                    onClick={() => open()}
                >
                    {address
                        ? `${address.slice(0, 4)}...${address.slice(-6)}`
                        : "Connect Wallet"}
                </button>
            </>
        </div>
    );
}
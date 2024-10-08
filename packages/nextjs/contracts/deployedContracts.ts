/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    RandomnessPrediction: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "blockNumber",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "number",
              type: "uint8",
            },
          ],
          name: "CheckIfMatch",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "blockNumber",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "number",
              type: "uint8",
            },
          ],
          name: "Prediction",
          type: "event",
        },
        {
          inputs: [],
          name: "FUTURE_BLOCKS",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "HIGH_NUMBER",
          outputs: [
            {
              internalType: "uint56",
              name: "",
              type: "uint56",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "rlpBytes",
              type: "bytes",
            },
          ],
          name: "checkIfMatchToPredict",
          outputs: [
            {
              internalType: "string",
              name: "result",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_number",
              type: "uint8",
            },
          ],
          name: "predict",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "predictions",
          outputs: [
            {
              internalType: "uint8",
              name: "number",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "blockNumber",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "rolled",
              type: "bool",
            },
            {
              internalType: "uint8",
              name: "rolledNumber",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;

import { Contract, JsonRpcProvider } from "ethers";
import { CONFIG } from "../config/chainleader";

export const ValleyProfile = async (address: string) => {
  const provider = new JsonRpcProvider(
    "https://base-mainnet.g.alchemy.com/v2/yeRMpfqz9mcsk7jRv7N0u9T17DBa7eJb"
  );
  const Valley_Profile = new Contract(
    CONFIG.base.valley_profile,
    [
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "getSocialAccountInfo",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    provider
  );
  const valley_info_data = await Valley_Profile.getSocialAccountInfo(address);
  if (valley_info_data === "") {
    console.log("nullVal");
  } else {
    console.log("valley_info_data", valley_info_data);
  }
  return valley_info_data;
};

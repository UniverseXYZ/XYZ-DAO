/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BarnMockInterface extends ethers.utils.Interface {
  functions: {
    "bondCirculatingSupply()": FunctionFragment;
    "lockCreatorBalance(address,uint256)": FunctionFragment;
    "lockCreatorBalanceHasBeenCalled()": FunctionFragment;
    "setBondCirculatingSupply(uint256)": FunctionFragment;
    "setVotingPower(address,uint256)": FunctionFragment;
    "votingPowerAtTs(address,uint256)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawHasBeenCalled()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bondCirculatingSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockCreatorBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockCreatorBalanceHasBeenCalled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBondCirculatingSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setVotingPower",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votingPowerAtTs",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawHasBeenCalled",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "bondCirculatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockCreatorBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockCreatorBalanceHasBeenCalled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBondCirculatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVotingPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPowerAtTs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawHasBeenCalled",
    data: BytesLike
  ): Result;

  events: {};
}

export class BarnMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BarnMockInterface;

  functions: {
    bondCirculatingSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "bondCirculatingSupply()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    lockCreatorBalance(
      user: string,
      timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lockCreatorBalance(address,uint256)"(
      user: string,
      timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lockCreatorBalanceHasBeenCalled(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "lockCreatorBalanceHasBeenCalled()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    setBondCirculatingSupply(
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBondCirculatingSupply(uint256)"(
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setVotingPower(
      user: string,
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setVotingPower(address,uint256)"(
      user: string,
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    votingPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "votingPowerAtTs(address,uint256)"(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawHasBeenCalled(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "withdrawHasBeenCalled()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  bondCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "bondCirculatingSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  lockCreatorBalance(
    user: string,
    timestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lockCreatorBalance(address,uint256)"(
    user: string,
    timestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lockCreatorBalanceHasBeenCalled(overrides?: CallOverrides): Promise<boolean>;

  "lockCreatorBalanceHasBeenCalled()"(
    overrides?: CallOverrides
  ): Promise<boolean>;

  setBondCirculatingSupply(
    val: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBondCirculatingSupply(uint256)"(
    val: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setVotingPower(
    user: string,
    val: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setVotingPower(address,uint256)"(
    user: string,
    val: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  votingPowerAtTs(
    user: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "votingPowerAtTs(address,uint256)"(
    user: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawHasBeenCalled(overrides?: CallOverrides): Promise<boolean>;

  "withdrawHasBeenCalled()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    bondCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "bondCirculatingSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    lockCreatorBalance(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "lockCreatorBalance(address,uint256)"(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockCreatorBalanceHasBeenCalled(
      overrides?: CallOverrides
    ): Promise<boolean>;

    "lockCreatorBalanceHasBeenCalled()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    setBondCirculatingSupply(
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBondCirculatingSupply(uint256)"(
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setVotingPower(
      user: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setVotingPower(address,uint256)"(
      user: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    votingPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "votingPowerAtTs(address,uint256)"(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawHasBeenCalled(overrides?: CallOverrides): Promise<boolean>;

    "withdrawHasBeenCalled()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    bondCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "bondCirculatingSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    lockCreatorBalance(
      user: string,
      timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lockCreatorBalance(address,uint256)"(
      user: string,
      timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lockCreatorBalanceHasBeenCalled(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lockCreatorBalanceHasBeenCalled()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBondCirculatingSupply(
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBondCirculatingSupply(uint256)"(
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setVotingPower(
      user: string,
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setVotingPower(address,uint256)"(
      user: string,
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    votingPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "votingPowerAtTs(address,uint256)"(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawHasBeenCalled(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawHasBeenCalled()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bondCirculatingSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bondCirculatingSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockCreatorBalance(
      user: string,
      timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lockCreatorBalance(address,uint256)"(
      user: string,
      timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lockCreatorBalanceHasBeenCalled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lockCreatorBalanceHasBeenCalled()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBondCirculatingSupply(
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBondCirculatingSupply(uint256)"(
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setVotingPower(
      user: string,
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setVotingPower(address,uint256)"(
      user: string,
      val: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    votingPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "votingPowerAtTs(address,uint256)"(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawHasBeenCalled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "withdrawHasBeenCalled()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
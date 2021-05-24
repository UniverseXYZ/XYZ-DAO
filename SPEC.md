## Thresholds

- **Create proposal**: 1% of XYZ staked in Supernova
- **Minimum quorum**: 40% of XYZ staked in Supernova
- **Minimum acceptance**: 60% of votes

## Proposals

- User that holds enough vXYZ can create a proposal
    - Proposal creator:
        - can vote on other proposals
        - can only have one active proposal at a time
    - Proposal is formed of:
        - list of targets (addresses)
        - list of values
        - list of signatures
        - list of calldata
        - description
        - title
        - id
    - Proposal has a maximum number of 10 actions that can be executed
        - when the proposal is executed, either all actions are executed or none of them (if one of them reverts, the whole proposal execution reverts)
- A proposal can have the following states:

![](diagrams/state.png)

- after being created, proposal enters the **Warm-up** state for `WARMUP_PERIOD` to allow people to stake their XYZ
    - if the creator's balance falls below the 1% threshold the proposal can be cancelled by calling a function
- after **Warm-up**, any user can vote
    - `VOTING_PERIOD` starts immediately after `WARMUP_PERIOD`
    - at the first incoming vote if the creator's balance falls below the 1% threshold the proposal is cancelled automatically or it can be cancelled by calling a function
- once a proposal is accepted, it will have to wait in the queue for `QUEUE_PERIOD` before it can be executed
    - during this time it can be cancelled by:
        - the creator
        - anyone if the creator's balance falls below the 1% threshold
        - cancellation proposal
- once a proposal becomes executable, any user can call the execute function
    - if the proposal is not executed during `GRACE_PERIOD`, it is marked as expired and cannot be executed anymore

## Cancellation Proposals

- This is a special type of proposal, with the following thresholds:
    - Acceptance criteria: 50% of staked XYZ
- Can be created only during the `QUEUE_PERIOD`
- A proposal can only have one associated cancellation proposal at any given time
- Anyone can vote on these proposals
    - vote for / against
    - cancel vote
    - change vote
- There is a new snapshot for voter balances - taken at Cancellation Proposal start time
- Cancellation Proposal's duration is never greater than the Initial Proposal's `QUEUE_PERIOD`
- Cancellation Proposal's end time is the same as the Initial Proposal's end time
- When someone goes to execute the Initial Proposal - there is a check if a Cancellation Proposal that met its acceptance criteria exists

## Voting

- user can vote using his vXYZ balance + delegated vXYZ at the voting start timestamp/block
- user can only be pro or against
- user can cancel vote
- user can change vote

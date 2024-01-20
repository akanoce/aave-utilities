import { providers } from 'ethers';
import { BaseDebtTokenInterface } from '../baseDebtToken-contract';
import BaseService from '../commons/BaseService';
import { EthereumTransactionTypeExtended, tEthereumAddress } from '../commons/types';
import { ERC20Service } from '../erc20-contract';
import { Pool } from '../v3-pool-contract';
import { IMigrationHelper } from './typechain/IMigrationHelper';
import { V3MigrationType, V3GetMigrationSupplyType } from './v3MigrationTypes';
export interface V3MigrationHelperInterface {
    migrate: (params: V3MigrationType) => Promise<EthereumTransactionTypeExtended[]>;
}
export declare class V3MigrationHelperService extends BaseService<IMigrationHelper> implements V3MigrationHelperInterface {
    readonly baseDebtTokenService: BaseDebtTokenInterface;
    readonly provider: providers.Provider;
    readonly MIGRATOR_ADDRESS: tEthereumAddress;
    readonly erc20Service: ERC20Service;
    readonly pool: Pool;
    constructor(provider: providers.Provider, MIGRATOR_ADDRESS: tEthereumAddress, pool: Pool);
    getMigrationSupply({ asset, amount }: V3GetMigrationSupplyType): Promise<[string, import("ethers").BigNumber]>;
    migrate({ supplyAssets, user, repayAssets, signedSupplyPermits, signedCreditDelegationPermits, creditDelegationApprovals, }: V3MigrationType): Promise<EthereumTransactionTypeExtended[]>;
    private approveDelegationTokens;
    private approveSupplyAssets;
    private splitSignedPermits;
    private splitSignedCreditDelegationPermits;
}
//# sourceMappingURL=index.d.ts.map
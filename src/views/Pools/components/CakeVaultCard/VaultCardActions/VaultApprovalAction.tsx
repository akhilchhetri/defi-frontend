import React from 'react'
import { Button, AutoRenewIcon, Skeleton } from '@doodaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useVaultApprove } from '../../../hooks/useApprove'
import { StyledStakeButton } from '../../PoolsTable/ActionPanel/styles'

interface ApprovalActionProps {
  setLastUpdated: () => void
  isLoading?: boolean
}

const VaultApprovalAction: React.FC<ApprovalActionProps> = ({ isLoading = false, setLastUpdated }) => {
  const { t } = useTranslation()

  const { handleApprove, requestedApproval } = useVaultApprove(setLastUpdated)

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <StyledStakeButton
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={requestedApproval}
          onClick={handleApprove}
          width="100%"
        >
          {t('Enable')}
        </StyledStakeButton>
      )}
    </>
  )
}

export default VaultApprovalAction

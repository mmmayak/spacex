import React, { FunctionComponent } from 'react'
import { Popover, Paper } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { GET_SHIP, renderItem } from '../../../containers/ShipItemContainer'
import FetchHelper from '../../../utils/helpers/FetchHelper'
import checkForUndefined from '../../../utils/helpers/checkForUndefined'

type IPopoverItemData = {
  year_built: string;
  status: string;
  model: string;
  type: string;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  classes: any;
}

const PopoverItemData: FunctionComponent<IPopoverItemData> = ({ year_built, status, model, type, open, anchorEl, handleClose, classes }) => {

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left'
      }}
    >
      <Paper className={classes.paper}>
        {renderItem({
          model,
          type,
          year_built,
          active: status
        }, '')}
      </Paper>
    </Popover>
  )
}

export default PopoverItemData;

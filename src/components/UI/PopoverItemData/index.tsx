import React, { FunctionComponent } from 'react'
import { Popover, Paper } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { GET_SHIP } from '../../../containers/ShipItemContainer'
import FetchHelper from '../../../utils/helpers/FetchHelper'

type IPopoverItemData = {
  id: string | number;
  open: boolean;
  handleClose: () => void;
  anchorEl: HTMLButtonElement | null;
  classes: any;
}

const PopoverItemData: FunctionComponent<IPopoverItemData> = ({ id, open, anchorEl, handleClose, classes }) => {
  const { loading, error, data } = useQuery(GET_SHIP, {
    variables: { id }
  })

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
        <FetchHelper
          loading={loading}
          error={!!error}>
          {data
            &&
            <>
              <p>{data.ship.model}</p>
              <p>{data.ship.type}</p>
              <p>{data.ship.year_built}</p>
              <p>{data.ship.weight_kg}</p>
            </>}
        </FetchHelper>
      </Paper>
    </Popover>
  )
}

export default PopoverItemData;

import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

export default function TabContent() {
  return (
    <Card>
      <CardContent>
        <StyledTypography color="textSecondary" gutterBottom>
          Word of the Day
        </StyledTypography>
        <Typography variant="body2" component="p">
          well meaning and kindly. well meaning and kindly.well meaning and kindly. well meaning and kindly.well meaning and kindly. well meaning and kindly.well meaning and kindly. well meaning and kindly.well meaning and kindly. well meaning and kindly.
        </Typography>
      </CardContent>
      <Box display="flex" flexDirection="row-reverse">
        <StyledButton variant="contained" color="primary" size="small">
          <DoneIcon />
          Done
        </StyledButton>
        <StyledButton variant="contained" color="default" size="small">
          <EditIcon />
          Edit
        </StyledButton>
        <StyledButton variant="contained" color="secondary" size="small">
          <DeleteIcon />
          Delete
        </StyledButton>
      </Box>
    </Card>
  )
}

const StyledTypography = styled(Typography)`
  font-size: 30;
  color: black;
`

const StyledButton = styled(Button)`
  margin: 10px;
`

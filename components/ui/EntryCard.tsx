import React, { FC,DragEvent, useContext } from 'react' 
import { Card, CardContent, CardActionArea, Typography, CardActions} from '@mui/material';
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui';

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({entry}) => {
  const {startDragging, endDragging} = useContext(UIContext)
  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id)
    startDragging();
  }  
  const onDragEnd = () => {
    endDragging()
  }
  return (
    <Card
      sx={{marginBottom: 1}}
      //events
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiterSpace: 'pre-line'}}>
             {entry.description}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
        <Typography variant="body2">Hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>

    </Card>
  )
}

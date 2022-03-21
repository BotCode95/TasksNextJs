import React, { FC, useContext,useMemo } from 'react'
import { Paper, List,} from '@mui/material'
import {EntryCard} from './'
import { Status } from '../../interfaces/entry';
import { EntriesContext } from '../../context/entries';

interface Props {
  status: Status
}

export const EntryList: FC<Props> = ({status}) => {

  const {entries} = useContext(EntriesContext)
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])
  return (
    <div>
        <Paper sx={{height: 'calc(100vh-180px)', overflow: 'scrool', 
        backgroundColor: 'transparent', padding: '1px 5px'}}>
            {/* TODO : cambia si estoy usando drag */}
            <List sx={{opacity: 1}}>
              {
                entriesByStatus.map(entry => (
                    <EntryCard key={entry._id} entry={entry}/>
                ))
              }
            </List>
        </Paper>
    </div>
  )
}
